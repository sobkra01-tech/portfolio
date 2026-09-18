import type { Metadata } from "next";
import { Linkedin, Github, Facebook } from "lucide-react";
import { resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { links } from "@/data/links";
import ContactForm from "@/components/forms/ContactForm";

const linkIcons = { linkedin: Linkedin, github: Github, facebook: Facebook };

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/contact",
    title: dict.nav.contact,
    description: dict.contact.body
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-shell px-[clamp(18px,3.9vw,72px)] py-[clamp(36px,4.4vw,72px)] pb-[clamp(48px,5.6vw,88px)]">
      <h1 className="max-w-[20ch] text-pretty font-display text-[clamp(30px,3.6vw,52px)] font-extrabold tracking-[-0.045em]">
        {dict.contact.title}
      </h1>
      <p className="mt-4 max-w-[46ch] text-[clamp(14.5px,1.25vw,18px)] leading-[1.65] text-muted">
        {dict.contact.body}
      </p>

      <div className="mt-[clamp(28px,3.6vw,48px)] grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-2">
        <div className="rounded-[16px] bg-anthracite p-[clamp(22px,2.4vw,32px)]">
          <ContactForm dict={dict} />
        </div>

        <div>
          <h2 className="text-[13px] font-semibold tracking-[1.4px] text-muted-soft">
            {dict.contact.linksTitle.toUpperCase()}
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {links.map((link) => {
              const Icon = linkIcons[link.icon as keyof typeof linkIcons];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 rounded-[14px] border border-border p-4 transition-colors hover:border-signature-light"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#eef2ff] text-signature">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold">{link.name}</span>
                    <span className="mt-[2px] block text-[13px] text-muted-soft">{link.handle[lang]}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
