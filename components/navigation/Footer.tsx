import { Linkedin, Github, Facebook, Send } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { links } from "@/data/links";
import { profile } from "@/data/profile";
import ContactForm from "@/components/forms/ContactForm";

const linkIcons = { linkedin: Linkedin, github: Github, facebook: Facebook, mail: Send };

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-anthracite text-white">
      <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(48px,5.6vw,92px)] pb-[clamp(28px,3vw,44px)]">
        <div id="contact" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-[clamp(30px,4vw,64px)]">
          <div>
            <h2 className="max-w-[20ch] text-pretty font-display text-[clamp(26px,3vw,44px)] font-bold leading-[1.12] tracking-[-0.04em]">
              {dict.contact.title}
            </h2>
            <p className="mt-[18px] max-w-[38ch] text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-white/65">
              {dict.contact.body}
            </p>
            <a
              href="#contact-form"
              className="mt-[26px] inline-flex h-[clamp(46px,3.8vw,54px)] items-center gap-[9px] rounded-md bg-signature px-6 text-[13px] font-bold tracking-[1.2px] text-white transition-colors hover:bg-signature-dark"
            >
              <Send size={14} strokeWidth={1.8} />
              {dict.contact.cta}
            </a>
          </div>
          <div id="contact-form">
            <ContactForm dict={dict} />
          </div>
        </div>

        <div className="mt-[clamp(36px,4.4vw,64px)] flex flex-wrap gap-[clamp(20px,4vw,64px)] border-t border-white/10 pt-[26px]">
          {links.map((link) => {
            const Icon = linkIcons[link.icon];
            return (
              <a key={link.name} href={link.href} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signature">
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold">{link.name}</span>
                  <span className="mt-[2px] block text-[13px] text-white/50">
                    {link.handle[lang]}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-[26px] flex flex-wrap justify-between gap-[14px] border-t border-white/8 pt-5 text-[13px] text-white/45">
          <div>© {new Date().getFullYear()} {profile.name}. {dict.footer.rights}</div>
          <div className="flex gap-[18px]">
            <span>{dict.footer.builtWith}</span>
            <span>{dict.footer.deployedOn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
