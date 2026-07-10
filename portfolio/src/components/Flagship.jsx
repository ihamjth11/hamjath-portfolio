import { flagshipProjects } from "../data";
import { SectionHeader } from "./Shared";

function Mockup({ code, iconGradient, bars }) {
  return (
    <div className="w-full max-w-[380px] rounded-[10px] overflow-hidden border border-copper/30 bg-[#0c231a] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]">
      <div className="h-[30px] flex items-center gap-1.5 px-3 bg-[#0a1e16] border-b border-copper/20">
        <span className="w-2 h-2 rounded-full" style={{ background: "#E0654F" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#E8C179" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#5FE0CB" }} />
      </div>
      <div className="p-6">
        <div
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center font-mono font-extrabold text-lg text-bgDeep mb-4"
          style={{ background: iconGradient }}
        >
          {code}
        </div>
        <div className="flex flex-col gap-2">
          {bars.map((w, i) => (
            <div key={i} className="h-2 rounded bg-ink/10" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Flagship() {
  return (
    <section id="flagship" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader
          eyebrow="U2 // FLAGSHIP WORK"
          title="The main boards"
          sub="Three products I've designed, wired, and shipped end to end — each one solving a real problem for real people."
        />

        <div className="flex flex-col gap-7">
          {flagshipProjects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal grid grid-cols-1 md:grid-cols-2 border border-copper/20 rounded-2xl overflow-hidden bg-gradient-to-br from-panel/55 to-bgDeep/70 transition-all duration-300 hover:border-signal hover:shadow-[0_30px_70px_-30px_rgba(95,224,203,0.28)] hover:-translate-y-1 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[280px] p-8 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(95,224,203,0.14),transparent_60%)]">
                <Mockup code={p.code} iconGradient={p.iconGradient} bars={p.bars} />
              </div>
              <div className="p-9 md:p-11 flex flex-col justify-center">
                <div className={`inline-flex items-center gap-2 font-plex text-[11px] tracking-widest uppercase mb-3.5 ${p.statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                  {p.status}
                </div>
                <h3 className="font-mono text-[22px] sm:text-[28px] mb-3.5">{p.title}</h3>
                <p className="text-inkDim text-[15px] mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="font-plex text-[10.5px] px-2.5 py-1 border border-copperDim rounded-md text-inkDim">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start font-plex text-[13px] text-bgDeep bg-signal px-5.5 py-2.5 rounded-full font-medium transition-all hover:bg-gold hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(232,193,121,0.5)]"
                  >
                    {p.linkLabel} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
