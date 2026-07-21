export default function Card({ children, className = '', as: Tag = 'div', hover = false, ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-brand-line shadow-soft ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-mid' : ''
      } ${className.includes('bg-') ? '' : 'bg-white'} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
