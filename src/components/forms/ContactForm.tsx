"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { Consent, Field } from "@/components/forms/FormControls";
import { contactSchema, type ContactSubmission } from "@/lib/formSchemas";
import { SERVICES } from "@/lib/constants";

type ContactData = ContactSubmission;

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/15";

const subjects = [
  "General enquiry",
  "Support request",
  "Professional referral",
  "Partnership",
  "Complaint",
  "Other",
];

export function ContactForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      website: "",
      startedAt,
      contactMethod: "Phone",
      isEmergency: "No",
    },
  });
  const message = watch("message") ?? "";
  const isEmergency = watch("isEmergency");
  const contactMethod = watch("contactMethod");

  const onSubmit = async (data: ContactData) => {
    setFormError(null);
    const response = await fetch("/api/contact", {
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
        payload?.error ?? "We could not send your message. Please try again.",
      );
      return;
    }

    setReference(payload.reference);
  };

  if (reference) {
    return (
      <div
        className="flex min-h-[570px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2 size={64} className="text-purple" />
        <h3 className="mt-6 font-heading text-3xl font-extrabold text-navy">
          Thank you
        </h3>
        <p className="mt-4 leading-8 text-text-secondary">
          Your message has been received. We will use your preferred contact
          method to follow up. This service is not monitored 24/7, so urgent
          issues should use the emergency and crisis routes.
        </p>
        <p className="mt-4 rounded-full bg-cream-dark px-4 py-2 text-sm font-extrabold text-purple">
          Reference: {reference}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-heading text-2xl font-extrabold text-navy">
        Send Us a Message
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        Please share only the minimum information needed for us to contact you.
        Sensitive details can be discussed later through a staffed conversation.
      </p>
      <CrisisNotice compact className="mt-5" />
      {formError ? (
        <div
          className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800"
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
      <div className="mt-6 space-y-5">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" className={inputClass} aria-required="true" />
        </Field>
        <Field label="Preferred contact method" error={errors.contactMethod?.message}>
          <select {...register("contactMethod")} className={inputClass} aria-required="true">
            <option>Phone</option>
            <option>Email</option>
          </select>
        </Field>
        <Field label="Contact detail" help="Enter the phone number or email address we should use." error={errors.contactDetail?.message}>
          <input
            {...register("contactDetail")}
            autoComplete={contactMethod === "Email" ? "email" : "tel"}
            inputMode={contactMethod === "Email" ? "email" : "tel"}
            className={inputClass}
            aria-required="true"
          />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <select {...register("subject")} className={inputClass} aria-required="true">
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
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
        {isEmergency === "Yes" ? <CrisisNotice className="border-red-300 bg-red-50" /> : null}
        <Field label="How can we help?" help="Please keep this brief. Do not include detailed health, sexual-health, financial or legal information in this public form." error={errors.message?.message}>
          <textarea
            rows={5}
            maxLength={700}
            {...register("message")}
            className={inputClass}
            aria-required="true"
          />
          <span className="mt-1.5 block text-right text-xs font-normal text-text-secondary">
            {message.length}/700
          </span>
        </Field>
        <Consent
          label="I explicitly consent to I-Care Services CIC using this information, including any service-area information that may reveal health or wellbeing needs, to respond to my enquiry. I understand this form is not monitored 24/7 and information is handled as explained in the Privacy Policy."
          register={register("consent")}
          error={errors.consent?.message}
        />
      </div>
      <button
        disabled={isSubmitting || isEmergency === "Yes"}
        className="interactive-button mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-extrabold text-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <LoaderCircle className="animate-spin" size={20} />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
