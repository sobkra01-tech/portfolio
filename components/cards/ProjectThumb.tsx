import { Database, Brain, Layers, ScatterChart, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  database: Database,
  brain: Brain,
  layers: Layers,
  scatter: ScatterChart,
  bars: BarChart3
};

export default function ProjectThumb({
  bars,
  icon,
  kicker,
  className
}: {
  bars: string[];
  icon: keyof typeof icons;
  kicker?: string;
  className?: string;
}) {
  const Icon = icons[icon] ?? Database;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-end gap-[5px] overflow-hidden rounded-xl bg-gradient-to-br from-[#0b1a3a] via-[#081227] to-[#0d2247] p-4",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-[130px] w-[130px] rounded-full bg-[radial-gradient(circle,rgba(46,101,255,.5),rgba(46,101,255,0)_70%)]" />
      {kicker ? (
        <div className="absolute left-4 top-3 flex items-center gap-[6px] text-white/55">
          <Icon size={13} strokeWidth={1.7} />
          <span className="text-[10px] font-semibold tracking-[1.1px]">{kicker}</span>
        </div>
      ) : null}
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-[3px] bg-[rgba(122,160,255,.6)]" style={{ height: h }} />
      ))}
    </div>
  );
}
