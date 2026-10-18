import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Liger Tours Namibia collects, uses and protects your personal information when you enquire about or book a tour.",
};

const sections = [
  {
    h: "Who we are",
    p: [
      `${company.legalName} is a locally owned tour operator based in ${company.address}, registered with the Namibia Tourism Board. You can reach us at ${company.email} or ${company.phone} for anything related to this policy.`,
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you send an enquiry through this website we collect the details you choose to give us: your name, email address, phone number, travel dates, group size and the content of your message. We use these only to respond to your enquiry and to plan the trip you asked about.",
      "Like most websites, our hosting platform keeps standard technical logs such as IP address, browser type and pages visited, for security and performance monitoring.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your enquiry details to reply to you, prepare quotations and, if you go ahead, manage your booking. We do not sell your information, and we do not share it with third parties except the service providers directly involved in delivering your trip (such as lodges and activity partners) once you have booked, or where Namibian law requires it.",
      "Enquiry details are kept only as long as needed to handle your enquiry and any resulting booking, after which they are deleted.",
    ],
  },
  {
    h: "Third party services",
    p: [
      "This website is hosted on Vercel behind Cloudflare services. Your enquiry form submission is stored in our secured booking database. WhatsApp links open WhatsApp, operated by its own privacy policy. We do not run advertising trackers on this site.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "You may ask us at any time to confirm what personal details we hold about you, correct them, or delete them. Email us and we will act on the request within a reasonable period. If you have a complaint about how your information is handled, please contact us first so we can put it right.",
    ],
  },
  {
    h: "Cookies",
    p: [
      "This website uses only cookies or local storage that are strictly necessary for the site to function and for anonymised traffic statistics. There are no advertising or cross-site tracking cookies. You can block cookies in your browser and the site will still work.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "If we change this policy we will publish the new version on this page with an updated date. The version on this page is the one that applies.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section" aria-label="Privacy policy">
        <div className="container-narrow">
          <p className="t-eyebrow text-rose-600">Legal</p>
          <h1 className="t-h1 mt-3">Privacy policy</h1>
          <p className="t-small mt-4 text-ink-muted">Last updated: January 2026</p>
          <div className="mt-12 grid gap-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="t-h3">{s.h}</h2>
                <div className="mt-4 grid gap-4">
                  {s.p.map((p) => (
                    <p key={p.slice(0, 24)} className="t-body text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
