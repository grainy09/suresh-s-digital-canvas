import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Technologies",
    skills: ["Node.js", "Git", "GitHub", "REST APIs", "Excel Analytics"],
  },
  {
    title: "AI / Data",
    skills: ["OpenAI API", "Chatbot Dev", "Data Visualization", "Machine Learning"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Tech <span className="text-gradient-primary">Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => (
              <div
                key={cat.title}
                className={`p-6 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${ci * 150 + 200}ms` }}
              >
                <h3 className="font-semibold text-sm text-primary mb-5 font-mono uppercase tracking-wider">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
