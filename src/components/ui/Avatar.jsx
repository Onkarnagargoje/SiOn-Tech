const colors = ['bg-brand-teal', 'bg-brand-coral', 'bg-brand-amber', 'bg-brand-navy', 'bg-brand-aqua']

export default function Avatar({ initials, index = 0, className = '' }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${
        colors[index % colors.length]
      } ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  )
}
