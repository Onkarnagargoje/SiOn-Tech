import Card from './Card'
import Heading from './Heading'
import Text from './Text'

export default function ProcessStep({ step, index, total }) {
  return (
    <div className="group relative flex gap-5">
      <div className="relative z-10 flex flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-base font-extrabold text-white shadow-teal ring-4 ring-white transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(13,148,136,0.45)]">
          {index + 1}
        </span>
        {/* Spacer only — shared progress line is drawn by ProcessPreview */}
        {index < total - 1 && <span className="mt-2 w-0.5 flex-1 bg-transparent" aria-hidden />}
      </div>
      <Card className="mb-6 flex-1 !rounded-2xl p-6 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-mid sm:p-7">
        <Heading as="h3" size="md">
          {step.title}
        </Heading>
        <Text className="mt-2">{step.text}</Text>
      </Card>
    </div>
  )
}
