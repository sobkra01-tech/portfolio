import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  body,
  align = "left",
  dark = false,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <div className="text-[13px] font-semibold tracking-[1.6px] text-signature">{kicker}</div>
      <h2
        className={cn(
          "font-display font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.04em] mt-3",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "text-[15px] sm:text-[18px] leading-[1.65] mt-4 max-w-[46ch]",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-muted"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
