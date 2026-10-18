/* Dune divider: curved section transition, coloured as the NEXT section.
   Kit SVGs from 07-graphic-elements, used as supplied. */

const variants = {
  night: "#1F1613",
  "rose-50": "#FBF4F2",
  "rose-100": "#F6E8E4",
  "rose-200": "#F0DAD5",
  "rose-700": "#744642",
} as const;

export type DuneVariant = keyof typeof variants;

/* Same path and fills as the supplied dune-divider-*.svg files, inlined so the
   fill always matches the next section exactly (inline SVG is allowed by the kit). */
export default function Dune({ variant = "night" }: { variant?: DuneVariant }) {
  return (
    <div className="dune" aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-full w-full">
        <path
          d="M0,96 C240,40 420,40 640,88 C860,136 1040,150 1240,88 C1340,58 1400,52 1440,60 L1440,160 L0,160 Z"
          fill={variants[variant]}
        />
      </svg>
    </div>
  );
}
