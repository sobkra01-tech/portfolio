import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function TimelineItem({
  eyebrow,
  title,
  children,
  isLast = false,
  compact = false
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  isLast?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="flex gap-4 sm:gap-8">
      <div className="flex flex-none flex-col items-center pt-[6px]">
        <div className="h-[11px] w-[11px] rounded-full border-[2.5px] border-signature bg-white" />
        {!isLast && <div className="w-[1.5px] flex-1 bg-border" />}
      </div>
      <div className={cn("flex-1", compact ? "pb-4" : "pb-8 sm:pb-10")}>
        <div className="flex items-center gap-[7px] text-signature">
          <span className="text-[13px] font-semibold tracking-[1px]">{eyebrow}</span>
        </div>
        <h3 className="mt-2 font-display text-[18px] font-bold tracking-[-0.4px] sm:text-[22px]">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
