import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Database, Server, Lightbulb } from "lucide-react";

const interests = [
  { icon: Brain, label: "Artificial Intelligence", desc: "Building intelligent systems with modern AI" },
  { icon: Database, label: "Data Science", desc: "Extracting insights from complex datasets" },
  { icon: Server, label: "Backend Development", desc: "Scalable APIs and microservices" },
  { icon: Lightbulb, label: "Impactful Projects", desc: "Technology that solves real problems" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Passionate about building the{" "}
            <span className="text-gradient-primary">future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-16">
            I'm <span className="text-foreground font-medium">Suresh Bishnoi</span>, a Computer Science student at{" "}
            <span className="text-foreground font-medium">Lovely Professional University</span>.
            I love turning complex problems into elegant software — from AI-powered tools to
            full-stack dashboards. Every project I build is driven by curiosity and a desire to make technology accessible.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((item, i) => (
              <div
                key={item.label}
                className={`group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
