import { SectionHeader } from "./Shared";
import useTilt from "../useTilt";

const specs = [
  ["ROLE", "Software Engineer (Full Stack)"],
  ["STACK", "MongoDB · Express · React · Node"],
  ["EDUCATION", "HND Software Engineering"],
  ["FOCUS", "AI / ML Engineering"],
  ["RESEARCH", "AI Social Engineering (CogniVuln)"],
  ["LANGUAGES", "Tamil · English · Sinhala"],
];

const currentlyLearning = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud Computing (AWS · GCP · Azure)",
  "DevOps (Docker · CI/CD · Linux)",
  "Advanced MERN & Next.js",
  "Psychology & Neuroscience",
];

export default function About() {
  const specsTilt = useTilt(5, true);
  const researchTilt = useTilt(3, true);

  return (
    <section id="about" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader eyebrow="U3 // ABOUT" title="Built from both sides of the breadboard" />

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start mb-16">
          <div className="reveal space-y-5 text-inkDim text-[16.5px]">
            <p>
              I didn't start out trying to become a developer. I started out curious — wanting to know how
              the apps I used every day actually worked underneath. That curiosity is still what drives me.
            </p>
            <p>
              Somewhere between finishing my{" "}
              <strong className="text-ink font-semibold">HND in Software Engineering</strong> and building my
              first real project, I realized I care less about writing "clever" code and more about building
              things people actually use — a bus tracker someone opens because they're late for work, a
              platform where people trade time instead of money. That's the kind of problem I want to keep
              solving.
            </p>
            <p>
              Right now I'm pushing beyond web development into{" "}
              <strong className="text-ink font-semibold">AI/ML, cybersecurity, and cloud infrastructure</strong>{" "}
              — and running an independent research project on how AI-driven social engineering exploits
              cognitive patterns in South Asian users, which is what pulled me toward psychology and
              neuroscience as well. I'm still early in all of it, and I like it that way — there's a lot more
              to learn, and I'd rather spend my time doing that than pretending I already know it all.
            </p>
          </div>

          <div
            ref={specsTilt.ref}
            onMouseMove={specsTilt.handleMove}
            onMouseLeave={specsTilt.handleLeave}
            style={specsTilt.style}
            className="reveal relative border border-copper/25 rounded-[14px] overflow-hidden bg-panel/20 backdrop-blur-sm shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-0 pointer-events-none z-20" style={specsTilt.glareStyle} />
            {specs.map(([k, v], i) => {
              return (
                <div
                  key={k}
                  className={`relative flex justify-between gap-3 px-5 py-4 text-[13px] font-plex ${
                    i !== specs.length - 1 ? "border-b border-copper/15" : ""
                  }`}
                >
                  <span className="text-inkDim">{k}</span>
                  <span className="text-ink text-right">{v}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Currently learning — pill row */}
        <div className="reveal mb-12">
          <div className="font-plex text-[11px] tracking-[.14em] text-gold mb-4">CURRENTLY LEARNING</div>
          <div className="flex flex-wrap gap-2.5">
            {currentlyLearning.map((item) => {
              return (
                <span
                  key={item}
                  className="font-plex text-[12.5px] px-4 py-2 border border-copperDim rounded-full text-inkDim transition-all duration-300 hover:border-signal hover:text-signal hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(95,224,203,0.35)]"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        {/* Independent research callout */}
        <div
          ref={researchTilt.ref}
          onMouseMove={researchTilt.handleMove}
          onMouseLeave={researchTilt.handleLeave}
          style={researchTilt.style}
          className="reveal relative border border-signal/25 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-signal/[0.08] via-panel/30 to-transparent backdrop-blur-sm overflow-hidden shadow-[0_30px_60px_-30px_rgba(95,224,203,0.2)]"
        >
          <div className="absolute inset-0 pointer-events-none z-20" style={researchTilt.glareStyle} />
          <div className="relative inline-flex items-center gap-2 font-plex text-[11px] tracking-widest uppercase mb-3.5 text-signal">
            <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
            Independent Research
          </div>
          <h3 className="relative font-mono text-xl mb-3">CogniVuln-Research</h3>
          <p className="relative text-inkDim text-[15px] max-w-[720px]">
            South Asian Cognitive Vulnerability to AI Social Engineering Attacks — a self-directed research
            project studying why AI-generated scams and manipulation succeed against South Asian users,
            bridging what I'm learning across AI/ML, cybersecurity, and psychology/neuroscience.
          </p>
        </div>
      </div>
    </section>
  );
}