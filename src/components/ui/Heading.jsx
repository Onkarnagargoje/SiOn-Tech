export default function Heading({
  as: Tag = 'h2',
  children,
  size = 'title',
  serif = false,
  light = false,
  className = '',
  id,
}) {
  const sizes = {
    display: 'text-display font-extrabold tracking-tight',
    title: 'text-title font-bold tracking-tight',
    lg: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
    md: 'text-xl sm:text-2xl font-bold',
    sm: 'text-lg sm:text-xl font-semibold',
  }

  const useDisplay = serif || size === 'display' || size === 'title'

  return (
    <Tag
      id={id}
      className={`${sizes[size]} ${useDisplay ? 'font-display' : 'font-sans'} ${
        light ? 'text-white' : 'text-brand-ink'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
