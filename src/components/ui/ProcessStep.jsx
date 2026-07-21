import Card from './Card'
import Heading from './Heading'
import Text from './Text'

export default function ProcessStep({ step, index, total }) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-base font-extrabold text-white shadow-teal">
          {index + 1}
        </span>
        {index < total - 1 && <span className="mt-2 w-0.5 flex-1 bg-brand-line" aria-hidden />}
      </div>
      <Card className="mb-5 flex-1 !rounded-2xl p-6 sm:p-7">
        <Heading as="h3" size="md">
          {step.title}
        </Heading>
        <Text className="mt-2">{step.text}</Text>
      </Card>
    </div>
  )
}
