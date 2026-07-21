export default function Stat({ value, label, light = false, className = '' }) {
  return (
    <div className={className}>
      <p className={`text-3xl font-extrabold sm:text-4xl ${light ? 'text-white' : 'text-brand-ink'}`}>
        {value}
      </p>
      <p
        className={`mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm ${
          light ? 'text-white/55' : 'text-brand-slate'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
