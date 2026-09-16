import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-[13px] font-bold tracking-[1.3px] uppercase transition-colors h-[52px] px-6";

const variants = {
  primary: "bg-signature text-white shadow-[0_12px_26px_rgba(33,88,255,.22)] hover:bg-signature-dark",
  secondary: "border-[1.5px] border-border bg-white text-ink hover:border-ink",
  dark: "border-[1.5px] border-white/25 text-white hover:bg-white/10"
};

interface CommonProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: ReactNode;
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  icon
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {icon}
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  icon,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {icon}
      {children}
    </button>
  );
}
