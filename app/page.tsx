
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { BackgroundFx } from "@/components/BackgroundFx";
import { ScrollReveal } from "@/components/ScrollReveal";

const heroContent = {
  name: "Jayaprasath K",
  role: "Application Developer @ United Parcel Service (UPS)",
  tagline:
    "I build reliable, user-friendly applications with scalable architecture, full-stack engineering, and cloud-native delivery.",
} as const;

const experienceContent = {
  title: "Experience Timeline",
  subtitle:
    "Career progression across industries and academic innovation, focused on scalable systems, secure delivery, and product impact.",
  items: [
    {
      id: "ups-application-developer",
      role: "Application Developer",
      organization: "United Parcel Service",
      period: "June 2025 - Present",
      location: "Chennai, India",
      summary:
        "Developing core enterprise microservices and orchestrating automated CI/CD pipelines to accelerate reliable, scalable software delivery.",
      highlights: [
        "Developed and maintained core enterprise microservices utilizing Java and Spring Boot for the Hub Automation Platform (GDAP).",
        "Transitioned from manual to automated deployments by engineering an Azure DevOps (ADO) pipeline on an on-premise Linux server.",
        "Configured the CI/CD pipeline to execute upon PR approval, reducing manual deployment time by 80% for GCP releases.",
        "Orchestrated Agile sprint planning to translate business requirements into scalable, production-ready code, accelerating delivery."
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Azure DevOps",
        "GCP",
        "Linux",
        "CI/CD"
      ],
    },
    {
      id: "ups-software-engineering-intern",
      role: "Software Engineering Intern",
      organization: "United Parcel Service",
      period: "Jan 2025 - May 2025",
      location: "Chennai, India",
      summary:
        "Spearheaded framework evaluations and built proof-of-concept applications to drive enterprise modernization.",
      highlights: [
        "Spearheaded the evaluation and adoption of modern technology frameworks for enterprise use to drive internal modernization.",
        "Delivered robust proof-of-concept applications that validated framework viability, resulting in seamless Agile sprint integration."
      ],
      technologies: ["Modern Frameworks", "Agile"],
    },
    {
      id: "mkce-innovation-hub",
      role: "Student",
      organization: "Technology Innovation Hub - MKCE",
      period: "May 2023 - Jan 2025",
      location: "Karur, India",
      summary:
        "Selected as one of 30 top students across the college to learn software development and build production-ready applications.",
      highlights: [
        "Developed enterprise-oriented solutions, including the college ERP portal, with end-to-end ownership.",
        "Strengthened software design fundamentals and gained hands-on full-stack development experience across multiple domains.",
        "Practiced scalable coding patterns and collaborative delivery through project-centric execution.",
      ],
      technologies: ["Angular", "Spring Boot", "SQL", "MongoDB", "TypeScript"],
    }
  ],
} as const;

const projectsContent = {
  title: "Projects Grid",
  subtitle:
    "Selected projects across enterprise application development and full-stack engineering.",
  projects: [
    {
      id: "playincognito",
      title: "PlayIncognito - Football Tournament Management App",
      description:
        "Engineered a full-stack sports management app for the Nigerian market with custom algorithmic bracket generation and secure tournament registrations.",
      techStack: ["ReactJS", "ExpressJS", "PostgreSQL", "Flutterwave", "Cloudflare"],
    },
    {
      id: "enterprise-hrms",
      title: "Enterprise HRMS",
      description:
        "Designed and developed an internal HR system with hierarchical org charts and project mapping capabilities to manage employee directories.",
      techStack: ["Java", "Spring Boot", "AngularJS", "TailwindCSS", "PostgreSQL"],
    },
    {
      id: "staff-alumni-nexus",
      title: "Staff-Alumni Nexus Career Portal",
      description:
        "Developed a centralized networking platform to bridge students, alumni, and faculty with features for career development and mentorship tracking.",
      techStack: ["ReactJS", "ExpressJS", "TailwindCSS", "MySQL"],
    }
  ],
} as const;

const skillsContent = {
  title: "Capabilities Across the Stack",
  subtitle:
    "Core strengths spanning backend engineering, frontend delivery, and scalable data-driven architecture.",
  categories: [
    {
      id: "backend-frameworks",
      title: "Backend & Frameworks",
      description: "Building robust services and RESTful APIs.",
      skills: ["Java", "Python", "NodeJS", "ExpressJS", "Spring Boot", "SQL", "NoSQL"],
    },
    {
      id: "frontend",
      title: "Frontend & UI",
      description: "Crafting responsive interfaces and user-focused experiences.",
      skills: ["ReactJS", "AngularJS", "TypeScript", "JavaScript"],
    },
    {
      id: "cloud-devops-db",
      title: "Cloud, DevOps & Databases",
      description: "Designing scalable data layers and deploying cloud-native applications.",
      skills: ["GCP", "ADO", "Docker", "Kubernetes", "CI/CD", "PostgreSQL", "MongoDB", "MySQL", "Firestore"],
    },
    {
      id: "ai-tools",
      title: "AI, GenAI & Tools",
      description: "Integrating modern AI workflows and utilizing developer tools.",
      skills: ["RAG", "LLM Models", "Prompt Engineering", "Agentic Workflows", "Git", "Linux", "Postman"],
    }
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
    <div className="relative min-h-screen overflow-x-clip bg-transparent text-slate-100">
      <BackgroundFx />

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-8 sm:py-6 lg:px-10">
          <ScrollReveal delay={50} direction="down" distance={15}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/90">
              Portfolio
            </p>
          </ScrollReveal>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-16 sm:gap-20 sm:px-8 sm:pb-20 lg:px-10">
          <ScrollReveal delay={100} direction="up">
            <Hero
              name={heroContent.name}
              role={heroContent.role}
              tagline={heroContent.tagline}
            />
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            <Experience
              title={experienceContent.title}
              subtitle={experienceContent.subtitle}
              items={[...experienceContent.items]}
            />
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            <Projects
              title={projectsContent.title}
              subtitle={projectsContent.subtitle}
              projects={projectsContent.projects}
            />
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            <Skills
              title={skillsContent.title}
              subtitle={skillsContent.subtitle}
              categories={skillsContent.categories}
            />
          </ScrollReveal>
        </main>

        <ScrollReveal delay={100} direction="up">
          <Contact
            email={contactContent.email}
            links={contactContent.links}
            copyrightName={contactContent.copyrightName}
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
