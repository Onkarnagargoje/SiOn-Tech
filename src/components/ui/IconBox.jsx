const tones = {
  teal: 'bg-brand-teal/10 text-brand-teal',
  coral: 'bg-brand-coral/10 text-brand-coral',
  amber: 'bg-brand-amber/20 text-amber-700',
  navy: 'bg-brand-navy/10 text-brand-navy',
  white: 'bg-white text-brand-ink shadow-soft',
}

export default function IconBox({ children, tone = 'teal', className = '' }) {
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
        tones[tone] || tones.teal
      } ${className}`}
    >
      {children}
    </div>
  )
}
