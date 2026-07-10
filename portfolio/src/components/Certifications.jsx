import { certifications } from "../data";
import { SectionHeader } from "./Shared";

export default function Certifications() {
  return (
    <section id="certs" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader eyebrow="U8 // CERTIFICATIONS" title="Verified Modules" />

        <div className="flex flex-col gap-4">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="reveal flex justify-between items-center px-5 py-4.5 border border-copper/20 rounded-xl bg-panel/25 transition-colors duration-300 hover:border-signal"
            >
              <div>
                <div className="text-[15px] font-medium">{c.name}</div>
                <div className="text-[12.5px] text-inkDim mt-0.5">{c.issuer}</div>
              </div>
              <div className="font-plex text-xs text-gold">{c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
