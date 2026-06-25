import { VELTRO_DIGITAL_NAME, VELTRO_DIGITAL_URL } from "@/site-config";

type PoweredByVeltroProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function PoweredByVeltro({ variant = "dark", className = "" }: PoweredByVeltroProps) {
  const textClass =
    variant === "dark"
      ? "text-white/40"
      : "text-[color:var(--color-ink-soft)]/50";

  const linkClass =
    variant === "dark"
      ? "text-white/55 underline-offset-2 transition-colors hover:text-[color:var(--color-lime-soft)] hover:underline"
      : "text-[color:var(--color-ink-soft)]/65 underline-offset-2 transition-colors hover:text-[color:var(--color-lime)] hover:underline";

  return (
    <p className={`text-center text-[11px] tracking-wide ${textClass} ${className}`.trim()}>
      powered by{" "}
      <a
        href={VELTRO_DIGITAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {VELTRO_DIGITAL_NAME}
      </a>
    </p>
  );
}
