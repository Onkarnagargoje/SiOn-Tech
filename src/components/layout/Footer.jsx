import { Link } from 'react-router-dom'
import { IconGitHub, IconInstagram, IconLinkedIn, IconX } from '../ui/SocialIcons'
import { NAV_LINKS, SITE } from '../../data/site'
import { Container, Text, Logo } from '../ui'

const social = [
  { Icon: IconLinkedIn, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: IconX, href: SITE.social.twitter, label: 'X' },
  { Icon: IconGitHub, href: SITE.social.github, label: 'GitHub' },
  { Icon: IconInstagram, href: SITE.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <Container wide className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Logo light showUrl size="md" />
            <Text light className="max-w-md">
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

          <div className="grid grid-cols-1 gap-10 min-[480px]:grid-cols-2 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/40">Explore</p>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={`${l.path}-${l.hash || l.label}`}>
                    <Link
                      to={l.hash ? { pathname: l.path, hash: `#${l.hash}` } : l.path}
                      className="text-base text-white/75 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/40">Services</p>
              <ul className="space-y-3 text-base text-white/75">
                <li>Custom Websites</li>
                <li>Portals</li>
                <li>Management</li>
                <li>Redesign & Care</li>
              </ul>
            </div>
            <div className="min-[480px]:col-span-2 sm:col-span-1">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/40">Legal</p>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-base text-white/75 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-base text-white/75 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all text-base text-white/75 hover:text-white"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="text-base text-white/75 hover:text-white"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white/40">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-base text-white/40">www.siontechsolutions.com</p>
        </div>
      </Container>
    </footer>
  )
}
