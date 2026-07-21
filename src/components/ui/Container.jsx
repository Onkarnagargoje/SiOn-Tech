export default function Container({ children, wide = false, className = '' }) {
  return <div className={`${wide ? 'container-wide' : 'container-site'} ${className}`}>{children}</div>
}
