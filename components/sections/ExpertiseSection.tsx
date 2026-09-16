import { User, Database, BarChart3 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import IconBadge from "@/components/cards/IconBadge";
import Reveal from "@/components/ui/Reveal";

const icons = [User, Database, BarChart3];

export default function ExpertiseSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] pt-[clamp(48px,5.6vw,96px)]">
      <div className="grid gap-[clamp(30px,4vw,64px)] lg:grid-cols-2">
        <Reveal>
          <div className="text-[13px] font-semibold tracking-[1.6px] text-signature">
            {dict.about.kicker}
          </div>
          <h2 className="mt-[14px] font-display text-[clamp(28px,3.2vw,48px)] font-bold tracking-[-0.04em]">
            {dict.about.title}
          </h2>
          <p className="mt-4 max-w-[46ch] text-pretty text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">
            {dict.about.body}
          </p>
          <p className="mt-4 text-[clamp(14.5px,1.25vw,18px)] font-semibold">{dict.about.highlight}</p>
        </Reveal>

        <div className="grid gap-[clamp(12px,1.2vw,20px)] sm:grid-cols-3">
          {dict.about.capabilities.map((cap, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={cap.title} delay={i * 0.08}>
                <div className="h-full rounded-[14px] border border-border bg-white p-[clamp(16px,1.5vw,24px)] transition-shadow hover:border-[#c9d6ff] hover:shadow-[0_14px_30px_rgba(11,18,32,.06)]">
                  <IconBadge>
                    <Icon size={19} strokeWidth={1.7} />
                  </IconBadge>
                  <div className="mt-4 font-display text-[13px] font-bold tracking-[1px]">{cap.title}</div>
                  <ul className="mt-[14px] flex flex-col gap-[9px]">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] text-muted">
                        <span className="mt-2 h-[3px] w-[3px] flex-none rounded-full bg-signature" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
