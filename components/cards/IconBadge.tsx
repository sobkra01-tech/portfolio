import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function IconBadge({
  children,
  dark = false,
  size = 42,
  className
}: {
  children: ReactNode;
  dark?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[10px]",
        dark ? "border border-white/18 text-signature-light" : "bg-[#eef2ff] text-signature",
        className
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}
