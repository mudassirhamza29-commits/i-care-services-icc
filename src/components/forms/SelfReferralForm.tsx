"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  selfReferralSchema,
  type SelfReferralSubmission,
} from "@/lib/formSchemas";
import { SERVICES } from "@/lib/constants";

type FormData = SelfReferralSubmission;

const ethnicities = [
  "English, Welsh, Scottish, Northern Irish or British",
  "Irish",
  "Gypsy or Irish Traveller",
  "Roma",
  "Other White background",
  "White and Black Caribbean",
  "White and Black African",
  "White and Asian",
  "Other Mixed or Multiple ethnic background",
  "Indian",
  "Pakistani",
  "Bangladeshi",
  "Chinese",
  "Other Asian background",
  "African",
  "Caribbean",
  "Other Black, African or Caribbean background",
  "Arab",
  "Other ethnic group",
  "Prefer not to say",
];

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
      email: "",
      services: [],
      supportMethods: [],
      phoneConsent: false,
      crisisConfirmation: false,
      website: "",
      startedAt,
    },
  });
  const details = watch("supportDetails") ?? "";
  const urgency = watch("urgency");

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
        payload?.error ?? "We could not submit your referral. Please try again.",
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
          Thank You!
        </h3>
        <p className="mt-4 leading-8 text-text-secondary">
          We&apos;ve received your referral. Your reference is{" "}
          <strong>{reference}</strong>. We aim to review requests promptly.
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
          Personal Details
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="First Name" required error={errors.firstName?.message}>
            <input {...register("firstName")} autoComplete="given-name" className={inputClass} />
          </Field>
          <Field label="Last Name" required error={errors.lastName?.message}>
            <input {...register("lastName")} autoComplete="family-name" className={inputClass} />
          </Field>
          <Field label="Date of Birth" required error={errors.dateOfBirth?.message}>
            <input type="date" {...register("dateOfBirth")} autoComplete="bday" className={inputClass} />
          </Field>
          <Field label="Gender">
            <select {...register("gender")} className={inputClass}>
              <option value="">Select an option</option>
              {["Male", "Female", "Non-binary", "Prefer not to say"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
          <Field label="Ethnicity">
            <select {...register("ethnicity")} className={inputClass}>
              <option value="">Select an option</option>
              {ethnicities.map((item) => <option key={item}>{item}</option>)}
            </select>
          </Field>
          <Field label="Phone Number" required error={errors.phone?.message}>
            <input type="tel" {...register("phone")} autoComplete="tel" className={inputClass} placeholder="020 8040 0433" />
          </Field>
          <Field label="Email Address" error={errors.email?.message}>
            <input type="email" {...register("email")} autoComplete="email" className={inputClass} />
          </Field>
          <Field label="Postcode" required error={errors.postcode?.message}>
            <input {...register("postcode")} autoComplete="postal-code" className={inputClass} placeholder="Postcode" />
          </Field>
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
        <h3 className="font-heading text-2xl font-extrabold text-navy">
          Support Needed
        </h3>
        <fieldset className="mt-6">
          <legend className="font-bold text-navy">Which service are you interested in? *</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Checkbox key={service.slug} label={service.title} value={service.slug} register={register("services")} />
            ))}
          </div>
          <ErrorText message={errors.services?.message} />
        </fieldset>
        {urgency === "Crisis" ? (
          <div className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-900">
            <p className="font-extrabold">This form is not for emergencies.</p>
            <p>
              If there is immediate danger, call 999. If you need urgent mental
              health support, contact NHS 111 or Samaritans on 116 123.
            </p>
            <Consent
              label="I understand this is not an emergency service and I have read the crisis guidance *"
              register={register("crisisConfirmation")}
              error={errors.crisisConfirmation?.message}
            />
          </div>
        ) : null}
        <fieldset className="mt-7">
          <legend className="font-bold text-navy">How would you prefer to receive support?</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {["In-Person", "Online", "Phone", "No Preference"].map((item) => (
              <Checkbox key={item} label={item} value={item} register={register("supportMethods")} />
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-7">
          <legend className="font-bold text-navy">How urgent is your situation?</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {["Not Urgent", "Fairly Urgent", "Very Urgent", "Crisis"].map((item) => (
              <label key={item} className="flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2.5">
                <input type="radio" value={item} {...register("urgency")} className="accent-purple" />
                <span className="text-sm font-semibold text-navy">{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <Field label="Tell us a little about what support you need" required error={errors.supportDetails?.message} className="mt-7">
          <textarea {...register("supportDetails")} rows={6} maxLength={1000} className={inputClass} />
          <p className="mt-2 text-right text-xs text-text-secondary">{details.length}/1000</p>
        </Field>
      </AnimatedSection>

      <AnimatedSection className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
        <h3 className="font-heading text-2xl font-extrabold text-navy">Consent</h3>
        <div className="mt-5 space-y-4">
          <Consent label="I confirm the information provided is accurate *" register={register("accurate")} error={errors.accurate?.message} />
          <Consent label="I consent to I-Care Services using this information to assess my request. I understand it may include sensitive information and will be handled under the privacy, safeguarding and data protection policies. *" register={register("dataConsent")} error={errors.dataConsent?.message} />
          <Consent label="I am happy to be contacted by phone" register={register("phoneConsent")} />
        </div>
      </AnimatedSection>

      <button disabled={isSubmitting} className="interactive-button flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-extrabold text-navy disabled:cursor-wait disabled:opacity-70">
        {isSubmitting && <LoaderCircle className="animate-spin" size={20} />}
        {isSubmitting ? "Submitting..." : "Submit Referral"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

function Field({ label, required, error, className = "", children }: FieldProps) {
  return (
    <label className={`block text-sm font-bold text-navy ${className}`}>
      {label}{required ? " *" : ""}
      {children}
      <ErrorText message={error} />
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  return message ? <span className="mt-1.5 block text-sm font-semibold text-coral">{message}</span> : null;
}

type RegisterResult = ReturnType<ReturnType<typeof useForm<FormData>>["register"]>;

function Checkbox({ label, value, register }: { label: string; value: string; register: RegisterResult }) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-navy/10 bg-cream/50 p-3">
      <input type="checkbox" value={value} {...register} className="h-4 w-4 accent-purple" />
      <span className="text-sm font-semibold text-navy">{label}</span>
    </label>
  );
}

function Consent({ label, register, error }: { label: string; register: RegisterResult; error?: string }) {
  return (
    <label className="block">
      <span className="flex items-start gap-3">
        <input type="checkbox" {...register} className="mt-1 h-4 w-4 accent-purple" />
        <span className="text-sm leading-6 text-text-secondary">{label}</span>
      </span>
      <ErrorText message={error} />
    </label>
  );
}
