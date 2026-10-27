"use client";

/* Root-level error boundary: renders its own <html>/<body>, so it survives
   even a crash inside the [locale] layout. Branded with the site tokens,
   English by default (locale chrome is unavailable at this level). */

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in Vercel logs for diagnosis; nothing exposed to the guest.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          display: "grid",
          placeItems: "center",
          background: "#1F1613",
          color: "#F0DAD5",
          fontFamily:
            "'Schibsted Grotesk', 'Helvetica Neue', Arial, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: "34rem" }}>
          <p
            style={{
              fontFamily: "'Kaushan Script', cursive",
              fontSize: "clamp(4rem, 12vw, 7rem)",
              lineHeight: 1,
              color: "#CDA9A4",
              margin: 0,
            }}
            aria-hidden="true"
          >
            500
          </p>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              lineHeight: 1.15,
              color: "#F6E8E4",
              margin: "1.5rem 0 0",
              fontWeight: 700,
            }}
          >
            Something broke down on our side.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.65, marginTop: "1rem" }}>
            Like any good safari vehicle, the page will be repaired shortly.
            Try again, and if it keeps happening, WhatsApp us and we will sort
            it out by hand.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: "52px",
                padding: "0 32px",
                borderRadius: 999,
                border: "2px solid transparent",
                background: "#F0DAD5",
                color: "#1F1613",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8125rem",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="https://wa.me/264814722552"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minHeight: "52px",
                padding: "0 32px",
                borderRadius: 999,
                border: "2px solid #F0DAD5",
                background: "transparent",
                color: "#F0DAD5",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.8125rem",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              WhatsApp us
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
