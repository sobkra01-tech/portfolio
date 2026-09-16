import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Portrait placeholder — add public/images/portrait.jpg"
      className={cn(
        "flex h-[320px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface-tint text-muted-soft sm:h-[460px]",
        className
      )}
    >
      <User size={48} strokeWidth={1.4} />
      <span className="text-[13px] font-medium">Portrait — public/images/portrait.jpg</span>
    </div>
  );
}
