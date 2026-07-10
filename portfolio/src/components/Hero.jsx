export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 relative">
      <div className="relative w-[184px] h-[184px] mb-9 animate-floatIn">
        <div className="absolute -inset-3.5 rounded-full border border-copper/35" />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-copper shadow-[0_0_10px_#D08A50] top-1/2 -left-5 -translate-y-1/2" />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-copper shadow-[0_0_10px_#D08A50] top-1/2 -right-5 -translate-y-1/2" />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-copper shadow-[0_0_10px_#D08A50] left-1/2 -top-5 -translate-x-1/2" />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-copper shadow-[0_0_10px_#D08A50] left-1/2 -bottom-5 -translate-x-1/2" />
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[3px] border-copper shadow-[0_0_0_8px_rgba(208,138,80,0.08),0_0_50px_rgba(95,224,203,0.18),0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <img
            src="/profile.jpg"
            alt="Mohomad Hamjath"
            className="w-full h-full object-cover saturate-[1.05] contrast-[1.03]"
          />
        </div>
      </div>

      <div className="font-plex text-[12.5px] tracking-[.14em] text-gold mb-4 opacity-0 animate-fadeUp [animation-delay:.2s]">
        U1 // MAIN CONTROLLER
      </div>

      <h1 className="font-mono font-extrabold text-[40px] sm:text-[56px] lg:text-[78px] leading-[1.02] tracking-tight opacity-0 animate-fadeUp [animation-delay:.35s]">
        MOHOMAD
        <br />
        <span className="accent-text">HAMJATH</span>
      </h1>

      <p className="mt-5 text-base sm:text-xl text-inkDim opacity-0 animate-fadeUp [animation-delay:.5s]">
        Software Engineer (<b className="text-copper font-semibold">(Undergraduate)</b>) Full Stack Developer (MERN)|React.js & Node.js
      </p>

      <div className="mt-14 flex flex-wrap justify-center gap-3.5 opacity-0 animate-fadeUp [animation-delay:.65s]">
        {[
          ["#about", "About"],
          ["#flagship", "Flagship Work"],
          ["#skills", "Skills"],
          ["#projects", "Projects"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="font-plex text-xs tracking-widest uppercase px-5 py-2.5 border border-copperDim rounded-full text-inkDim transition-all hover:border-signal hover:text-signal hover:shadow-[0_0_18px_rgba(95,224,203,0.3)] hover:-translate-y-0.5"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="mt-[76px] flex flex-wrap gap-10 justify-center font-plex text-xs text-inkDim tracking-wide opacity-0 animate-fadeUp [animation-delay:.8s]">
        <span>
          LOCATION <b className="text-ink font-medium">Colombo, Sri Lanka</b>
        </span>
        <span>
          STATUS <b className="text-ink font-medium">Open to opportunities</b>
        </span>
        <span>
          REV <b className="text-ink font-medium">2026.2</b>
        </span>
      </div>

      <div className="mt-14 text-[11px] tracking-[.14em] text-inkDim opacity-0 animate-fadeUp animate-bob [animation-delay:1s]">
        SCROLL ↓
      </div>
    </section>
  );
}
