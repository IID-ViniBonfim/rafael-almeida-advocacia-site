import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "surface";
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "surface" ? "bg-surface" : "bg-background"} border-t border-hairline/70 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <header className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
          </header>
        )}
        <div className={eyebrow || title ? "mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
