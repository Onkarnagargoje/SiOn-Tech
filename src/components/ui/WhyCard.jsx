import Card from './Card'
import Heading from './Heading'
import Text from './Text'

export default function WhyCard({ item, index }) {
  return (
    <Card hover className="p-8 sm:p-9">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 text-lg font-extrabold text-brand-teal">
        0{index + 1}
      </span>
      <Heading as="h3" size="lg" className="mt-5">
        {item.title}
      </Heading>
      <Text className="mt-3">{item.text}</Text>
    </Card>
  )
}
