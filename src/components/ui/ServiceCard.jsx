import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe2, LayoutDashboard, Settings2, RefreshCw } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'
import IconBox from './IconBox'
import Heading from './Heading'
import Text from './Text'

const icons = {
  'custom-website': Globe2,
  'portal-development': LayoutDashboard,
  'website-management': Settings2,
  'redesign-maintenance': RefreshCw,
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.id] || Globe2

  return (
    <Card hover className="group flex h-full flex-col p-6 sm:p-10">
      <div className="flex items-start justify-between gap-3">
        <IconBox
          tone={service.accent}
          className="!h-14 !w-14 transition-transform duration-300 group-hover:scale-110"
        >
          <Icon className="h-6 w-6" aria-hidden />
        </IconBox>
        <Badge tone={service.accent}>Service</Badge>
      </div>
      <Heading as="h3" size="lg" className="mt-7">
        {service.title}
      </Heading>
      <Text className="mt-3 flex-1">
        {service.summary}
      </Text>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.points.map((p) => (
          <li key={p}>
            <Badge tone="mist">{p}</Badge>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 text-base font-bold text-brand-teal transition group-hover:gap-3"
      >
        Enquire now <ArrowUpRight className="h-5 w-5" />
      </Link>
    </Card>
  )
}
