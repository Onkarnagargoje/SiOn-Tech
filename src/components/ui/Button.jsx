import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const styles = {
  primary: 'bg-brand-teal text-white hover:bg-brand-aqua shadow-teal',
  coral: 'bg-brand-coral text-white hover:opacity-90',
  ink: 'bg-brand-ink text-white hover:bg-brand-navy',
  outline:
    'border-2 border-brand-line bg-transparent text-brand-ink hover:border-brand-teal hover:text-brand-teal',
  ghost: 'border border-white/30 bg-transparent text-white hover:bg-white/10',
  soft: 'bg-white text-brand-ink shadow-soft hover:shadow-mid',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon = false,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-base font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${
    styles[variant] || styles.primary
  } ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowUpRight className="h-5 w-5" aria-hidden />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
