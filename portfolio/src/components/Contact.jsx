import { SectionHeader, TraceDivider } from "./Shared";
import useTilt from "../useTilt";

const iconPaths = {
  mail: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22c-1.61 0-3.194-.398-4.593-1.152l-5.1 1.336 1.361-4.977C2.885 15.658 2.35 13.9 2.35 12.05 2.35 6.472 6.868 1.954 12.446 1.954c2.72 0 5.278 1.06 7.2 2.98a10.1 10.1 0 0 1 2.98 7.2c0 5.578-4.518 10.096-10.096 10.096l.02-.23z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  youtube:
    "M23.498 6.186a2.997 2.997 0 0 0-2.113-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.385.566A2.997 2.997 0 0 0 .502 6.186 31.24 31.24 0 0 0 0 12a31.24 31.24 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.113 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.385-.566a2.997 2.997 0 0 0 2.113-2.12A31.24 31.24 0 0 0 24 12a31.24 31.24 0 0 0-.502-5.814zM9.75 15.021V8.979L15.818 12 9.75 15.021z",
  facebook:
    "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.62h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z",
};

function Icon({ name, className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  );
}

const primaryLinks = [
  { href: "mailto:m.hamjath11@gmail.com", label: "Email", icon: "mail" },
  { href: "https://wa.me/94721578097", label: "WhatsApp", icon: "whatsapp" },
  { href: "https://github.com/ihamjth11", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/hamjath11", label: "LinkedIn", icon: "linkedin" },
];

const socialLinks = [
  { href: "https://www.instagram.com/ihamjath", label: "Instagram", icon: "instagram" },
  { href: "https://youtube.com/@hamjatharc", label: "YouTube", icon: "youtube" },
];

const timebankLinks = [
  { href: "https://www.linkedin.com/company/timebankapp", label: "LinkedIn", icon: "linkedin" },
  { href: "https://www.instagram.com/timebankapp", label: "Instagram", icon: "instagram" },
  { href: "https://www.facebook.com/share/19aPzVj9KC", label: "Facebook", icon: "facebook" },
];

function PrimaryLink({ l }) {
  const tilt = useTilt(6, true);
  return (<a
    
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      href={l.href}
      target={l.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="relative flex items-center gap-2.5 px-7 py-3.5 border border-copper rounded-full font-plex text-[13.5px] overflow-hidden transition-colors duration-300 hover:bg-signal hover:text-bgDeep hover:border-signal"
    >
      <div className="absolute inset-0 pointer-events-none z-20" style={tilt.glareStyle} />
      <Icon name={l.icon} />
      {l.label}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-[150px] text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="U9 // CONTACT"
            title="Let's connect the circuit"
            sub="Open to Software Engineering internships, freelance projects, and full-stack development roles."
          />
        </div>

        {/* Available status */}
        <div className="reveal flex items-center justify-center gap-2 mb-10 font-plex text-[12px] text-inkDim">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
          </span>
          Currently available for new opportunities
        </div>

        {/* Primary — direct ways to reach me */}
        <div className="reveal flex flex-wrap gap-4.5 justify-center">
          {primaryLinks.map((l) => {
            return <PrimaryLink key={l.label} l={l} />;
          })}
        </div>

        {/* Personal socials */}
        <div className="reveal flex flex-wrap gap-3.5 justify-center mt-6">
          {socialLinks.map((l) => {
            return (<a
              
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-copperDim rounded-full font-plex text-[12px] text-inkDim transition-all hover:border-signal hover:text-signal"
              >
                <Icon name={l.icon} className="w-4 h-4" />
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="reveal max-w-[400px] mx-auto">
          <TraceDivider dots={[200]} />
        </div>

        {/* TimeBank socials */}
        <div className="reveal max-w-[560px] mx-auto border border-copper/15 rounded-2xl px-8 py-8 bg-panel/15 backdrop-blur-sm">
          <div className="font-plex text-[11px] tracking-[.14em] text-gold mb-1.5">FOLLOW TIMEBANK</div>
          <p className="text-inkDim text-[13px] mb-5">My flagship product — Sri Lanka's first time-exchange platform</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {timebankLinks.map((l) => {
              return (<a
                
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4.5 py-2 border border-copperDim rounded-full font-plex text-[11.5px] text-inkDim transition-all hover:border-signal hover:text-signal"
                >
                  <Icon name={l.icon} className="w-3.5 h-3.5" />
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-11 text-center font-plex text-[11.5px] text-inkDim border-t border-copper/15">
      <div className="flex justify-center gap-5 mb-4">
        <a href="https://github.com/ihamjth11" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
          <Icon name="github" className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/hamjath11" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
          <Icon name="linkedin" className="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/ihamjath" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
          <Icon name="instagram" className="w-4 h-4" />
        </a>
        <a href="https://youtube.com/@hamjatharc" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
          <Icon name="youtube" className="w-4 h-4" />
        </a>
      </div>
      © 2026 MOHOMAD HAMJATH
    </footer>
  );
}