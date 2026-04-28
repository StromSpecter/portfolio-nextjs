"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import beaCukaiLogo from "./assets/svgs/Logo_Bea_dan_Cukai.svg";
import mtmLogo from "./assets/images/Logo MTM.png";
import nexuraLogo from "./assets/svgs/Nexura-05.svg";
import voteraImg from "./assets/images/votera.png";
import bsiRumahHarumImg from "./assets/images/bsiRumahHarum.png";
import {
  SiAntdesign,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiGoland,
  SiPostgresql,
  SiCloudflare,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGitlab,
  SiUbuntu,
  SiGooglecloudstorage,
  SiRockylinux,
  SiKotlin,
} from "react-icons/si";

type StackItem = {
  name: string;
  icon: IconType;
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  logo: StaticImageData;
  logoAlt: string;
};

type PortfolioProject = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  summary: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  link: string;
};

const techStackCategories: StackCategory[] = [
  {
    title: "FRONTEND",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "MOBILE",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Golang", icon: SiGoland },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "TOOLS / COLLABORATION",
    items: [
      { name: "GitHub", icon: SiGithub },
      { name: "Gitlab", icon: SiGitlab },
    ],
  },
  {
    title: "DEVOPS / CLOUD",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Firebase", icon: SiFirebase },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Google Cloud", icon: SiGooglecloudstorage },
    ],
  },
  {
    title: "SYSTEM / SERVER",
    items: [
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Rocky Linux", icon: SiRockylinux },
    ],
  },
];

const experiences: Experience[] = [
  {
    company: "Direktorat Jenderal Bea dan Cukai",
    role: "Frontend Developer",
    type: "Contract",
    period: "January 2025 – Present",
    highlights: [
      "Analyzed issues with the System Analyst before development.",
      "Fixed frontend issues on the internal Bea Cukai website.",
      "Resolved 66 frontend issue tickets in 2025.",
      "Resolved 51 frontend issue tickets in 2026 (to date).",
    ],
    logo: beaCukaiLogo,
    logoAlt: "Direktorat Jenderal Bea dan Cukai logo",
  },
  {
    company: "PT Media Telekomunikasi Mandiri",
    role: "Full Stack Developer",
    type: "Internship",
    period: "January 24 – January 25",
    highlights: [
      "Assisted in the development of web applications.",
      "Collaborated with the team to design and implement new features.",
      "Participated in code reviews and debugging sessions.",
      "Gained hands-on experience with full stack development.",
    ],
    logo: mtmLogo,
    logoAlt: "PT Media Telekomunikasi Mandiri logo",
  },
  {
    company: "Nexura",
    role: "Software Engineer",
    type: "Founder",
    period: "2024 – Present",
    highlights: [
      "Founded Nexura Studio, a digital development initiative.",
      "Led multiple projects, delivering impactful and reliable digital solutions.",
      "Collaborated with clients to understand their needs and translate them into effective software solutions.",
      "Managed project timelines, resources, and client communications to ensure successful project delivery.",
    ],
    logo: nexuraLogo,
    logoAlt: "Nexura logo",
  },
];

const portfolioProjects: PortfolioProject[] = [
  {
    id: "votera",
    eyebrow: "Apps & Dashboards",
    title: "Votera ID",
    highlight: "Vote Management System",
    summary:
      "A premium online voting platform for corporate and professional needs. Secure, Seamless, Sophisticated.",
    imageSrc: voteraImg,
    imageAlt: "Votera ID project preview",
    link: "https://votera.id",
  },
  {
    id: "bsiRumahHarum",
    eyebrow: "Apps & Dashboards",
    title: "BSI Rumah Harum",
    highlight: "Company Profile",
    summary:
      "A company profile website for BSI Rumah Harum, highlighting their commitment to sustainability and eco-friendly initiatives in the city of Depok.",
    imageSrc: bsiRumahHarumImg,
    imageAlt: "BSI Rumah Harum project preview",
    link: "https://banksampahrumahharum.com/",
  },
];

function ArrowAccent() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-0 w-full h-full">
      <div className="col-start-1 row-start-1 bg-white/50"></div>
      <div className="col-start-1 row-start-3 bg-white/50"></div>
      <div className="col-start-1 row-start-5 bg-white/50"></div>
      <div className="col-start-3 row-start-5 bg-white/50"></div>
      <div className="col-start-5 row-start-5 bg-white/50"></div>
      <div className="col-start-2 row-start-4 bg-white/50"></div>
      <div className="col-start-3 row-start-3 bg-white/50"></div>
      <div className="col-start-4 row-start-2 bg-white/50"></div>
      <div className="col-start-5 row-start-1 bg-white/50"></div>
    </div>
  );
}

