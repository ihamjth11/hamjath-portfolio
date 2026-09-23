import { flagshipProjects } from "../data";
import { SectionHeader } from "./Shared";
import useTilt from "../useTilt";

function Mockup({ screenshot, logo, code, iconGradient }) {
  return (
    <div className="w-full max-w-[380px] rounded-[10px] overflow-hidden border border-copper/30 bg-[#0c231a] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]">
      <div className="h-[30px] flex items-center gap-1.5 px-3 bg-[#0a1e16] border-b border-copper/20">
        <span className="w-2 h-2 rounded-full" style={{ background: "#E0654F" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#E8C179" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#5FE0CB" }} />
      </div>

      <div className="relative">
        {screenshot ? (
          <img src={screenshot} alt="" className="w-full h-[220px] object-cover object-top" />
        ) : (
          <div className="h-[220px] flex items-center justify-center">
            <div
              className="w-[64px] h-[64px] rounded-xl flex items-center justify-center font-mono font-extrabold text-2xl text-bgDeep"
              style={{ background: iconGradient }}
            >
              {code}
            </div>
          </div>
        )}

        {logo ? (
          <div className="absolute top-3 left-3 w-10 h-10 rounded-lg overflow-hidden border border-white/25 shadow-lg bg-bgDeep/60 backdrop-blur-sm">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center font-mono font-extrabold text-sm text-bgDeep shadow-lg"
            style={{ background: iconGradient }}
          >
            {code}
          </div>
        )}
      </div>
    </div>
  );
}

function FlagshipCard({ p, index }) {
  const tilt = useTilt(4, true);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      className={`reveal relative grid grid-cols-1 md:grid-cols-2 border border-copper/20 rounded-2xl overflow-hidden bg-gradient-to-br from-panel/55 to-bgDeep/70 transition-shadow duration-300 hover:border-signal hover:shadow-[0_30px_70px_-30px_rgba(95,224,203,0.28)] ${
        index % 2 === 1 ? "md:[&>div:nth-child(2)]:order-2" : ""
      }`}
    >
      <div className="absolute inset-0 pointer-events-none z-20" style={tilt.glareStyle} />

      <div className="relative min-h-[280px] p-8 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(95,224,203,0.14),transparent_60%)]">
        <Mockup screenshot={p.screenshot} logo={p.logo} code={p.code} iconGradient={p.iconGradient} />
      </div>

      <div className="relative p-9 md:p-11 flex flex-col justify-center">
        <div className={`inline-flex items-center gap-2 font-plex text-[11px] tracking-widest uppercase mb-3.5 ${p.statusColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
          {p.status}
        </div>
        <h3 className="font-mono text-[22px] sm:text-[28px] mb-3.5">{p.title}</h3>
        <p className="text-inkDim text-[15px] mb-5">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => {
            return (
              <span key={t} className="font-plex text-[10.5px] px-2.5 py-1 border border-copperDim rounded-md text-inkDim">
                {t}
              </span>
            );
          })}
        </div>
        {p.link && (<a
          
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
  );
}

export default function Flagship() {
  return (
    <section id="flagship" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader
          eyebrow="U2 // FLAGSHIP WORK"
          title="The main boards"
          sub="Live products I've designed, wired, and shipped end to end — each one solving a real problem for real people."
        />

        <div className="flex flex-col gap-7">
          {flagshipProjects.map((p, i) => {
            return <FlagshipCard key={p.title} p={p} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}