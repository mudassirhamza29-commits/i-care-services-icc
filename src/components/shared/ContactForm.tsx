import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SERVICES } from '../../lib/constants';
import { Button } from '../ui/Button';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .regex(/^(?:07\d{9}|0[1-9]\d{8,9})$/, 'Enter a valid UK phone number')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(20, 'Please write at least 20 characters')
    .max(1000, 'Message must be under 1000 characters'),
  consent: z
    .boolean()
    .refine((value) => value, 'You must agree to be contacted'),
  company: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false,
      company: '',
    },
  });
  const message = watch('message') ?? '';

  useEffect(() => {
    if (!submitted) return undefined;
    const timeout = window.setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
    return () => window.clearTimeout(timeout);
  }, [reset, submitted]);

  const onSubmit = async (values: ContactValues): Promise<void> => {
    if (values.company) return;
    await new Promise<void>((resolve) => window.setTimeout(resolve, 900));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-lg dark:bg-[#1a2d52]" role="status">
        <CheckCircle2 className="mx-auto h-16 w-16 text-gold" aria-hidden="true" />
        <h2 className="mt-5 text-3xl font-bold text-navy dark:text-white">Thank you</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Thank you — we&apos;ll be in touch within two working days.
        </p>
      </div>
    );
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold dark:border-white/20 dark:bg-navy-dark dark:text-white';

  return (
    <form
      className="rounded-3xl bg-white p-6 shadow-lg dark:bg-[#1a2d52] md:p-9"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" id="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName')}
          />
        </Field>
        <Field label="Email address" id="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
        </Field>
        <Field label="Phone number (optional)" id="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
        </Field>
        <Field label="Service" id="service" error={errors.service?.message}>
          <select
            id="service"
            className={inputClass}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
            {...register('service')}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-6">
        <Field label="How can we help?" id="message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={6}
            maxLength={1000}
            className={inputClass}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error message-count' : 'message-count'}
            {...register('message')}
          />
        </Field>
        <p id="message-count" className="mt-2 text-right text-xs text-gray-500">
          {message.length}/1000
        </p>
      </div>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>
      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 rounded border-gray-300 text-navy focus:ring-gold"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            {...register('consent')}
          />
          I agree that I-Care Services may contact me about this enquiry.
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>
      <Button type="submit" loading={isSubmitting} className="mt-7 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <label htmlFor={id} className="font-semibold text-navy dark:text-white">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
