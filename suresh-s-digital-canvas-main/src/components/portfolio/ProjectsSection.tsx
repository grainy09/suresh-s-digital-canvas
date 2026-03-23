import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "NeuroAid",
    desc: "AI-powered neurological health assessment platform using deep learning for early diagnosis and patient support.",
    tech: ["Python", "AI/ML", "TensorFlow", "Flask"],
    live: "https://neuro-aid.netlify.app/",
    github: "https://github.com/SURESHBISHNOI09",
    categories: ["AI Projects"],
  },
  {
    name: "AgriPredict",
    desc: "Smart agriculture system predicting crop yield and pest outbreaks using machine learning and weather data.",
    tech: ["Python", "ML", "Data Science", "React"],
    live: "https://agripredict-crop-yield-pest.netlify.app/",
    github: "https://github.com/SURESHBISHNOI09",
    categories: ["AI Projects", "Data Projects"],
  },
  {
    name: "Sign2Speech",
    desc: "Real-time sign language to speech converter using computer vision and deep learning models.",
    tech: ["Python", "OpenCV", "Deep Learning", "JavaScript"],
    live: "https://sign2speechh.netlify.app/",
    github: "https://github.com/SURESHBISHNOI09",
    categories: ["AI Projects", "Web Projects"],
  },
  {
    name: "QuietEcho",
    desc: "A calming mental health journaling and mood tracking application with AI-driven insights.",
    tech: ["React", "Node.js", "AI", "Tailwind CSS"],
    live: "https://quietecho.netlify.app/",
    github: "https://github.com/SURESHBISHNOI09",
    categories: ["Web Projects", "AI Projects"],
  },
];

const filters = ["All", "AI Projects", "Web Projects", "Data Projects"];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            A selection of projects showcasing AI, data science, and full-stack development.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary border border-border/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.name}
                className={`group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-glow)" }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-gradient-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github size={16} className="text-muted-foreground hover:text-foreground" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLink size={16} className="text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary text-muted-foreground border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-medium"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
