export const PROJECTS = [
  {
    id: 'nova-finance',
    title: 'Nova Finance',
    client: 'Nova Capital',
    category: 'FinTech',
    year: '2025',
    tagline: 'Real-time wealth platform for modern investors',
    cover: 'linear-gradient(135deg, #0B1120 0%, #1e3a5f 50%, #3B82F6 100%)',
    problem:
      'Nova Capital needed a unified wealth dashboard that could ingest multi-broker data in real time while remaining accessible to non-technical investors.',
    solution:
      'We designed and built a React-based investing platform with streaming market data, AI-assisted portfolio insights, and bank-grade authentication — all under a calm, premium interface.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS', 'TensorFlow'],
    process: [
      'Discovery & compliance mapping',
      'Information architecture & UX',
      'MVP trading dashboard',
      'Real-time data pipeline',
      'Security hardening & launch',
    ],
    results: [
      { metric: '3.2×', label: 'Increase in daily active users' },
      { metric: '40%', label: 'Faster portfolio load times' },
      { metric: '99.99%', label: 'Uptime in first year' },
    ],
    testimonial: {
      quote:
        'SiOn didn’t just ship software — they reshaped how our clients experience wealth management.',
      name: 'Elena Vasquez',
      role: 'CTO, Nova Capital',
    },
  },
  {
    id: 'pulse-health',
    title: 'Pulse Health',
    client: 'Pulse Labs',
    category: 'HealthTech',
    year: '2024',
    tagline: 'AI-assisted patient engagement for clinics',
    cover: 'linear-gradient(135deg, #0B1120 0%, #0d3d38 50%, #10B981 100%)',
    problem:
      'Clinics struggled with no-shows and fragmented patient communication across SMS, email, and portals.',
    solution:
      'We delivered a Flutter mobile app and clinic admin console with intelligent reminder scheduling, secure messaging, and analytics that reduced missed appointments.',
    stack: ['Flutter', 'Firebase', 'Python', 'FastAPI', 'GCP', 'OpenAI'],
    process: [
      'Clinician interviews',
      'HIPAA-aware architecture',
      'Patient app MVP',
      'AI reminder engine',
      'Pilot rollout & iteration',
    ],
    results: [
      { metric: '28%', label: 'Reduction in no-shows' },
      { metric: '4.8★', label: 'Patient app rating' },
      { metric: '12', label: 'Clinic partners onboarded' },
    ],
    testimonial: {
      quote:
        'The product feels clinical-grade and consumer-grade at once. Rare combination.',
      name: 'Dr. Marcus Chen',
      role: 'Founder, Pulse Labs',
    },
  },
  {
    id: 'orbit-commerce',
    title: 'Orbit Commerce',
    client: 'Orbit Retail',
    category: 'E-Commerce',
    year: '2025',
    tagline: 'Headless commerce for a global lifestyle brand',
    cover: 'linear-gradient(135deg, #0B1120 0%, #2d1b4e 50%, #06B6D4 100%)',
    problem:
      'Orbit’s monolithic storefront couldn’t support regional catalogs, personalization, or peak Black Friday traffic.',
    solution:
      'We migrated to a headless architecture with Next.js storefronts, composable commerce APIs, and edge caching — unlocking global expansion.',
    stack: ['Next.js', 'Shopify Hydrogen', 'GraphQL', 'Cloudflare', 'Algolia'],
    process: [
      'Commerce audit',
      'Headless migration plan',
      'Storefront rebuild',
      'Search & personalization',
      'Load testing & go-live',
    ],
    results: [
      { metric: '2.1×', label: 'Conversion lift' },
      { metric: '55%', label: 'Faster LCP globally' },
      { metric: '0', label: 'Downtime on BFCM' },
    ],
    testimonial: {
      quote: 'SiOn made our Black Friday the calmest — and most profitable — we’ve ever had.',
      name: 'Priya Nair',
      role: 'VP Digital, Orbit Retail',
    },
  },
  {
    id: 'sentinel-ops',
    title: 'Sentinel Ops',
    client: 'Aether Systems',
    category: 'SaaS / DevOps',
    year: '2024',
    tagline: 'Observability suite for distributed teams',
    cover: 'linear-gradient(135deg, #0B1120 0%, #1a2744 50%, #3B82F6 100%)',
    problem:
      'Engineering teams drowned in alert noise without a unified view across services, logs, and traces.',
    solution:
      'We built an observability SaaS with intelligent alert grouping, 3D service topology maps, and role-based dashboards.',
    stack: ['React', 'Three.js', 'Go', 'ClickHouse', 'Kubernetes', 'Docker'],
    process: [
      'Platform discovery',
      'Data model design',
      'Core ingestion pipeline',
      'Visualization layer',
      'Enterprise SSO & launch',
    ],
    results: [
      { metric: '70%', label: 'Fewer noisy alerts' },
      { metric: '15min', label: 'Avg. MTTR improvement' },
      { metric: '50+', label: 'Enterprise seats' },
    ],
    testimonial: {
      quote: 'The topology view alone changed how our SREs think about incidents.',
      name: 'James Okonkwo',
      role: 'Head of Engineering, Aether',
    },
  },
  {
    id: 'lumen-edu',
    title: 'Lumen Learn',
    client: 'Lumen Education',
    category: 'EdTech',
    year: '2023',
    tagline: 'Adaptive learning paths powered by ML',
    cover: 'linear-gradient(135deg, #0B1120 0%, #1e293b 40%, #F59E0B 100%)',
    problem:
      'Students abandoned courses due to one-size-fits-all pacing and weak engagement loops.',
    solution:
      'An adaptive platform that personalizes lesson difficulty in real time and surfaces instructor insights.',
    stack: ['React', 'Python', 'scikit-learn', 'MongoDB', 'AWS'],
    process: [
      'Learning science research',
      'Adaptive algorithm prototype',
      'Student & teacher UX',
      'Content authoring tools',
      'Pilot with 3 universities',
    ],
    results: [
      { metric: '45%', label: 'Higher course completion' },
      { metric: '2×', label: 'Instructor engagement' },
      { metric: '10k+', label: 'Active learners' },
    ],
    testimonial: {
      quote: 'Completion rates jumped in the first semester. Students feel seen.',
      name: 'Sofia Alvarez',
      role: 'Director of Product, Lumen',
    },
  },
  {
    id: 'vault-secure',
    title: 'Vault Secure',
    client: 'Meridian Bank',
    category: 'Security',
    year: '2025',
    tagline: 'Zero-trust access portal for enterprise banking',
    cover: 'linear-gradient(135deg, #0B1120 0%, #3f1d2e 50%, #EF4444 100%)',
    problem:
      'Legacy VPN access created risk and friction for remote banking staff and third-party vendors.',
    solution:
      'We delivered a zero-trust access portal with device posture checks, step-up auth, and full audit trails.',
    stack: ['React', 'Java', 'Spring Boot', 'Okta', 'AWS', 'Terraform'],
    process: [
      'Threat modeling',
      'Zero-trust architecture',
      'Portal & policy engine',
      'Penetration testing',
      'Phased enterprise rollout',
    ],
    results: [
      { metric: '90%', label: 'VPN ticket reduction' },
      { metric: 'SOC2', label: 'Controls strengthened' },
      { metric: '4 weeks', label: 'Full department migration' },
    ],
    testimonial: {
      quote: 'Security and usability finally stopped fighting each other.',
      name: 'Daniel Brooks',
      role: 'CISO, Meridian Bank',
    },
  },
]

export const CASE_STUDIES = PROJECTS.slice(0, 4)
