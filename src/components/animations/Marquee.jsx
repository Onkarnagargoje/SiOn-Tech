export default function Marquee({ children, reverse = false, className = '', speed = '40s' }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden={false}>
      <div
        className={`flex w-max gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
