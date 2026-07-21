const accents = {
  teal: 'bg-brand-teal',
  coral: 'bg-brand-coral',
  amber: 'bg-brand-amber',
  navy: 'bg-brand-navy',
  aqua: 'bg-brand-aqua',
}

export default function Eyebrow({ children, accent = 'teal', light = false, className = '' }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.18em] ${
        light ? 'text-white/75' : 'text-brand-slate'
      } ${className}`}
    >
      <span className={`h-2.5 w-2.5 rounded-sm ${accents[accent] || accents.teal}`} aria-hidden />
      {children}
    </p>
  )
}
