export default function Text({ children, light = false, size = 'base', className = '' }) {
  const sizes = {
    sm: 'text-base',
    base: 'text-lg',
    lg: 'text-lead',
  }

  return (
    <p
      className={`${sizes[size]} leading-relaxed ${
        light ? 'text-white/70' : 'text-brand-slate'
      } ${className}`}
    >
      {children}
    </p>
  )
}