const getRevealStyle = (delayMs: number): React.CSSProperties =>
  ({ "--reveal-delay": `${delayMs}ms` }) as React.CSSProperties;

const sectionHeadingClass =
  "text-sm lg:text-xl tracking-[0.2em] whitespace-nowrap";

export default function Page() {
  const pageRootRef = useRef<HTMLDivElement | null>(null);
  const aboutPanelRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const stackPanelRef = useRef<HTMLDivElement | null>(null);
  const experiencePanelRef = useRef<HTMLDivElement | null>(null);
  const projectPanelRef = useRef<HTMLDivElement | null>(null);
  const projectVisualCardRef = useRef<HTMLElement | null>(null);
  const contactPanelRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [projectVisualCardHeight, setProjectVisualCardHeight] = useState(0);

  const activeProject =
    portfolioProjects[activeProjectIndex] ?? portfolioProjects[0];

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  const scrollToNextSection = () => {
    aboutSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const projectVisualCardEl = projectVisualCardRef.current;

    if (!projectVisualCardEl) {
      return;
    }

    const updateProjectVisualCardHeight = () => {
      setProjectVisualCardHeight(
        projectVisualCardEl.getBoundingClientRect().height,
      );
    };

    updateProjectVisualCardHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateProjectVisualCardHeight();
    });

    resizeObserver.observe(projectVisualCardEl);
    window.addEventListener("resize", updateProjectVisualCardHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateProjectVisualCardHeight);
    };
  }, [activeProjectIndex]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const parallaxEls = [
      aboutPanelRef.current,
      stackPanelRef.current,
      experiencePanelRef.current,
      projectPanelRef.current,
      contactPanelRef.current,
    ].filter((el): el is HTMLDivElement => Boolean(el));

    const revealEls = Array.from(
      pageRootRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [],
    );

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      parallaxEls.forEach((el) =>
        el.style.setProperty("--parallax-offset", "0px"),
      );
      return;
    }

    let ticking = false;

    const updateScrollFx = () => {
      const viewportHeight = window.innerHeight;

      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distanceFromCenter =
          rect.top + rect.height / 2 - viewportHeight / 2;
        const offset = Math.max(-42, Math.min(42, -distanceFromCenter * 0.08));

        el.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });

      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.85) {
          el.classList.add("is-visible");
        }
      });

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollFx);
      }
    };

    updateScrollFx();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <main
      ref={pageRootRef}
      className="relative w-full min-h-screen flex flex-col bg-black text-white"
    >
      <div className="page-accents pointer-events-none fixed inset-0 z-10">
        <div className="hero-arrow hero-arrow-tl rotate-90 origin-center">
          <ArrowAccent />
        </div>
        <div className="hero-arrow hero-arrow-tr rotate-180 origin-center">
          <ArrowAccent />
        </div>
        <div className="hero-arrow hero-arrow-bl origin-center">
          <ArrowAccent />
        </div>
        <div className="hero-arrow hero-arrow-br -rotate-90 origin-center">
          <ArrowAccent />
        </div>
      </div>

      {/* hero section */}
      <section className="relative z-20 w-screen h-screen px-5 py-10 lg:p-10 overflow-hidden">
        <div className="w-full max-w-7xl h-full mx-auto relative flex items-end justify-center">
          <div className="flex flex-col justify-center w-full h-full">
            <div className="w-1/2 lg:w-1/4 flex items-center gap-4">
              <div className="hero-line h-1 bg-orange-500"></div>
              <p className="hero-year lg:text-2xl">2026</p>
            </div>
            <h1 className="hero-title text-6xl lg:text-9xl text-white font-bold">
              PORTFOLIO
            </h1>
            <p className="hero-name lg:text-3xl">M.FADILLAH RASYID</p>
          </div>
          <button
            type="button"
            onClick={scrollToNextSection}
            aria-label="Scroll to about section"
            className="scroll-cue-button w-10 h-15 absolute bg-white/20 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-white/30"
          >
            <div className="scroll-cue-wheel w-5 h-7.5 bg-white rounded-full"></div>
          </button>
        </div>
      </section>

      {/* section about */}
      <section
        ref={aboutSectionRef}
        className="relative z-20 w-screen px-5 py-10 lg:p-10"
      >
        <div
          ref={aboutPanelRef}
          className="parallax-panel reveal-on-scroll w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-6 lg:p-10 backdrop-blur-md"
          data-reveal
          style={getRevealStyle(0)}
        >
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div
              className="reveal-on-scroll w-full lg:w-1/3 flex items-center gap-4"
              data-reveal
              style={getRevealStyle(120)}
            >
              <div className="flex-1 h-1 bg-orange-500"></div>
              <h2 className={sectionHeadingClass}>ABOUT</h2>
            </div>

            <div
              className="reveal-on-scroll space-y-4"
              data-reveal
              style={getRevealStyle(220)}
            >
              <p className="text-white/75 text-base lg:text-lg leading-relaxed w-full">
                I am an Informatics graduate from Gunadarma University with a
                strong passion for technology and digital innovation. My
                professional journey began with a deep interest in design, where
                I actively worked as a freelance UI/UX designer, helping
                translate ideas into intuitive and engaging user experiences.
                <br /> To further strengthen my technical capabilities, I
                enrolled in a full-stack development bootcamp, which marked a
                turning point in my career. Since then, I have been fully
                focused on software development, building both web and mobile
                applications with a problem-solving mindset and attention to
                detail.
                <br /> Currently, I have over two years of experience as a
                software engineer, continuously improving my skills and adapting
                to evolving technologies. I am also the founder of Nexura
                Studio, a digital development initiative established in 2024,
                where I lead projects and collaborate with clients. To date,
                Nexura Studio has successfully handled multiple clients,
                delivering impactful and reliable digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section tech stack */}
      <section className="relative z-20 w-screen px-5 py-10 lg:p-10">
        <div
          ref={stackPanelRef}
          className="parallax-panel reveal-on-scroll w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-6 lg:p-10 backdrop-blur-md"
          data-reveal
          style={getRevealStyle(0)}
        >
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div
              className="reveal-on-scroll w-full lg:w-1/3 flex items-center gap-4"
              data-reveal
              style={getRevealStyle(120)}
            >
              <div className="flex-1 h-1 bg-orange-500"></div>
              <h2 className={sectionHeadingClass}>TECH STACK</h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-4">
              {techStackCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="tech-card reveal-on-scroll rounded-2xl border border-white/20 bg-black/40 p-5 lg:p-6 relative overflow-hidden"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${220 + index * 80}ms`,
                    } as React.CSSProperties
                  }
                >
                  <p className="text-white/60 text-sm tracking-[0.14em]">
                    {category.title}
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.items.map(({ name, icon: Icon }) => (
                      <div
                        key={`${category.title}-${name}`}
                        className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/3 px-3 py-2"
                      >
                        <Icon
                          className="text-lg text-orange-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm lg:text-base text-white/90">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section experience */}
      <section className="relative z-20 w-screen px-5 py-10 lg:p-10">
        <div
          ref={experiencePanelRef}
          className="parallax-panel reveal-on-scroll w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-6 lg:p-10 backdrop-blur-md"
          data-reveal
          style={getRevealStyle(0)}
        >
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div
              className="reveal-on-scroll w-full lg:w-1/3 flex items-center gap-4"
              data-reveal
              style={getRevealStyle(120)}
            >
              <div className="flex-1 h-1 bg-orange-500"></div>
              <h2 className={sectionHeadingClass}>EXPERIENCE</h2>
            </div>

            <div className="flex flex-col gap-4">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${index}`}
                  className="experience-card reveal-on-scroll rounded-2xl border border-white/20 bg-black/40 p-5 lg:p-6 flex flex-col gap-3 relative overflow-hidden"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${220 + index * 80}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex flex-col gap-4 lg:pr-52">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-white/90 p-1.5">
                        <Image
                          src={exp.logo}
                          alt={exp.logoAlt}
                          className="h-full w-full object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-white font-semibold text-base lg:text-lg">
                          {exp.company}
                        </p>
                        <p className="text-orange-400 text-sm lg:text-base">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 lg:hidden">
                      <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
                        {exp.type}
                      </span>
                      <p className="text-white/50 text-sm whitespace-nowrap">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm lg:text-base text-white/75 list-disc pl-5">
                      {exp.highlights.map((item, itemIndex) => (
                        <li key={`${exp.company}-highlight-${itemIndex}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:flex lg:flex-col lg:items-end gap-2 absolute top-6 right-6">
                    <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
                      {exp.type}
                    </span>
                    <p className="text-white/50 text-sm whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section project */}
      <section className="relative z-20 w-screen px-5 py-10 lg:p-10">
        <div
          ref={projectPanelRef}
          className="parallax-panel reveal-on-scroll w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-6 lg:p-10 backdrop-blur-md"
          data-reveal
          style={getRevealStyle(0)}
        >
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div
              className="reveal-on-scroll w-full lg:w-1/3 flex items-center gap-4"
              data-reveal
              style={getRevealStyle(120)}
            >
              <div className="flex-1 h-1 bg-orange-500"></div>
              <h2 className={sectionHeadingClass}>PORTFOLIO PROJECT</h2>
            </div>

            <div className="project-showcase w-full grid items-start lg:grid-cols-[1.05fr_0.95fr] gap-5 lg:gap-8">
              <article
                ref={projectVisualCardRef}
                className="project-visual-card reveal-on-scroll rounded-2xl border border-white/20 bg-black/55 p-5 lg:p-6 flex flex-col"
                data-reveal
                style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
              >
                <p className="text-orange-400 text-xs lg:text-sm tracking-[0.14em] uppercase">
                  {activeProject.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl lg:text-4xl leading-tight text-white/90 font-semibold">
                  {activeProject.title}{" "}
                  <span className="text-orange-400">
                    {activeProject.highlight}
                  </span>
                </h3>
                <p className="project-summary-clamp mt-3 text-white/60 text-sm lg:text-base leading-relaxed max-w-2xl min-h-14 lg:min-h-16">
                  {activeProject.summary}
                </p>

                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-image-frame mt-5 rounded-xl border border-white/15 bg-white/5 p-3 lg:p-4">
                    <div className="project-image-stage relative w-full overflow-hidden rounded-lg bg-white">
                      <Image
                        key={activeProject.id}
                        src={activeProject.imageSrc}
                        alt={activeProject.imageAlt}
                        width={1200}
                        height={720}
                        className="project-image-visual w-full h-56 sm:h-64 lg:h-72 object-contain"
                      />
                    </div>
                  </div>
                </a>
              </article>

              <div
                className="project-list-wrap reveal-on-scroll rounded-2xl border border-white/20 bg-black/45 p-3 lg:p-4"
                data-reveal
                style={
                  {
                    "--reveal-delay": "260ms",
                    "--project-panel-height": `${projectVisualCardHeight}px`,
                  } as React.CSSProperties
                }
              >
                <div className="project-list-scroll flex flex-col">
                  {portfolioProjects.map((project, projectIndex) => {
                    const isActive = projectIndex === activeProjectIndex;

                    return (
                      <button
                        key={`${project.id}-${projectIndex}`}
                        type="button"
                        onClick={() => setActiveProjectIndex(projectIndex)}
                        aria-pressed={isActive}
                        className={`project-switch group w-full flex items-center justify-between gap-4 px-4 py-4 text-left border-b border-white/10 last:border-b-0 transition-colors duration-300 ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <p
                            className={`project-switch-title-clamp text-lg lg:text-2xl font-semibold leading-tight tracking-tight transition-colors duration-300 ${
                              isActive ? "text-orange-400" : "text-white/85"
                            }`}
                          >
                            {project.title}
                          </p>
                          <p className="project-switch-description-clamp mt-1 text-xs lg:text-sm text-white/45">
                            {project.summary}
                          </p>
                        </div>
                        <FiArrowUpRight
                          className={`shrink-0 text-xl transition-transform duration-300 ${
                            isActive
                              ? "text-orange-400 translate-x-0"
                              : "text-white/50 group-hover:translate-x-1"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section contact */}
      <section className="relative z-20 w-screen px-5 py-10 lg:p-10 pb-28 lg:pb-28">
        <div
          ref={contactPanelRef}
          className="parallax-panel reveal-on-scroll w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-6 lg:p-10 backdrop-blur-md"
          data-reveal
          style={getRevealStyle(0)}
        >
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div
              className="reveal-on-scroll w-full lg:w-1/3 flex items-center gap-4"
              data-reveal
              style={getRevealStyle(120)}
            >
              <div className="flex-1 h-1 bg-orange-500"></div>
              <h2 className={sectionHeadingClass}>CONTACT</h2>
            </div>
          </div>

          <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 lg:gap-8">
            {/* contact form */}
            <div className="contact-form order-2 lg:order-1 rounded-xl border border-white/20 bg-black/40 p-5 lg:p-6 relative overflow-hidden">
              <form
                action="https://formspree.io/f/mnqylzvd"
                method="POST"
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm text-white/70 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-white/70 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-white/70 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="self-start mt-2 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* social media info */}
            <div className="order-1 lg:order-2 rounded-xl border border-white/20 bg-black/40 p-5 lg:p-6">
              <p className="text-white text-lg font-semibold tracking-wide">
                Reach Me Directly
              </p>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                You can also connect with me through social media channels
                below.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-fadillah-rasyid/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-white/20 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-orange-400 hover:bg-orange-500/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-white group-hover:text-orange-300 transition-colors duration-300">
                    M.Fadillah Rasyid
                  </p>
                </a>

                <a
                  href="https://www.instagram.com/fadillrsyd"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-white/20 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-orange-400 hover:bg-orange-500/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Instagram
                  </p>
                  <p className="mt-1 text-white group-hover:text-orange-300 transition-colors duration-300">
                    fadillrsyd
                  </p>
                </a>

                <a
                  href="mailto:hello@example.com"
                  className="group rounded-lg border border-white/20 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-orange-400 hover:bg-orange-500/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Email
                  </p>
                  <p className="mt-1 text-white group-hover:text-orange-300 transition-colors duration-300">
                    rasyid08mufara@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
