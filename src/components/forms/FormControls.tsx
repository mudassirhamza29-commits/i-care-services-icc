"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type ReactNode,
} from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface FormControlProps {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  help?: string;
  className?: string;
  children: ReactNode;
}

export function Field({
  label,
  required = true,
  error,
  help,
  className = "",
  children,
}: FieldProps) {
  const generatedId = useId();
  const inputId = `${generatedId}-input`;
  const helpId = `${generatedId}-help`;
  const errorId = `${generatedId}-error`;
  const describedBy = [help ? helpId : null, error ? errorId : null]
    .filter(Boolean)
    .join(" ") || undefined;

  const controls = Children.map(children, (child) => {
    if (
      isValidElement<FormControlProps>(child) &&
      typeof child.type === "string" &&
      ["input", "select", "textarea"].includes(child.type)
    ) {
      return cloneElement(child, {
        id: child.props.id ?? inputId,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error),
      });
    }
    return child;
  });

  return (
    <div className={`block text-sm font-bold text-navy ${className}`}>
      <label htmlFor={inputId}>
        {label}{" "}
        {required ? <span className="font-normal">(required)</span> : null}
      </label>
      {help ? (
        <p
          id={helpId}
          className="mt-1 text-xs font-medium leading-5 text-text-secondary"
        >
          {help}
        </p>
      ) : null}
      {controls}
      <ErrorText id={errorId} message={error} />
    </div>
  );
}

export function Consent({
  label,
  register,
  error,
  className = "",
}: {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}) {
  const generatedId = useId();
  const inputId = `${generatedId}-input`;
  const errorId = `${generatedId}-error`;

  return (
    <div className={`block ${className}`}>
      <span className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          {...register}
          className="mt-1 h-4 w-4 accent-purple"
          aria-required="true"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <label
          htmlFor={inputId}
          className="text-sm leading-6 text-text-secondary"
        >
          {label} <span className="font-semibold">(required)</span>
        </label>
      </span>
      <ErrorText id={errorId} message={error} />
    </div>
  );
}

export function ErrorText({
  message,
  id,
}: {
  message?: string;
  id?: string;
}) {
  return message ? (
    <span
      id={id}
      className="mt-1.5 block text-sm font-semibold text-coral"
      role="alert"
    >
      {message}
    </span>
  ) : null;
}
