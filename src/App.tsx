import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  Code2,
  Download,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Menu,
  Moon,
  Network,
  Orbit,
  Phone,
  Server,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const profile = {
  name: "Sunitha Jammu",
  email: "sunithajammu19@gmail.com",
  phone: "+91 7815843920",
  location: "Hyderabad and Visakhapatnam, India",
  linkedin: "https://www.linkedin.com/in/sunitha-jammu-/",
  linkedinLabel: "Sunitha Jammu | LinkedIn",
  leetcode: "https://leetcode.com/u/Jammu-sunitha/",
  leetcodeLabel: "Jammu-sunitha – LeetCode Profile",
  github: "https://github.com/sunithajammu",
  githubLabel: "sunithajammu",
  resume: "/resume.txt",
  profileImage: "",
};

const socialProfiles = [
  { href: profile.linkedin, label: profile.linkedinLabel, icon: Linkedin },
  { href: profile.leetcode, label: profile.leetcodeLabel, icon: Code2 },
  { href: profile.github, label: profile.githubLabel, icon: Github },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    title: "AI & Generative AI",
    index: "01",
    skills: [
      "LLMs",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Prompt Engineering",
      "AI Agents",
      "Multi-Agent Systems",
    ],
  },
  { title: "Programming", index: "02", skills: ["Python", "C#", "JavaScript"] },
  {
    title: "RAG & Data",
    index: "03",
    skills: ["RAG", "Embeddings", "Vector Databases", "Azure AI Search"],
  },
  {
    title: "Backend & Integration",
    index: "04",
    skills: ["REST APIs", "Microservices", "FastAPI", "ASP.NET Core"],
  },
  {
    title: "Cloud & Tools",
    index: "05",
    skills: ["Microsoft Azure", "Git", "GitHub", "Docker"],
  },
];

const projects = [
  {
    number: "01",
    category: "RAG · Azure OpenAI",
    name: "Enterprise RAG Chatbot",
    description:
      "A grounded knowledge assistant that turns internal documents into clear, source-aware answers.",
    tags: ["RAG", "Azure OpenAI", "Azure AI Search"],
    filter: "RAG",
    kind: "rag",
    github: "",
    demo: "",
  },
  {
    number: "02",
    category: "Agents · Orchestration",
    name: "Multi-Agent AI System",
    description:
      "Specialized agents collaborate on complex tasks through structured delegation and tool use.",
    tags: ["AI Agents", "Python", "Orchestration"],
    filter: "Agents",
    kind: "agents",
    github: "",
    demo: "",
  },
  {
    number: "03",
    category: "LLMs · API Integration",
    name: "AI Customer Support Assistant",
    description:
      "A conversational support layer that retrieves customer context and drafts useful next steps.",
    tags: ["LLMs", "REST APIs", "FastAPI"],
    filter: "LLMs",
    kind: "support",
    github: "",
    demo: "",
  },
  {
    number: "04",
    category: "Document AI · Search",
    name: "AI Document Intelligence",
    description:
      "An exploration of document extraction, semantic discovery, and question answering in one flow.",
    tags: ["Document AI", "Embeddings", "Search"],
    filter: "RAG",
    kind: "document",
    github: "",
    demo: "",
  },
];

const architectureSteps = [
  {
    label: "User",
    icon: Circle,
    detail: "A person asks a question or starts a task.",
  },
  {
    label: "Frontend",
    icon: Orbit,
    detail: "A clear interface captures intent and presents results.",
  },
  {
    label: "Backend API",
    icon: Server,
    detail: "A service validates input, applies policies, and routes requests.",
  },
  {
    label: "AI Agent",
    icon: Sparkles,
    detail: "An agent reasons about the task and chooses its next action.",
  },
  {
    label: "RAG Pipeline",
    icon: Network,
    detail: "Relevant context is retrieved to ground the model response.",
  },
  {
    label: "Vector DB",
    icon: Circle,
    detail: "Embeddings make semantic retrieval possible at scale.",
  },
  {
    label: "Azure OpenAI",
    icon: Orbit,
    detail: "A language model generates a context-aware answer.",
  },
  {
    label: "Response",
    icon: ArrowDownRight,
    detail: "A useful, grounded answer returns to the user.",
  },
];

