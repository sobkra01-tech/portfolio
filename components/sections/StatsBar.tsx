import { Settings, TrendingUp, Grid3x3, CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import IconBadge from "@/components/cards/IconBadge";

export default function StatsBar({ dict }: { dict: Dictionary }) {
  const stats = [
    { value: "3+", label: dict.stats.years, icon: Settings },
    { value: "15+", label: dict.stats.projects, icon: TrendingUp },
    { value: "10+", label: dict.stats.dashboards, icon: Grid3x3 },
    { value: "100%", label: dict.stats.commitment, icon: CheckCircle2 }
  ];

  return (
    <div className="border-y border-border-soft bg-white">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[clamp(16px,2vw,32px)] px-[clamp(18px,3.9vw,72px)] py-[clamp(20px,2.4vw,34px)]">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-[clamp(11px,1.1vw,18px)]">
            <IconBadge size={44}>
              <Icon size={20} strokeWidth={1.6} />
            </IconBadge>
            <div>
              <div className="font-display text-[clamp(22px,2.1vw,32px)] font-extrabold tracking-[-0.9px]">
                {value}
              </div>
              <div className="mt-[2px] text-[clamp(11.5px,1vw,14.5px)] text-muted-soft">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
