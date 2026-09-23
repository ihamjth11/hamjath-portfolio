import { experience, education } from "../data";
import { SectionHeader } from "./Shared";

function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5"
        style={{
          background:
            "repeating-linear-gradient(180deg, #D08A50 0 8px, transparent 8px 14px)",
        }}
      />
      {items.map((item, i) => {
        return (
          <div
            key={item.title}
            className={`group relative pl-1 -ml-1 rounded-lg transition-all duration-300 hover:pl-3 hover:bg-signal/[0.04] ${
              i !== items.length - 1 ? "mb-8" : ""
            }`}
          >
            <span className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-signal transition-shadow duration-300 group-hover:shadow-[0_0_12px_#5FE0CB]" />
            <div className="font-plex text-xs text-copper tracking-wide mb-1">{item.date}</div>
            <div className="font-mono text-[16.5px] mb-1">{item.title}</div>
            <div className="text-sm text-inkDim">{item.sub}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader eyebrow="U7 // SERVICE HISTORY" title="Experience & Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16">
          <div className="reveal">
            <div className="font-plex text-xs tracking-widest uppercase text-signal mb-6">Experience</div>
            <Timeline items={experience} />
          </div>
          <div className="reveal">
            <div className="font-plex text-xs tracking-widest uppercase text-signal mb-6">Education</div>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}