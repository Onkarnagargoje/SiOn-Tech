import { forwardRef } from 'react'

const Section = forwardRef(function Section(
  { children, id, tone = 'cream', className = '', ariaLabelledby },
  ref,
) {
  const tones = {
    cream: 'bg-brand-cream',
    mist: 'bg-brand-mist',
    white: 'bg-white',
    ink: 'bg-brand-ink text-white',
    navy: 'bg-brand-navy text-white',
  }

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-14 sm:py-20 lg:py-28 ${tones[tone] || tones.cream} ${className}`}
    >
      {children}
    </section>
  )
})

export default Section
