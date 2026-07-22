import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary:
    'bg-brand-teal text-white shadow-teal hover:bg-brand-aqua hover:shadow-[0_12px_36px_rgba(13,148,136,0.4)]',
  coral: 'bg-brand-coral text-white hover:opacity-90 hover:shadow-[0_12px_32px_rgba(240,98,77,0.35)]',
  ink: 'bg-brand-ink text-white hover:bg-brand-navy hover:shadow-[0_14px_40px_rgba(11,18,32,0.28)]',
  outline:
    'border-2 border-brand-line bg-transparent text-brand-ink hover:border-brand-teal hover:text-brand-teal hover:shadow-soft',
  ghost: 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50',
  soft: 'bg-white text-brand-ink shadow-soft hover:shadow-mid',
}

const sizes = {
  md: 'px-7 py-3.5 text-base gap-2',
  lg: 'px-9 py-4 text-base gap-2.5 sm:px-10 sm:py-[1.15rem] sm:text-lg',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const classes = [
    'group/btn inline-flex items-center justify-center rounded-full font-semibold',
    'transition-all duration-300 ease-out',
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none',
    sizes[size] || sizes.md,
    variants[variant] || variants.primary,
    className,
  ].join(' ')

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-300 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
          aria-hidden
        />
      )}
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
