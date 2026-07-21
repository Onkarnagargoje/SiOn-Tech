import Card from './Card'
import Text from './Text'
import Avatar from './Avatar'
import Heading from './Heading'

export default function TestimonialCard({ item, index = 0 }) {
  return (
    <Card className="flex h-full flex-col p-8 sm:p-9">
      <Text className="flex-1 !text-xl !leading-relaxed !text-brand-ink">
        &ldquo;{item.quote}&rdquo;
      </Text>
      <div className="mt-8 flex items-center gap-4 border-t border-brand-line pt-6">
        <Avatar initials={item.initials} index={index} className="!h-12 !w-12 !text-sm" />
        <div>
          <Heading as="p" size="md">
            {item.name}
          </Heading>
          <p className="mt-0.5 text-sm text-brand-slate sm:text-base">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </Card>
  )
}
