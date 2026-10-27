"use client";

/* Enquiry form: inline validation, honeypot spam trap, success state.
   Posts to /api/contact which stores the lead. All strings localized. */

import { useState, type FormEvent } from "react";
import { company, type Dict } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "message" | "general", string>>;

export default function ContactForm({
  source = "contact",
  dict,
}: {
  source?: string;
  dict: Dict;
}) {
  const f = dict.form;
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: silent success for bots
    if ((data.get("website") as string)?.trim()) {
      setSent(true);
      return;
    }

    const next: Errors = {};
    const name = ((data.get("name") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();
    const message = ((data.get("message") as string) || "").trim();
    if (name.length < 2) next.name = f.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = f.emailError;
    if (message.length < 10) next.message = f.messageError;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: ((data.get("phone") as string) || "").trim(),
          travelFrom: ((data.get("travelFrom") as string) || "").trim(),
          groupSize: ((data.get("groupSize") as string) || "").trim(),
          message,
          source,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setErrors({ general: f.generalError });
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        className="rounded-[var(--radius-md)] border border-rose-300 bg-surface p-8"
        role="status"
        aria-live="polite"
      >
        <h3 className="t-h3 text-brand">{f.successTitle}</h3>
        <p className="t-body mt-3 text-ink-muted">{f.successBody}</p>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary mt-6"
        >
          {f.whatsappCta}
        </a>
      </div>
    );
  }

  const labelClass = "t-eyebrow mb-2 block text-ink";
  const errorId = (field: string) => `${field}-error`;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {errors.general && (
        <p className="rounded-[var(--radius-md)] border border-[#A33B2E] bg-surface p-4 text-[15px] text-[#A33B2E]" role="alert">
          {errors.general}
        </p>
      )}

      {/* Honeypot: hidden from people, irresistible to bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true"> /* taste-skill-ignore: honeypot, not a divider */
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {f.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="field"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? errorId("name") : undefined}
          />
          {errors.name && (
            <p id={errorId("name")} className="field-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {f.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="field"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? errorId("email") : undefined}
          />
          {errors.email && (
            <p id={errorId("email")} className="field-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            {f.phone}
          </label>
          <input type="tel" id="phone" name="phone" className="field" autoComplete="tel" placeholder={f.phonePlaceholder} />
        </div>
        <div>
          <label htmlFor="groupSize" className={labelClass}>
            {f.groupSize}
          </label>
          <input type="text" id="groupSize" name="groupSize" className="field" placeholder={f.groupSizePlaceholder} />
        </div>
      </div>

      <div>
        <label htmlFor="travelFrom" className={labelClass}>
          {f.dates}
        </label>
        <input type="text" id="travelFrom" name="travelFrom" className="field" placeholder={f.datesPlaceholder} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errorId("message") : undefined}
          placeholder={f.messagePlaceholder}
        />
        {errors.message && (
          <p id={errorId("message")} className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary w-fit" disabled={sending}>
        {sending ? f.sending : f.submit}
      </button>
    </form>
  );
}
