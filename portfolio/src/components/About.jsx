import { SectionHeader } from "./Shared";

const specs = [
  ["ROLE", "Software Engineer (Full Stack)"],
  ["STACK", "MongoDB · Express · React · Node"],
  ["EDUCATION", "HND Software Engineering"],
  ["CURRENT", "CodeAlpha Internship"],
  ["LEARNING", "Cybersecurity"],
  ["LANGUAGES", "Tamil · English · Sinhala"],
];

export default function About() {
  return (
    <section id="about" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeader eyebrow="U3 // ABOUT" title="Built from both sides of the breadboard" />

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start">
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
              I'm still early in this journey, and I like it that way — there's a lot more to learn, a lot
              more to build, and I'd rather spend my time doing that than pretending I already know it all.
            </p>
          </div>

          <div className="reveal border border-copper/25 rounded-[10px] overflow-hidden">
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between gap-3 px-5 py-4 text-[13px] font-plex ${
                  i !== specs.length - 1 ? "border-b border-copper/15" : ""
                }`}
              >
                <span className="text-inkDim">{k}</span>
                <span className="text-ink text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
