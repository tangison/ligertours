/* Inner page header: 50svh photo with dusk overlay, eyebrow, script H1 (page specs).
   Parallax capped at 12%, disabled for reduced motion. */

import Image from "next/image";
import Parallax from "./parallax";

export default function PageHeader({
  image,
  alt,
  eyebrow,
  title,
  priority = true,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  priority?: boolean;
}) {
  return (
    <header className="page-header">
      <Parallax className="z-[-20]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="container-liger pb-14 pt-40">
        <p className="t-eyebrow text-rose-200">{eyebrow}</p>
        <h1 className="t-h1 mt-3 max-w-4xl text-rose-50">{title}</h1>
      </div>
    </header>
  );
}
