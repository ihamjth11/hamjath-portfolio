const links = [
  { href: "#about", label: "About" },
  { href: "#flagship", label: "Flagship" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#iot", label: "IoT" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bgDeep/80 backdrop-blur-md border-b border-copper/15">
      <div className="max-w-[1180px] mx-auto px-8 h-[68px] flex items-center justify-between">
        <div className="font-mono font-bold text-[15px] tracking-wide">
          MH<span className="text-copper">//</span>HAMJATH
        </div>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-plex text-xs tracking-widest uppercase text-inkDim hover:text-signal transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
