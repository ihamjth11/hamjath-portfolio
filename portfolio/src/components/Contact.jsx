import { SectionHeader } from "./Shared";

const links = [
  { href: "mailto:m.hamjath11@gmail.com", label: "✉ m.hamjath11@gmail.com" },
  { href: "https://www.linkedin.com/in/mohomad-hamjath-474a382a0", label: "in LinkedIn" },
  { href: "https://github.com/ihamjth11", label: "⌥ GitHub" },
];

export function Contact() {
  return (
    <section id="contact" className="py-[150px] text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex justify-center">
          <SectionHeader
            eyebrow="U9 // CONTACT"
            title="Let's connect the circuit"
            sub=" Open to Software Engineering internships, freelance projects, and full-stack development roles."
          />
        </div>

        <div className="flex flex-wrap gap-4.5 justify-center mt-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 border border-copper rounded-full font-plex text-[13.5px] transition-all hover:bg-signal hover:text-bgDeep hover:border-signal hover:-translate-y-0.5"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-11 text-center font-plex text-[11.5px] text-inkDim border-t border-copper/15">
      © 2026 MOHOMAD HAMJATH 
    </footer>
  );
}
