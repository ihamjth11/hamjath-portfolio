import { skillBanks } from "../data";
import { SectionHeader } from "./Shared";
import useTilt from "../useTilt";

// Minimal inline SVG icons — one per skill category, no emojis.
const bankIcons = {
  Frontend: "M4 5h16v11H4zm0 14h16M9 9l-2 2 2 2m6-4l2 2-2 2",
  "Backend & Data": "M4 4h16v6H4zm0 10h16v6H4zm4-7h.01M8 17h.01",
  "Currently Growing": "M13 2 3 14h8l-1 8 10-12h-8z",
  "Hardware & Tools": "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z",
  "Engineering Practices": "M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.8 7.1 17.2l.9-5.5-4-3.9 5.5-.8z",
};

function BankIcon({ label }) {
  const d = bankIcons[label];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function SkillCard({ bank }) {
  const tilt = useTilt(6, true);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      className="reveal relative border border-copper/20 rounded-xl p-6 bg-panel/30 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:border-signal hover:shadow-[0_24px_50px_-24px_rgba(95,224,203,0.3)]"
    >
      <div className="absolute inset-0 pointer-events-none z-20" style={tilt.glareStyle} />
      <div className="relative flex items-center gap-2.5 font-plex text-xs tracking-widest uppercase text-signal mb-4">
        <BankIcon label={bank.label} />
        {bank.label}
      </div>
      <ul className="relative">
        {bank.items.map((item, i) => {
          return (
            <li
              key={item}
              className={`py-2 text-[15px] text-inkDim flex items-center gap-2.5 ${
                i !== bank.items.length - 1 ? "border-b border-dashed border-inkDim/15" : ""
              }`}
            >
              <span className="w-1.5 h-1.5 bg-copper rounded-sm flex-shrink-0" />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader
          eyebrow="U4 // SKILLS"
          title="Component Bank"
          sub="The parts I reach for most — grouped the way I'd organize a parts drawer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillBanks.map((bank) => {
            return <SkillCard key={bank.label} bank={bank} />;
          })}
        </div>
      </div>
    </section>
  );
}