import { User } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";

export default function PortraitPlaceholder({
  dict,
  className
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={dict.aboutPage.portraitPlaceholder}
      className={cn(
        "flex h-[320px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface-tint text-muted-soft sm:h-[460px]",
        className
      )}
    >
      <User size={48} strokeWidth={1.4} aria-hidden="true" />
      <span className="text-[13px] font-medium">{dict.aboutPage.portraitPlaceholder}</span>
    </div>
  );
}
