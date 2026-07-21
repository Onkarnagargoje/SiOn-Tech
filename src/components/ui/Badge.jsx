const tones = {
  teal: 'bg-brand-teal/10 text-brand-teal',
  coral: 'bg-brand-coral/10 text-brand-coral',
  amber: 'bg-brand-amber/20 text-amber-800',
  navy: 'bg-brand-navy/10 text-brand-navy',
  mist: 'bg-brand-mist text-brand-slate',
}

export default function Badge({ children, tone = 'teal', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold ${
        tones[tone] || tones.teal
      } ${className}`}
    >
      {children}
    </span>
  )
}
