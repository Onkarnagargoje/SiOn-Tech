import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Badge from './Badge'
import Heading from './Heading'

const tones = {
  teal: 'from-teal-600 to-teal-900',
  coral: 'from-rose-500 to-orange-600',
  navy: 'from-slate-800 to-slate-950',
  amber: 'from-amber-400 to-orange-700',
}

export default function WorkCard({ item }) {
  return (
    <Link to="/portfolio" className="group relative block overflow-hidden rounded-[1.75rem] shadow-mid">
      <div className={`aspect-[5/4] bg-gradient-to-br ${tones[item.tone] || tones.teal} transition duration-700 group-hover:scale-105`} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <Badge tone="mist" className="!bg-white/20 !text-white !text-sm">
          {item.category}
        </Badge>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <Heading as="h3" size="lg" light>
              {item.title}
            </Heading>
            <p className="mt-2 text-base text-white/75">{item.blurb}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-brand-ink">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