const agentSteps = [
  "User Request",
  "Supervisor",
  "Research",
  "Analysis",
  "Execution",
  "Final Response",
];
const filters = ["All", "RAG", "Agents", "LLMs"];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [architectureIndex, setArchitectureIndex] = useState(0);
  const [agentIndex, setAgentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const titles = [
    "Software Engineering",
    "AI Engineering",
    "Generative AI",
    "Agentic AI",
  ];

  useEffect(() => {
    const target = titles[titleIndex];
    let position = 0;
    setTypedTitle("");
    const timer = window.setInterval(() => {
      position += 1;
      setTypedTitle(target.slice(0, position));
      if (position >= target.length) {
        window.clearInterval(timer);
        window.setTimeout(
          () => setTitleIndex((current) => (current + 1) % titles.length),
          2100,
        );
      }
    }, 75);
    return () => window.clearInterval(timer);
  }, [titleIndex]);

  useEffect(() => {
    const updateGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--pointer-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        `${event.clientY}px`,
      );
    };
    window.addEventListener("pointermove", updateGlow);
    return () => window.removeEventListener("pointermove", updateGlow);
  }, []);

  const visibleProjects = projects.filter(
    (project) => projectFilter === "All" || project.filter === projectFilter,
  );

  function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${values.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.get("name")}\nEmail: ${values.get("email")}\n\n${values.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormStatus("Your email app is opening with your message.");
  }

  return (
    <div className={lightMode ? "app light-mode" : "app"}>
      <div className="pointer-glow" aria-hidden="true" />
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${profile.name}, home`}
        >
          <span className="wordmark-mark">SJ</span>
          <span>
            {profile.name}
            <small>SOFTWARE · AI · AGENTIC AI</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "main-nav nav-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resume} download>
            Resume <Download size={14} />
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => setLightMode((current) => !current)}
            aria-label={
              lightMode ? "Switch to dark theme" : "Switch to light theme"
            }
            title={lightMode ? "Switch to dark theme" : "Switch to light theme"}
          >
            {lightMode ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">
                <span />
                AVAILABLE FOR OPPORTUNITIES
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="hero-name">
                Hello, I’m
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1>
                <span className="hero-person-name">{profile.name}</span>
                <br />
                Building intelligent
                <br />
                <span className="headline-accent">AI solutions</span> for the
                <br />
                real world<span className="period">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="hero-role">
                <span className="typing-text">{typedTitle}</span>
                <span className="typing-caret">|</span>
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="hero-description">
                I’m interested in software engineering and AI, from thoughtful
                software systems to Generative AI applications, autonomous
                agents, and Agentic AI workflows.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="hero-cta">
                <a
                  className="button button-primary"
                  href={profile.resume}
                  download
                >
                  Download resume <Download size={16} />
                </a>
                <a className="button button-secondary" href="#projects">
                  Explore projects <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="hero-socials">
                {socialProfiles.map(({ href, label, icon: Icon }) => (
                  <a
                    href={href}
                    key={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={17} />
                  </a>
                ))}
                <span className="social-divider" />
                <span className="location-label">{profile.location}</span>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-art" delay={0.2}>
            <div className="art-topline">
              <span>INTELLIGENCE, IN MOTION</span>
              <span>01 — 08</span>
            </div>
            <div
              className="orbit-scene"
              aria-label="Abstract AI network illustration"
            >
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-core">
                {profile.profileImage ? (
                  <img
                    className="profile-image"
                    src={profile.profileImage}
                    alt={`${profile.name} profile`}
                  />
                ) : (
                  <span className="core-symbol">SJ</span>
                )}
                <span className="core-ring" />
              </div>
              <span className="orbit-node node-a" />
              <span className="orbit-node node-b" />
              <span className="orbit-node node-c" />
              <span className="orbit-node node-d" />
              <span className="orbit-label label-a">
                LLM <i />
              </span>
              <span className="orbit-label label-b">
                <i /> AGENT
              </span>
              <span className="orbit-label label-c">
                RAG <i />
              </span>
              <div className="orbit-caption">
                <Sparkles size={14} /> SYSTEMS THAT THINK
              </div>
            </div>
            <div className="art-bottomline">
              <span>HUMAN-CENTERED INTELLIGENCE</span>
              <ArrowDownRight size={15} />
            </div>
          </Reveal>
          <a className="scroll-hint" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Curious by nature.\nIntentional by design."
          />
          <div className="about-grid">
            <Reveal className="about-lead">
              <p>
                Artificial intelligence is most exciting when it solves a real
                problem. That belief shapes how I approach every system: with a
                strong technical foundation, a clear sense of purpose, and
                respect for the people who use it.
              </p>
              <a className="text-link" href="#contact">
                A little more about my approach <ArrowUpRight size={15} />
              </a>
            </Reveal>
            <Reveal className="about-detail" delay={0.12}>
              <p>
                My focus is building practical AI products with large language
                models, agentic workflows, and retrieval-augmented generation. I
                care about what happens beyond the demo: reliable integrations,
                relevant context, and systems that make sense in an enterprise
                environment.
              </p>
              <p>
                From shaping an API around a model to connecting a full RAG
                pipeline, I enjoy bringing the moving parts together into
                something coherent and useful.
              </p>
            </Reveal>
          </div>
          <div className="capability-line">
            <span>WHAT I BUILD</span>
            <div>
              <span>Intelligent applications</span>
              <span>Autonomous agents</span>
              <span>Multi-agent workflows</span>
              <span>Enterprise RAG</span>
              <span>AI integrations</span>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading
            eyebrow="TOOLS OF THE TRADE"
            title="A toolkit for\nintelligent systems."
            note="The right tool for the problem. A thoughtful system around it."
          />
          <div className="skills-grid">
            {skillGroups.map((group, groupIndex) => (
              <Reveal
                className={`skill-group skill-group-${group.index}`}
                delay={groupIndex * 0.06}
                key={group.index}
              >
                <div className="skill-group-heading">
                  <span>{group.index}</span>
                  <Code2 size={16} />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <SectionHeading
            eyebrow="THE JOURNEY SO FAR"
            title="Experience, in context."
            note="Your story belongs here. Add roles and accomplishments when you are ready."
          />
          <Reveal className="experience-placeholder">
            <div className="timeline-mark">
              <span />
            </div>
            <div className="experience-content">
              <p className="eyebrow">
                <span />
                EXPERIENCE PLACEHOLDER
              </p>
              <h3>Your next chapter starts here.</h3>
              <p>
                Replace this with your role, company, employment dates,
                responsibilities, and measurable achievements. Keep it specific
                to the work you actually did.
              </p>
              <div className="experience-meta">
                <span>[ Job title ]</span>
                <span>[ Company name ]</span>
                <span>[ Start – End date ]</span>
              </div>
              <div className="experience-tech">
                <span>[ Add responsibilities ]</span>
                <span>[ Add technologies used ]</span>
                <span>[ Add a key achievement ]</span>
              </div>
            </div>
            <ArrowUpRight className="experience-arrow" size={18} />
          </Reveal>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="SELECTED EXPLORATIONS"
            title="Ideas worth building."
            note="Illustrative project concepts. Replace with your own work before publishing."
          />
          <div className="project-controls">
            <p>
              PROJECT CONCEPTS <span>·</span> EDITABLE SAMPLES
            </p>
            <div
              className="filter-tabs"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={
                    projectFilter === filter
                      ? "filter-tab active"
                      : "filter-tab"
                  }
                  onClick={() => setProjectFilter(filter)}
                  aria-pressed={projectFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.number}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.28, delay: index * 0.035 }}
                >
                  <div className="project-visual">
                    <div
                      className={`project-graphic graphic-${project.kind}`}
                      aria-hidden="true"
                    >
                      <div className="graphic-grid" />
                      {project.kind === "rag" && (
                        <>
                          <span className="doc doc-one">DOC 01</span>
                          <span className="doc doc-two">DOC 02</span>
                          <span className="graphic-connector" />
                          <span className="graphic-chip">RAG</span>
                          <span className="graphic-answer">
                            grounded response <Check size={11} />
                          </span>
                        </>
                      )}
                      {project.kind === "agents" && (
                        <>
                          <span className="agent-center">AI</span>
                          <span className="agent-node agent-one">PLAN</span>
                          <span className="agent-node agent-two">TOOLS</span>
                          <span className="agent-node agent-three">ACT</span>
                          <span className="agent-lines" />
                        </>
                      )}
                      {project.kind === "support" && (
                        <>
                          <span className="chat-bubble bubble-one">
                            How can I help?
                          </span>
                          <span className="chat-bubble bubble-two">
                            Looking that up...
                          </span>
                          <span className="chat-orb">
                            <Sparkles size={18} />
                          </span>
                        </>
                      )}
                      {project.kind === "document" && (
                        <>
                          <span className="scan-sheet">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                          <span className="scan-frame" />
                          <span className="scan-tag">EXTRACTED</span>
                          <span className="scan-result">
                            semantic match <ArrowRight size={11} />
                          </span>
                        </>
                      )}
                    </div>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span>[ Add GitHub URL ]</span>
                      )}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live demo <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span>[ Add demo URL ]</span>
                      )}
                    </div>
                    <div className="sample-label">
                      <span /> SAMPLE CONCEPT{" "}
                      <span className="editable-label">· EDITABLE</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section
          className="architecture-section section-wrap"
          id="architecture"
        >
          <SectionHeading
            eyebrow="HOW THE PIECES CONNECT"
            title="Architecture with\nintent."
            note="Good AI products are systems, not just models."
          />
          <Reveal className="architecture-panel">
            <div className="architecture-top">
              <div>
                <span className="diagram-index">01</span>
                <h3>A grounded AI application</h3>
              </div>
              <span className="diagram-caption">SELECT A NODE TO EXPLORE</span>
            </div>
            <div
              className="architecture-flow"
              aria-label="Interactive AI application architecture"
            >
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="architecture-item" key={step.label}>
                    <button
                      className={
                        architectureIndex === index
                          ? "architecture-node selected"
                          : "architecture-node"
                      }
                      onClick={() => setArchitectureIndex(index)}
                      aria-pressed={architectureIndex === index}
                    >
                      <Icon size={16} />
                      <span>{step.label}</span>
                    </button>
                    {index < architectureSteps.length - 1 && (
                      <span className="flow-arrow">
                        <ArrowRight size={13} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="architecture-description">
              <span className="description-dot" />
              <p>{architectureSteps[architectureIndex].detail}</p>
              <span className="architecture-step-count">
                {String(architectureIndex + 1).padStart(2, "0")} /{" "}
                {String(architectureSteps.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
          <Reveal className="agent-panel" delay={0.1}>
            <div className="architecture-top">
              <div>
                <span className="diagram-index">02</span>
                <h3>Orchestrated, not improvised</h3>
              </div>
              <span className="diagram-caption">MULTI-AGENT WORKFLOW</span>
            </div>
            <div className="agent-flow">
              {agentSteps.map((step, index) => (
                <button
                  className={
                    agentIndex === index ? "agent-step selected" : "agent-step"
                  }
                  key={step}
                  onClick={() => setAgentIndex(index)}
                  aria-pressed={agentIndex === index}
                >
                  <span className="agent-step-index">0{index + 1}</span>
                  <span>{step}</span>
                  {index < agentSteps.length - 1 && <ArrowRight size={13} />}
                </button>
              ))}
            </div>
            <p className="agent-note">
              <span />
              {agentIndex === 0
                ? "One request, routed to the right work."
                : `${agentSteps[agentIndex]} plays a distinct role in the workflow.`}
            </p>
          </Reveal>
        </section>

        <section className="credentials-section section-wrap" id="credentials">
          <SectionHeading
            eyebrow="ALWAYS LEARNING"
            title="Learning in progress."
            note="Add verified certifications, courses, and academic credentials here."
          />
          <div className="credentials-grid">
            {[
              {
                icon: Orbit,
                title: "Azure certifications",
                text: "Add certification name, issuing organization, and date earned.",
              },
              {
                icon: Sparkles,
                title: "AI & Generative AI",
                text: "Add AI or Generative AI credentials you have completed.",
              },
              {
                icon: Code2,
                title: "Courses & education",
                text: "Add technical courses and academic qualifications.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <Reveal
                className="credential-card"
                delay={index * 0.07}
                key={title}
              >
                <span className="credential-icon">
                  <Icon size={17} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="credential-edit">
                    EDITABLE PLACEHOLDER <ArrowUpRight size={12} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-intro">
            <Reveal>
              <p className="eyebrow">
                <span />
                OPEN TO GOOD PROBLEMS
              </p>
              <h2>
                Let’s build something
                <br />
                <span className="headline-accent">intelligent</span> together
                <span className="period">.</span>
              </h2>
              <p className="contact-copy">
                Have a meaningful AI challenge in mind? I’d like to hear what
                you’re working on.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
            <Reveal className="contact-links" delay={0.1}>
              <span className="contact-location">
                <MapPin size={15} /> {profile.location}
              </span>
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                <Phone size={15} /> {profile.phone}
              </a>
              {socialProfiles.map(({ href, label, icon: Icon }) => (
                <a
                  href={href}
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={15} /> {label} <ArrowUpRight size={13} />
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal className="contact-form-wrap" delay={0.12}>
            <div className="form-heading">
              <span>01 / SAY HELLO</span>
              <Mail size={17} />
            </div>
            <form onSubmit={submitContact}>
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                placeholder="Name"
                autoComplete="name"
                required
                maxLength={100}
              />
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={254}
              />
              <label htmlFor="contact-message">What are you building?</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="A little about your project..."
                rows={4}
                required
                maxLength={3000}
              />
              <button
                className="button button-primary form-submit"
                type="submit"
              >
                Open email draft <ArrowUpRight size={16} />
              </button>
              {formStatus && (
                <p className="form-status" role="status">
                  {formStatus}
                </p>
              )}
              <p className="form-note">
                Your message opens in your email app. No data is stored here.
              </p>
            </form>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">SJ</span>
          <span>
            {profile.name}
            <small>SOFTWARE · AI · AGENTIC AI</small>
          </span>
        </a>
        <p>Building with intelligence. Designed for people.</p>
        <nav aria-label="Footer navigation">
          {navigation.slice(0, 4).map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-socials" aria-label="Social profiles">
          {socialProfiles.map(({ href, label, icon: Icon }) => (
            <a
              href={href}
              key={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </div>
  );
}

export default App;
