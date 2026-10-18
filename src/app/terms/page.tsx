import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Booking terms for Liger Tours Namibia tours: quotations, payments in N$, cancellations, insurance and liability.",
};

const sections = [
  {
    h: "These terms",
    p: [
      `These terms apply when you enquire about or book a tour with ${company.legalName} ("we", "us"), a tour operator based in ${company.address} and registered with the Namibia Tourism Board. By confirming a booking you accept these terms.`,
    ],
  },
  {
    h: "Enquiries and quotations",
    p: [
      "Every tour on this website is quoted individually in Namibian dollars (N$) because prices depend on your group size, travel season and accommodation choices. A quotation is valid for 14 days from the date it is sent, unless it states otherwise. A booking is only confirmed once we have received your signed confirmation and the deposit described in the quotation.",
    ],
  },
  {
    h: "Payments",
    p: [
      "A deposit is required to secure your dates, with the balance due before departure as set out in your quotation. All payments are quoted and collected in Namibian dollars (N$) unless agreed otherwise in writing. Banking details appear only on official quotations and invoices; treat any request to pay into a different account as suspicious and call us on " + company.phone + ".",
    ],
  },
  {
    h: "Changes and cancellations by you",
    p: [
      "If you need to change dates or cancel, write to us as early as possible. We will always try to move your dates at no cost where lodges allow it. Cancellation charges follow the schedule in your quotation and reflect the strict cancellation terms of the lodges and parks in Namibia, which is why travel insurance is required for every guest.",
    ],
  },
  {
    h: "Changes by us",
    p: [
      "Namibia is a wild country: roads wash out, rivers flood and animals move. We may adjust an itinerary for weather, road conditions, park decisions or safety. Any change of equal or better value is made at no cost. If a significant component cannot be delivered, we will offer a fair alternative or a refund of that component.",
    ],
  },
  {
    h: "Insurance, health and documents",
    p: [
      "Comprehensive travel insurance covering medical costs, evacuation and cancellation is required on all tours and must be arranged before departure. You are responsible for a valid passport, any required visas and recommended vaccinations. Malaria precautions apply in northern Namibia; take advice from a travel clinic before you travel.",
    ],
  },
  {
    h: "Liability",
    p: [
      "We take every reasonable care in planning and running our tours and use registered providers throughout. You take part in game drives, walks and activities at your own risk and must follow your guide's instructions at all times. Our liability is limited to the extent permitted by Namibian law and is always subject to the insurance requirement above.",
    ],
  },
  {
    h: "Complaints and governing law",
    p: [
      "If something is not right, tell your guide immediately so it can be fixed on the spot, and tell us in writing afterwards. These terms are governed by the laws of the Republic of Namibia, and the courts of Namibia have jurisdiction over any dispute.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="section" aria-label="Terms of service">
        <div className="container-narrow">
          <p className="t-eyebrow text-rose-600">Legal</p>
          <h1 className="t-h1 mt-3">Terms of service</h1>
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
