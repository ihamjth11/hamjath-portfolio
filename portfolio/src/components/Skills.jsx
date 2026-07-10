import { skillBanks } from "../data";
import { SectionHeader } from "./Shared";

export default function Skills() {
  return (
    <section id="skills" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader
          eyebrow="U4 // SKILLS"
          title="Component Bank"
          sub="The parts I reach for most — grouped the way I'd organize a parts drawer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillBanks.map((bank) => (
            <div
              key={bank.label}
              className="reveal border border-copper/20 rounded-xl p-6 bg-panel/30 transition-all duration-300 hover:border-signal hover:-translate-y-1"
            >
              <div className="font-plex text-xs tracking-widest uppercase text-signal mb-4">{bank.label}</div>
              <ul>
                {bank.items.map((item, i) => (
                  <li
                    key={item}
                    className={`py-2 text-[15px] text-inkDim flex items-center gap-2.5 ${
                      i !== bank.items.length - 1 ? "border-b border-dashed border-inkDim/15" : ""
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-copper rounded-sm flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
