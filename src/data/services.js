import {
  Globe2,
  LayoutDashboard,
  Settings2,
  RefreshCw,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'custom-website',
    title: 'Custom Website Development',
    short: 'Business, college and school websites built exactly to your requirements.',
    description:
      'We design and develop high-quality websites tailored to your brand — from corporate sites to institutional websites for colleges and schools.',
    icon: Globe2,
    accent: 'teal',
    features: ['Business websites', 'College & school sites', 'Responsive & SEO-ready', 'CMS options'],
  },
  {
    id: 'portal-development',
    title: 'Portal Development',
    short: 'Secure, scalable portals for students, staff, partners and customers.',
    description:
      'Custom portals with role-based access, dashboards and workflows — ideal for education institutes and enterprises.',
    icon: LayoutDashboard,
    accent: 'coral',
    features: ['Student / staff portals', 'Client dashboards', 'Secure authentication', 'Integrations'],
  },
  {
    id: 'website-management',
    title: 'Website Management',
    short: 'We handle content, updates and day-to-day operations so you can focus on growth.',
    description:
      'Ongoing management for live websites — content updates, monitoring and coordinated improvements.',
    icon: Settings2,
    accent: 'amber',
    features: ['Content updates', 'Uptime monitoring', 'Plugin & CMS care', 'Priority support'],
  },
  {
    id: 'redesign-maintenance',
    title: 'Website Redesign & Maintenance',
    short: 'Modern redesigns plus continuous maintenance to keep sites fast, secure and current.',
    description:
      'Transform outdated websites into polished experiences — and keep them healthy with security, backups and speed care.',
    icon: RefreshCw,
    accent: 'navy',
    features: ['UI/UX redesign', 'Security & backups', 'Speed optimization', 'Monthly care plans'],
  },
]
