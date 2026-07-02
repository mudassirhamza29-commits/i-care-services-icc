"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { SERVICES } from "@/lib/constants";
import {
  professionalReferralSchema,
  type ProfessionalReferralSubmission,
} from "@/lib/formSchemas";

type FormData = ProfessionalReferralSubmission;

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/15";

export function ProfessionalReferralForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(professionalReferralSchema),
    mode: "onBlur",
    defaultValues: {
      website: "",
      startedAt,
      contactMethod: "Phone",
      isEmergency: "No",
    },
  });
  const reason = watch("reason") ?? "";
  const isEmergency = watch("isEmergency");

  const onSubmit = async (data: FormData) => {
    setFormError(null);
    const response = await fetch("/api/referrals/professional", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = (await response.json().catch(() => null)) as {
      reference?: string;
      error?: string;
    } | null;

    if (!response.ok || !payload?.reference) {
      setFormError(
        payload?.error ?? "We could not submit this referral. Please try again.",
      );
      return;
    }

    setReference(payload.reference);
  };

  if (reference) {
    return (
      <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm" role="status">
        <CheckCircle2 className="mx-auto text-purple" size={64} />
        <h3 className="mt-5 font-heading text-3xl font-extrabold text-navy">
          Referral Received
        </h3>
        <p className="mt-3 font-bold text-purple">Reference: {reference}</p>
        <p className="mt-4 text-text-secondary">
          The referral has been received for first-contact review.
          【CONTENT NEEDED: response-time commitment in working days】
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {formError ? (
        <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">
          {formError}
        </div>
      ) : null}
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <FormSection title="First Contact Referral">
        <p className="mb-5 text-sm leading-6 text-text-secondary">
          This form is for first contact only. Please avoid sending detailed
          special-category information through the public website. Sensitive
          information can be gathered later through a secure, staffed
          conversation.
        </p>
        <CrisisNotice compact className="mb-6" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your full name" error={errors.professionalName?.message}>
            <input {...register("professionalName")} autoComplete="name" className={inputClass} aria-required="true" />
          </Field>
          <Field label="Your role/job title" error={errors.role?.message}>
            <input {...register("role")} className={inputClass} aria-required="true" />
          </Field>
          <Field label="Organisation name" error={errors.organisation?.message}>
            <input {...register("organisation")} className={inputClass} aria-required="true" />
          </Field>
          <Field label="Preferred contact method" error={errors.contactMethod?.message}>
            <select {...register("contactMethod")} className={inputClass} aria-required="true">
              <option>Phone</option>
              <option>Email</option>
            </select>
          </Field>
          <Field label="Contact detail" help="Enter the phone number or email address we should use." error={errors.contactDetail?.message}>
            <input {...register("contactDetail")} autoComplete="email tel" className={inputClass} aria-required="true" />
          </Field>
          <Field label="Client name or initials" required={false} help="Optional. Use initials if that is more appropriate at first contact.">
            <input {...register("clientName")} className={inputClass} />
          </Field>
          <Field label="Service area of interest" error={errors.serviceArea?.message}>
            <select {...register("serviceArea")} className={inputClass} aria-required="true">
              <option value="">Select a service area</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Is anyone in immediate danger or needing urgent crisis support?" error={errors.isEmergency?.message}>
            <select {...register("isEmergency")} className={inputClass} aria-required="true">
              <option>No</option>
              <option>Yes</option>
            </select>
          </Field>
        </div>
        {isEmergency === "Yes" ? <CrisisNotice className="mt-5 border-red-300 bg-red-50" /> : null}
        <Field
          label="Brief reason for contact"
          help="Keep this brief. Do not include detailed risk, health, sexual-health or safeguarding narratives in this public form."
          error={errors.reason?.message}
          className="mt-6"
        >
          <textarea rows={5} maxLength={700} {...register("reason")} className={inputClass} aria-required="true" />
          <p className="mt-2 text-right text-xs text-text-secondary">{reason.length}/700</p>
        </Field>
        <fieldset className="mt-6">
          <legend className="font-bold text-navy">
            Has the client consented to this referral? <span className="font-normal">(required)</span>
          </legend>
          <RadioRow values={["Yes", "No", "Client lacks capacity"]} register={register("clientConsent")} />
          <Error message={errors.clientConsent?.message} />
        </fieldset>
      </FormSection>
      <FormSection title="Professional Declarations">
        <p className="mb-5 text-sm leading-6 text-text-secondary">
          Confidentiality applies within safeguarding limits. Retention period:
          【CONTENT NEEDED: retention period】.
        </p>
        <Consent label="I confirm I am making this referral in a professional capacity and in good faith." register={register("professionalDeclaration")} error={errors.professionalDeclaration?.message} />
        <Consent label="I confirm consent or another lawful basis has been considered, and that this form is not being used for an emergency." register={register("consentDeclaration")} error={errors.consentDeclaration?.message} />
      </FormSection>
      <button
        disabled={isSubmitting || isEmergency === "Yes"}
        className="interactive-button flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <LoaderCircle className="animate-spin" size={20} />}
        {isSubmitting ? "Submitting..." : "Submit First-Contact Referral"}
      </button>
    </form>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
      <h3 className="mb-6 font-heading text-2xl font-extrabold text-navy">{title}</h3>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
  error,
  help,
  required = true,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  help?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-bold text-navy ${className}`}>
      {label} {required ? <span className="font-normal">(required)</span> : null}
      {help ? <span className="mt-1 block text-xs font-medium leading-5 text-text-secondary">{help}</span> : null}
      {children}
      <Error message={error} />
    </label>
  );
}

function Error({ message }: { message?: string }) {
  return message ? <span className="mt-1.5 block text-sm font-semibold text-coral">{message}</span> : null;
}

function RadioRow({ values, register }: { values: string[]; register: UseFormRegisterReturn }) {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {values.map((value) => (
        <label key={value} className="rounded-full border border-navy/15 px-4 py-2.5">
          <input type="radio" value={value} {...register} className="mr-2 accent-purple" />
          {value}
        </label>
      ))}
    </div>
  );
}

function Consent({
  label,
  register,
  error,
}: {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <label className="mb-4 block">
      <span className="flex gap-3">
        <input type="checkbox" {...register} className="mt-1 accent-purple" aria-required="true" />
        <span className="text-sm leading-6 text-text-secondary">
          {label} <span className="font-semibold">(required)</span>
        </span>
      </span>
      <Error message={error} />
    </label>
  );
}
