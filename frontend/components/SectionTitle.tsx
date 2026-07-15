export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={alignClass}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-10 bg-[#F59E0B]" />
          <span className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="mt-3 font-[var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F172A]/70 max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
