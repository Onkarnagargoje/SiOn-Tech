import { Link } from 'react-router-dom'
import { IconInstagram, IconLinkedIn } from '../ui/SocialIcons'
import { NAV_LINKS, SITE } from '../../data/site'
import { Container, Text, Logo } from '../ui'

const social = [
  { Icon: IconLinkedIn, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: IconInstagram, href: SITE.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <Container wide className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="space-y-5 sm:space-y-6 lg:col-span-5">
            <Logo light showUrl size="md" />
            <Text light className="max-w-md !text-base leading-relaxed sm:!text-lg">
              Custom websites, portals, management, redesign and maintenance for businesses, colleges and
              schools — delivered with clarity and craft.
            </Text>
            <div className="flex gap-3">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-aqua hover:bg-brand-teal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:col-span-7">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
                Explore
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={`${l.path}-${l.hash || l.label}`}>
                    <Link
                      to={l.hash ? { pathname: l.path, hash: `#${l.hash}` } : l.path}
                      className="text-[15px] text-white/75 transition hover:text-white sm:text-base"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
                Services
              </p>
              <ul className="space-y-2.5 text-[15px] text-white/75 sm:space-y-3 sm:text-base">
                <li>Custom Websites</li>
                <li>Portals</li>
                <li>Management</li>
                <li>Redesign & Care</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/40 sm:text-sm">
                Legal
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5 sm:block sm:space-y-3">
                <li>
                  <Link to="/privacy" className="text-[15px] text-white/75 hover:text-white sm:text-base">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[15px] text-white/75 hover:text-white sm:text-base">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact — full width so email stays on one line */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40 sm:mr-1">
            Contact
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="whitespace-nowrap text-sm font-medium text-white/80 transition hover:text-white sm:text-[15px]"
          >
            {SITE.email}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" aria-hidden />
          <a
            href={`tel:${SITE.phoneTel}`}
            className="whitespace-nowrap text-sm font-medium text-white/80 transition hover:text-white sm:text-[15px]"
          >
            {SITE.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="text-sm text-white/40 sm:text-base">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40 sm:text-base">www.siontechsolutions.com</p>
        </div>
      </Container>
    </footer>
  )
}
