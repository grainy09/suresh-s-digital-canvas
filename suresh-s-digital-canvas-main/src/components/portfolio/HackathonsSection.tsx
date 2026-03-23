import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Users, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "International Hackathon",
    desc: "Participated in international-level hackathons, competing with top developers and presenting innovative AI solutions.",
    date: "2025",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    desc: "Led cross-functional teams in building full-stack applications under tight deadlines with quality deliverables.",
    date: "2024 – Present",
  },
  {
    icon: Rocket,
    title: "Project Innovation",
    desc: "Developed multiple award-worthy projects including NeuroAid and AgriPredict, pushing the boundaries of AI applications.",
    date: "2025 – Present",
  },
];

const HackathonsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Hackathons & <span className="text-gradient-primary">Milestones</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {achievements.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex gap-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 items-center justify-center shrink-0 z-10">
                    <item.icon size={20} className="text-primary" />
                  </div>

                  <div className="flex-1 p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="md:hidden w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-xs font-mono text-primary">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
