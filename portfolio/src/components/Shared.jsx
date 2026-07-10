export function SectionHeader({ eyebrow, title, sub }) {
  return (
    <>
      <div className="eyebrow font-plex text-[13px] tracking-[.16em] text-copper flex items-center gap-2.5 mb-6 uppercase">
        {eyebrow}
      </div>
      <h2 className="font-mono font-extrabold text-[32px] sm:text-[42px] lg:text-[50px] tracking-tight mb-5 leading-tight">
        {title}
      </h2>
      {sub && <p className="text-inkDim max-w-[660px] text-[17px] mb-16">{sub}</p>}
    </>
  );
}

export function TraceDivider({ dots = [590] }) {
  return (
    <div className="w-full h-14 relative">
      <svg viewBox="0 0 1180 56" preserveAspectRatio="none" className="w-full h-full block">
        <path
          d="M0 28 H1180"
          stroke="#D08A50"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        {dots.map((cx, i) => (
          <circle key={i} cx={cx} cy="28" r="4" fill={i === 0 ? "#D08A50" : "#E8C179"} />
        ))}
      </svg>
    </div>
  );
}
