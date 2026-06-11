"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters")
    .max(1000, "Please keep your message to 1000 characters"),
  consent: z.literal(true, { error: "Consent is required to send your enquiry" }),
});

type ContactData = z.infer<typeof schema>;

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { phone: "" },
  });
  const message = watch("message") ?? "";

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 750));
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[570px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2 size={64} className="text-purple" />
        <h3 className="mt-6 font-heading text-3xl font-extrabold text-navy">
          Thank you!
        </h3>
        <p className="mt-4 leading-8 text-text-secondary">
          We&apos;ll be in touch within 24 hours.
        </p>
      </motion.div>
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
      <div className="mt-6 space-y-5">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input type="email" {...register("email")} className={inputClass} />
        </Field>
        <Field label="Phone Number" required={false}>
          <input type="tel" {...register("phone")} className={inputClass} />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <select {...register("subject")} className={inputClass}>
            <option value="">Select a subject</option>
            {[
              "General Enquiry",
              "Support Request",
              "Professional Referral",
              "Partnership",
              "Complaint",
              "Other",
            ].map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={6}
            maxLength={1000}
            {...register("message")}
            className={inputClass}
          />
          <span className="mt-1.5 block text-right text-xs font-normal text-text-secondary">
            {message.length}/1000
          </span>
        </Field>
        <label className="block">
          <span className="flex items-start gap-3">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 h-4 w-4 accent-purple"
            />
            <span className="text-sm leading-6 text-text-secondary">
              I consent to my data being stored for the purpose of this enquiry *
            </span>
          </span>
          <ErrorText message={errors.consent?.message} />
        </label>
      </div>
      <button
        disabled={isSubmitting}
        className="interactive-button mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-extrabold text-navy disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting && <LoaderCircle className="animate-spin" size={20} />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required = true,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-bold text-navy">
      {label}
      {required ? " *" : ""}
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
