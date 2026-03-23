import { useEffect, useState } from "react";
import { Github, Linkedin, Code2, Award, ExternalLink, Download, Eye } from "lucide-react";

import profile from "@/assets/certificates/profile.png";
import resume from "@/assets/certificates/resume.pdf";

const phrases = [
  "I build AI tools & intelligent systems.",
  "I craft dashboards & scalable solutions.",
  "I turn ideas into impactful software.",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/SURESHBISHNOI09", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sureshbishnoi09/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/sureshh09/", label: "LeetCode" },
  { icon: Award, href: "https://www.codechef.com/users/suresh029", label: "CodeChef" },
  { icon: ExternalLink, href: "https://www.hackerrank.com/profile/sureshkm029", label: "HackerRank" },
];

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 50);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 30);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-8">
          <img
            src={profile}
            alt="Suresh Bishnoi"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-[0_0_40px_hsl(250_90%_65%/0.3)] hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* NAME */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          Hi, I'm{" "}
          <span className="text-gradient-primary">Suresh</span>
          <br />
          <span className="text-gradient-accent">Bishnoi</span>
        </h1>

        {/* ROLE */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto">
          Computer Science Student · AI Developer · Hackathon Participant
        </p>

        {/* TYPING TEXT */}
        <div className="h-8 mb-10 flex items-center justify-center">
          <span className="font-mono text-sm sm:text-base text-foreground/80">
            {displayText}
            <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-pulse" />
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-all"
          >
            View Projects
          </a>

          {/* VIEW RESUME */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-foreground font-medium hover:scale-105 transition-all"
          >
            <Eye size={16} />
            View Resume
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-foreground font-medium hover:scale-105 transition-all"
          >
            <Download size={16} />
            Download Resume
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <s.icon
                size={18}
                className="text-muted-foreground group-hover:text-primary"
              />
            </a>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;