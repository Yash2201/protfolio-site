export const EXPERIENCE = [
  {
    id: "success",
    icon: "✉️",
    company: "Success.ai",
    role: "Full Stack Developer",
    period: "Aug 2024 – Mar 2026",
    location: "Remote",
    points: [
      "Built white-label SaaS solutions letting clients launch fully branded outreach platforms with their own domain and configuration.",
      "Developed the DFY (Done-For-You) onboarding system — purchase, configure, and manage email accounts seamlessly within the platform.",
      "Integrated Zapier and HubSpot to automate lead management, CRM sync, and multi-step outreach workflows.",
      "Built full email infrastructure tooling: SPF/DKIM/DMARC validators, blacklist monitors, spam checkers, SSL health checks, and email verification.",
      "Implemented AI tools: Email Copy Writer, Subject Line Generator, Spam Checker, Grammar Checker, and Spintax personalization.",
    ],
  },
  {
    id: "tmedia",
    icon: "📡",
    company: "Tmedia Business Solution",
    role: "Full Stack Developer",
    period: "May 2022 – May 2024",
    location: "Ahmedabad, India",
    points: [
      "Worked across React.js, Next.js, Laravel, Node.js, and TypeScript on a real-time comms platform, a no-code builder, and an EdTech platform simultaneously.",
      "Integrated Pusher for real-time communication features between users and administrators.",
      "Improved SSR implementation and frontend optimization for measurable SEO and load time gains.",
      "Designed and implemented backend APIs using Node.js, Express, Laravel, and PostgreSQL.",
    ],
  },
  {
    id: "geetaxmi",
    icon: "⚙️",
    company: "Geetaxmi Technologies",
    role: "Jr. Software Developer",
    period: "Feb 2021 – Mar 2022",
    location: "Remote",
    points: [
      "Built employee management and loan management modules using Laravel and PHP.",
      "Worked on an IoT-based mining management system — employee tracking, equipment management, and maintenance monitoring.",
      "Contributed to mobile app API integration and backend service development.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "email-platform",
    icon: "✉️",
    name: "AI-Powered Email Deliverability & Outreach Platform",
    period: "Aug 2024 – Mar 2026",
    desc: "The core product at Success.ai — a full white-label SaaS for branded cold email outreach with AI writing tools, deliverability infrastructure, and third-party integrations.",
    points: [
      "Full email infrastructure: SPF, DKIM, DMARC, SSL health, blacklist monitoring, spam checking, email verification",
      "AI tools: Copy Writer, Subject Line Generator, Spam Checker, Grammar Checker, Spintax engine",
      "White-label onboarding with branded platform customization per client",
      "DFY system for email account purchase, configuration, and management",
      "Zapier + HubSpot integrations for automated CRM and workflow management",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Zapier API", "HubSpot API"],
    featured: true,
  },
  {
    id: "dzitra",
    icon: "🧩",
    name: "Dzitra — No-Code App Builder",
    period: "Apr – Oct 2023",
    desc: "Drag-and-drop platform for building dynamic web apps without writing code. Custom rendering engine, reusable components, SSR optimization.",
    points: [
      "Drag-and-drop canvas with real-time rendering",
      "Scalable backend services and reusable component library",
      "SSR optimization and build size reduction",
    ],
    tags: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "telagr",
    icon: "🌾",
    name: "Telagr — Real-Time Comms Platform",
    period: "Oct 2023 – Jun 2024",
    desc: "Real-time communication system connecting farmers with specialists. Role-based workflows, session management, live chat.",
    points: [
      "Real-time chat via Pusher with role-scoped access control",
      "Chat request handling and session lifecycle management",
      "Image processing and thumbnail generation pipeline",
    ],
    tags: ["Laravel", "React.js", "Pusher", "PHP"],
  },
  {
    id: "edification",
    icon: "🎓",
    name: "Edification — EdTech Platform",
    period: "May 2022 – Apr 2023",
    desc: "Educational management system with live GPS bus tracking, route visualization, and dynamic CRUD management for school operations.",
    points: [
      "Live bus tracking + route visualization via Google Maps API with real-time coordinates",
      "Dynamic form builder with reusable CRUD components",
      "Configurable field structures for flexible educational data management",
    ],
    tags: ["Laravel", "React.js", "MongoDB", "Google Maps API"],
    wide: true,
  },
];

export const SKILLS = [
  { label: "Frontend", chips: [["React.js", true], ["Next.js", true], ["TypeScript", true], ["Redux", false], ["Tailwind CSS", false], ["Material UI", false], ["Formik", false]] },
  { label: "Backend", chips: [["Node.js", true], ["Express.js", true], ["Laravel", true], ["REST API", false], ["GraphQL", false], ["PHP", false]] },
  { label: "Databases", chips: [["MongoDB", true], ["MySQL", true], ["PostgreSQL", false], ["Mongoose", false], ["Eloquent ORM", false]] },
  { label: "Cloud & Tools", chips: [["AWS S3", false], ["Docker", false], ["Git", false], ["Pusher", false], ["Zapier", false], ["HubSpot", false], ["Postman", false]] },
];
