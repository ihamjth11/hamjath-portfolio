import { otherProjects, iotProjects } from "../data";
import { SectionHeader } from "./Shared";
import useTilt from "../useTilt";

function OtherProjectCard({ p }) {
  const tilt = useTilt(5, true);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      className="reveal relative border border-copper/20 rounded-2xl p-7 bg-gradient-to-br from-panel/50 to-bgDeep/50 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:border-signal hover:shadow-[0_24px_50px_-24px_rgba(95,224,203,0.28)]"
    >
      <div className="absolute inset-0 pointer-events-none z-20" style={tilt.glareStyle} />
      <div className="relative flex justify-between items-start mb-4">
        <span className="font-plex text-[11px] text-gold tracking-wide">{p.partNo}</span>
        <span
          className={`w-2 h-2 rounded-full mt-1 ${
            p.status === "live"
              ? "bg-signal shadow-[0_0_8px_#5FE0CB]"
              : "bg-danger shadow-[0_0_8px_#E0654F]"
          }`}
        />
      </div>
      <h3 className="relative font-mono text-xl mb-3">{p.title}</h3>
      <p className="relative text-inkDim text-[14.5px] mb-4">{p.description}</p>
      <div className="relative flex flex-wrap gap-2 mb-4">
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
          className="relative font-plex text-[12.5px] text-signal inline-flex items-center gap-1.5 hover:underline"
        >
          {p.linkLabel || "View on GitHub"} →
        </a>
      )}
    </div>
  );
}

function IotCard({ item }) {
  const tilt = useTilt(6, false);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      style={tilt.style}
      className="reveal border border-dashed border-copper/35 rounded-xl p-5 bg-bgDeep/40 transition-colors duration-300 hover:border-signal"
    >
      <span className="font-plex text-[11px] text-gold tracking-wide block mb-2.5">{item.partNo}</span>
      <h4 className="font-mono text-[15.5px] mb-2.5">{item.title}</h4>
      <p className="text-[13.5px] text-inkDim">{item.description}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-[150px]">
        <div className="max-w-[1180px] mx-auto px-8">
          <SectionHeader
            eyebrow="U5 // MORE PROJECTS"
            title="Shipped & In Progress"
            sub="Each one datasheet-style — what it does, what it's built with, and whether it's live."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => {
              return <OtherProjectCard key={p.partNo} p={p} />;
            })}
          </div>
        </div>
      </section>

      <section id="iot" className="py-[150px]">
        <div className="max-w-[1180px] mx-auto px-8">
          <SectionHeader
            eyebrow="U6 // IOT BUILDS"
            title="Where the software meets copper"
            sub="Before the stack was MERN, the stack was a breadboard. These are the builds that started it."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {iotProjects.map((item) => {
              return <IotCard key={item.partNo} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}