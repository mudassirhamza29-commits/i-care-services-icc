"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import {
  selfReferralSchema,
  type SelfReferralSubmission,
} from "@/lib/formSchemas";

type FormData = SelfReferralSubmission;

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/15";

export function SelfReferralForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(selfReferralSchema),
    mode: "onBlur",
    defaultValues: {
      website: "",
      startedAt,
      contactMethod: "Phone",
      isEmergency: "No",
    },
  });
  const details = watch("message") ?? "";
  const isEmergency = watch("isEmergency");

  const onSubmit = async (data: FormData) => {
    setFormError(null);
    const response = await fetch("/api/referrals/self", {
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
        payload?.error ?? "We could not submit your request. Please try again.",
      );
      return;
    }

    setReference(payload.reference);
  };

  if (reference) {
    return (
      <div
        className="mx-auto max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:p-12"
        role="status"
      >
        <CheckCircle2 className="mx-auto text-purple" size={64} />
        <h3 className="mt-6 font-heading text-3xl font-extrabold text-navy">
          Thank you
        </h3>
        <p className="mt-4 leading-8 text-text-secondary">
          We have received your first-contact request. Your reference is{" "}
          <strong>{reference}</strong>. We will use your preferred contact
          method to follow up. This service is not monitored 24/7, so urgent
          issues should use the emergency and crisis routes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {formError ? (
        <div
          className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800"
          role="alert"
        >
          {formError}
        </div>
      ) : null}
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <AnimatedSection className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
        <h3 className="font-heading text-2xl font-extrabold text-navy">
          First Contact Details
        </h3>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          This form collects only the minimum needed to contact you. Please do
          not include detailed health, sexual-health, financial or legal
          information here. Sensitive details can be gathered later through a
          secure, staffed conversation.
        </p>
        <CrisisNotice compact className="mt-5" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} autoComplete="name" className={inputClass} aria-required="true" />
          </Field>
          <Field label="Preferred name" required={false}>
            <input {...register("preferredName")} autoComplete="nickname" className={inputClass} />
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
          label="How can we help?"
          help="Keep this brief. We will ask for any sensitive details later if they are needed."
          error={errors.message?.message}
          className="mt-7"
        >
          <textarea
            {...register("message")}
            rows={5}
            maxLength={700}
            className={inputClass}
            aria-required="true"
          />
          <p className="mt-2 text-right text-xs text-text-secondary">
            {details.length}/700
          </p>
        </Field>
      </AnimatedSection>

      <AnimatedSection className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
        <h3 className="font-heading text-2xl font-extrabold text-navy">
          Consent and Privacy
        </h3>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Confidentiality applies within safeguarding limits. Retention periods
          are being finalised and will be published in the data protection
          policy.
        </p>
        <Consent
          label="I consent to I-Care Services CIC using this information to contact me about support. I understand this website is not an emergency service and is not monitored 24/7."
          register={register("consent")}
          error={errors.consent?.message}
        />
      </AnimatedSection>

      <button
        disabled={isSubmitting || isEmergency === "Yes"}
        className="interactive-button flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-extrabold text-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <LoaderCircle className="animate-spin" size={20} />}
        {isSubmitting ? "Submitting..." : "Request Contact"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  help?: string;
  className?: string;
  children: React.ReactNode;
}

function Field({
  label,
  required = true,
  error,
  help,
  className = "",
  children,
}: FieldProps) {
  return (
    <label className={`block text-sm font-bold text-navy ${className}`}>
      {label} {required ? <span className="font-normal">(required)</span> : null}
      {help ? <span className="mt-1 block text-xs font-medium leading-5 text-text-secondary">{help}</span> : null}
      {children}
      <ErrorText message={error} />
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  return message ? (
    <span className="mt-1.5 block text-sm font-semibold text-coral">
      {message}
    </span>
  ) : null;
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
    <label className="mt-5 block">
      <span className="flex items-start gap-3">
        <input type="checkbox" {...register} className="mt-1 h-4 w-4 accent-purple" aria-required="true" />
        <span className="text-sm leading-6 text-text-secondary">
          {label} <span className="font-semibold">(required)</span>
        </span>
      </span>
      <ErrorText message={error} />
    </label>
  );
}
