import { Building2, GraduationCap, School, LayoutDashboard } from 'lucide-react'
import { Container, Section, SectionHeader, Button } from '../ui'
import Reveal from '../animations/Reveal'

const audiences = [
  {
    icon: Building2,
    title: 'Businesses',
    text: 'Company websites that present services clearly, build trust, and turn visitors into enquiries.',
    points: ['Service pages', 'Lead forms', 'Brand polish'],
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    text: 'Admissions-ready campus sites with programs, departments, and secure student or staff access.',
    points: ['Admissions flows', 'Program catalogs', 'Portals'],
  },
  {
    icon: School,
    title: 'Schools',
    text: 'Parent-friendly school sites with news, events, and simple ways to get in touch.',
    points: ['News & events', 'Enquiry forms', 'Easy updates'],
  },
  {
    icon: LayoutDashboard,
    title: 'Teams & portals',
    text: 'Role-based portals for students, faculty, partners or clients — secure and easy to use.',
    points: ['Secure login', 'Dashboards', 'Integrations'],
  },
]

export default function Industries() {
  return (
    <Section id="industries" tone="mist" ariaLabelledby="industries-heading" className="scroll-mt-28">
      <Container wide>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            titleId="industries-heading"
            eyebrow="Who we serve"
            accent="coral"
            title="Built for organizations that need clarity online"
            description="Whether you run a business, college or school, we shape the site around how your audience actually uses it."
          />
          <Button
            to="/contact"
            variant="ink"
            className="!w-full !rounded-full shrink-0 self-stretch sm:!w-auto sm:self-start lg:self-auto"
          >
            Discuss your project
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-brand-line bg-white p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-teal">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-brand-slate">{item.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-brand-line pt-5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-aqua" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
