"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  professionalReferralSchema,
  type ProfessionalReferralSubmission,
} from "@/lib/formSchemas";
import { SERVICES } from "@/lib/constants";

type FormData = ProfessionalReferralSubmission;
const inputClass = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/15";

export function ProfessionalReferralForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(professionalReferralSchema),
    mode: "onBlur",
    defaultValues: { services: [], clientEmail: "", background: "", website: "", startedAt, emergencyConfirmation: false },
  });
  const safeguarding = watch("safeguarding");
  const urgency = watch("urgency");

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
        <h3 className="mt-5 font-heading text-3xl font-extrabold text-navy">Referral Received</h3>
        <p className="mt-3 font-bold text-purple">Reference: {reference}</p>
        <p className="mt-4 text-text-secondary">The referral has been received. We aim to review professional referrals promptly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {formError ? <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">{formError}</div> : null}
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <FormSection title="Your Details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your Full Name" error={errors.professionalName?.message}><input {...register("professionalName")} autoComplete="name" className={inputClass} /></Field>
          <Field label="Your Role/Job Title" error={errors.role?.message}><input {...register("role")} className={inputClass} /></Field>
          <Field label="Organisation Name" error={errors.organisation?.message}><input {...register("organisation")} className={inputClass} /></Field>
          <Field label="Organisation Type" error={errors.organisationType?.message}>
            <select {...register("organisationType")} className={inputClass}><option value="">Select</option>{["GP Practice","NHS Trust","Social Services","Housing","School","Probation","Voluntary Sector","Other"].map((x)=><option key={x}>{x}</option>)}</select>
          </Field>
          <Field label="Professional Email" error={errors.professionalEmail?.message}><input type="email" {...register("professionalEmail")} autoComplete="email" className={inputClass} /></Field>
          <Field label="Direct Phone Number" error={errors.professionalPhone?.message}><input type="tel" {...register("professionalPhone")} autoComplete="tel" className={inputClass} /></Field>
        </div>
      </FormSection>
      <FormSection title="Client Details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Client First Name" error={errors.clientFirstName?.message}><input {...register("clientFirstName")} autoComplete="given-name" className={inputClass} /></Field>
          <Field label="Client Last Name" error={errors.clientLastName?.message}><input {...register("clientLastName")} autoComplete="family-name" className={inputClass} /></Field>
          <Field label="Client Date of Birth" error={errors.clientDob?.message}><input type="date" {...register("clientDob")} autoComplete="bday" className={inputClass} /></Field>
          <Field label="Client Gender" required={false}><select {...register("clientGender")} className={inputClass}><option value="">Select</option>{["Male","Female","Non-binary","Prefer not to say"].map((x)=><option key={x}>{x}</option>)}</select></Field>
          <Field label="Client Phone" required={false}><input type="tel" {...register("clientPhone")} autoComplete="tel" className={inputClass} /></Field>
          <Field label="Client Email" required={false} error={errors.clientEmail?.message}><input type="email" {...register("clientEmail")} autoComplete="email" className={inputClass} /></Field>
          <Field label="Client Postcode" error={errors.clientPostcode?.message}><input {...register("clientPostcode")} autoComplete="postal-code" className={inputClass} /></Field>
        </div>
      </FormSection>
      <FormSection title="Referral Details">
        <fieldset><legend className="font-bold text-navy">Services Required *</legend><div className="mt-3 grid gap-3 sm:grid-cols-2">{SERVICES.map((service)=><label key={service.slug} className="flex gap-3 rounded-xl bg-cream p-3"><input type="checkbox" value={service.slug} {...register("services")} className="accent-purple" /><span className="text-sm font-semibold">{service.title}</span></label>)}</div><Error message={errors.services?.message} /></fieldset>
        <fieldset className="mt-6"><legend className="font-bold text-navy">Urgency Level *</legend><div className="mt-3 flex flex-wrap gap-3">{["Routine","Priority","Urgent","Emergency"].map((x)=><label key={x} className="rounded-full border border-navy/15 px-4 py-2.5"><input type="radio" value={x} {...register("urgency")} className="mr-2 accent-purple" />{x}</label>)}</div><Error message={errors.urgency?.message} /></fieldset>
        {urgency === "Emergency" ? <div className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-900"><p className="font-extrabold">Emergency referrals cannot be handled through this form.</p><p>If there is immediate risk, call 999 or use the responsible statutory emergency pathway.</p><Consent label="I understand this form is not an emergency pathway and have followed emergency guidance where needed *" register={register("emergencyConfirmation")} error={errors.emergencyConfirmation?.message} /></div> : null}
        <Field label="Reason for Referral" error={errors.reason?.message} className="mt-6"><textarea rows={6} maxLength={2000} {...register("reason")} className={inputClass} /></Field>
        <Field label="Relevant Background Information" required={false} className="mt-6"><textarea rows={4} maxLength={2000} {...register("background")} className={inputClass} /></Field>
        <fieldset className="mt-6"><legend className="font-bold text-navy">Has the client consented to this referral? *</legend><RadioRow values={["Yes","No","Client lacks capacity"]} register={register("clientConsent")} /><Error message={errors.clientConsent?.message} /></fieldset>
        <fieldset className="mt-6"><legend className="font-bold text-navy">Any safeguarding concerns? *</legend><RadioRow values={["Yes","No"]} register={register("safeguarding")} /><Error message={errors.safeguarding?.message} /></fieldset>
        {safeguarding === "Yes" && <Field label="Safeguarding Concern Details" error={errors.safeguardingDetails?.message} className="mt-6"><textarea rows={4} {...register("safeguardingDetails")} className={inputClass} /></Field>}
      </FormSection>
      <FormSection title="Professional Declarations">
        <Consent label="I confirm I am making this referral in a professional capacity and in good faith *" register={register("professionalDeclaration")} error={errors.professionalDeclaration?.message} />
        <Consent label="I confirm client consent or another lawful basis has been considered and that data will be handled under the privacy, safeguarding and data protection policies *" register={register("consentDeclaration")} error={errors.consentDeclaration?.message} />
      </FormSection>
      <button disabled={isSubmitting} className="interactive-button flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-extrabold text-white disabled:opacity-70">{isSubmitting && <LoaderCircle className="animate-spin" size={20} />}{isSubmitting ? "Submitting..." : "Submit Professional Referral"}</button>
    </form>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8"><h3 className="mb-6 font-heading text-2xl font-extrabold text-navy">{title}</h3>{children}</section>;
}
function Field({ label, children, error, required = true, className = "" }: { label: string; children: React.ReactNode; error?: string; required?: boolean; className?: string }) {
  return <label className={`block text-sm font-bold text-navy ${className}`}>{label}{required ? " *" : ""}{children}<Error message={error} /></label>;
}
function Error({ message }: { message?: string }) { return message ? <span className="mt-1.5 block text-sm font-semibold text-coral">{message}</span> : null; }
type RegisterResult = ReturnType<ReturnType<typeof useForm<FormData>>["register"]>;
function RadioRow({ values, register }: { values: string[]; register: RegisterResult }) {
  return <div className="mt-3 flex flex-wrap gap-3">{values.map((x)=><label key={x} className="rounded-full border border-navy/15 px-4 py-2.5"><input type="radio" value={x} {...register} className="mr-2 accent-purple" />{x}</label>)}</div>;
}
function Consent({ label, register, error }: { label: string; register: RegisterResult; error?: string }) {
  return <label className="mb-4 block"><span className="flex gap-3"><input type="checkbox" {...register} className="mt-1 accent-purple" /><span className="text-sm leading-6 text-text-secondary">{label}</span></span><Error message={error} /></label>;
}
