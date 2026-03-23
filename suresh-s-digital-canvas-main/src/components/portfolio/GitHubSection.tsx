import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Star, GitFork, Code2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Repositories", value: "20+" },
  { icon: Star, label: "Stars", value: "50+" },
  { icon: GitFork, label: "Contributions", value: "200+" },
];

const languages = [
  { name: "Python", pct: 40, color: "hsl(210 70% 55%)" },
  { name: "JavaScript", pct: 25, color: "hsl(50 90% 55%)" },
  { name: "C++", pct: 20, color: "hsl(340 70% 55%)" },
  { name: "Java", pct: 15, color: "hsl(20 80% 55%)" },
];

const GitHubSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="github" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">GitHub</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Open Source <span className="text-gradient-primary">Activity</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 rounded-2xl bg-gradient-card border border-border/50 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-card-hover ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <s.icon size={24} className="text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Contribution graph placeholder */}
          <div className={`p-6 rounded-2xl bg-gradient-card border border-border/50 mb-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "500ms" }}>
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Contribution Graph</h3>
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const intensity = Math.random();
                let bg = "bg-secondary";
                if (intensity > 0.8) bg = "bg-primary";
                else if (intensity > 0.6) bg = "bg-primary/60";
                else if (intensity > 0.4) bg = "bg-primary/30";
                else if (intensity > 0.25) bg = "bg-primary/15";
                return (
                  <div
                    key={i}
                    className={`w-[10px] h-[10px] rounded-[2px] ${bg} transition-colors hover:ring-1 hover:ring-primary/50`}
                  />
                );
              })}
            </div>
          </div>

          {/* Top Languages */}
          <div className={`p-6 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "600ms" }}>
            <h3 className="text-sm font-semibold mb-5 text-muted-foreground">Top Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${lang.pct}%` : "0%",
                        background: lang.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/SURESHBISHNOI09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github size={16} /> View Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
