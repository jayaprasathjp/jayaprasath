
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const heroContent = {
  name: "Jayaprasath K",
  role: "Associate Application Developer @ United Parcel Service (UPS)",
  tagline:
    "I build reliable, user-friendly applications with scalable architecture, full-stack engineering, and cloud-native delivery.",
  primaryCta: {
    label: "View Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact",
    href: "#contact",
  },
} as const;

const experienceContent = {
  title: "Experience Timeline",
  subtitle:
    "Career progression across UPS and academic innovation, focused on scalable systems, secure delivery, and product impact.",
  items: [
    {
      id: "ups-associate-application-developer",
      role: "Associate Application Developer",
      organization: "UPS India Technology Center",
      period: "June 2025 - Present",
      location: "Chennai, India",
      summary:
        "Lead development of resilient enterprise features for GDAP, with focus on scalable backend services and secure cloud operations.",
      highlights: [
        "Develop scalable microservices and integrated resilient backend solutions for high-throughput platform workflows.",
        "Delivered secure remediations across GCP resources, including Firestore and Pub/Sub, to improve compliance and runtime safety.",
        "Improved deployment confidence through container-based delivery patterns and stronger service integration reliability.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "GCP",
        "Cloud Run",
        "Firestore",
        "Pub/Sub",
        "IAM",
      ],
    },
    {
      id: "ups-application-developer",
      role: "Application Developer Intern",
      organization: "UPS India Technology Center",
      period: "Jan 2025 - May 2025",
      location: "Chennai, India",
      summary:
        "Contributed to application and backend modules for data platform initiatives, improving system efficiency and service quality.",
      highlights: [
        "Implemented backend APIs and integration workflows to support platform feature rollouts.",
        "Collaborated on full-stack enhancements that improved usability for internal stakeholders.",
        "Supported cloud operations and release pipelines for stable service deployment.",
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "GCP", "SQL", "MongoDB"],
    },
    {
      id: "mkce-innovation-hub",
      role: "Student",
      organization: "Technology Innovation Hub - MKCE",
      period: "May 2023 - Jan 2025",
      location: "Namakkal, India",
      summary:
        "Built a strong engineering foundation through practical projects spanning frontend, backend, and service-based applications.",
      highlights: [
        "Developed enterprise-oriented solutions such as HRMS and placement platforms with end-to-end ownership.",
        "Strengthened software design fundamentals with hands-on full-stack development across multiple domains.",
        "Practiced scalable coding patterns and collaborative delivery through project-centric execution.",
      ],
      technologies: ["Angular", "Spring Boot", "SQL", "MongoDB", "TypeScript"],
    },
  ],
} as const;

const projectsContent = {
  title: "Projects Grid",
  subtitle:
    "Selected projects across enterprise application development and cloud-native AI engineering.",
  projects: [
    {
      id: "enterprise-solutions",
      title: "Enterprise Solutions",
      description:
        "Delivered HRMS systems, placement platforms, and service-based applications with cohesive frontend and backend architecture.",
      techStack: ["Angular", "Spring Boot", "Node.js", "SQL", "MongoDB"],
    },
    {
      id: "colcommute-backend",
      title: "ColCommute Backend",
      description:
        "Designed and built a backend system for routing and carpool workflows, integrating geospatial capabilities and scalable deployment on managed cloud infrastructure.",
      techStack: ["FastAPI", "Google Maps APIs", "Cloud Run"],
    },
    {
      id: "gen-ai-agentic-framework",
      title: "Gen AI Agentic Framework",
      description:
        "Engineered an AI-driven framework to automate multi-step workflows using agent orchestration patterns for reliable execution on cloud-native infrastructure.",
      techStack: ["Google ADK", "Gemini", "GCP"],
    },
  ],
} as const;

const skillsContent = {
  title: "Capabilities Across the Stack",
  subtitle:
    "Core strengths spanning backend engineering, frontend delivery, and scalable data-driven architecture.",
  categories: [
    {
      id: "backend-cloud",
      title: "Backend & Cloud",
      description: "Building robust services with secure cloud-native operational practices.",
      skills: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "GCP",
        "Gcloud CLI",
        "Cloud Run",
        "IAM",
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Crafting responsive interfaces and user-focused experiences.",
      skills: ["Angular", "Next.js", "Tailwind CSS", "Node.js", "TypeScript"],
    },
    {
      id: "databases-architecture",
      title: "Databases & Architecture",
      description: "Designing scalable data layers and reliable full-stack system structure.",
      skills: ["SQL", "MongoDB", "Firestore", "Microservices", "System Design"],
    },
  ],
} as const;

const contactContent = {
  email: "jayaprasathjp44@gmail.com",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/jayaprasathjp",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayaprasathjp",
    },
  ],
  copyrightName: "Jayaprasath K",
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-8 sm:py-6 lg:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/90">
          Portfolio
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-16 sm:gap-20 sm:px-8 sm:pb-20 lg:px-10">
        <Hero
          name={heroContent.name}
          role={heroContent.role}
          tagline={heroContent.tagline}
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
        />

        <Experience
          title={experienceContent.title}
          subtitle={experienceContent.subtitle}
          items={[...experienceContent.items]}
        />
        <Projects
          title={projectsContent.title}
          subtitle={projectsContent.subtitle}
          projects={projectsContent.projects}
        />
        <Skills
          title={skillsContent.title}
          subtitle={skillsContent.subtitle}
          categories={skillsContent.categories}
        />
      </main>

      <Contact
        email={contactContent.email}
        links={contactContent.links}
        copyrightName={contactContent.copyrightName}
      />
    </div>
  );
}
