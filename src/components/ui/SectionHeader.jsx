import Eyebrow from './Eyebrow'
import Heading from './Heading'
import Text from './Text'
import Reveal from '../animations/Reveal'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  accent = 'teal',
  align = 'left',
  light = false,
  className = '',
  titleId,
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <Reveal className={`flex w-full max-w-2xl flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow && (
        <Eyebrow accent={accent} light={light}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading id={titleId} size="title" light={light}>
        {title}
      </Heading>
      {description && <Text light={light}>{description}</Text>}
    </Reveal>
  )
}
