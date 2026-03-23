import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

// Import your certificate PDFs
import cipher from "@/assets/certificates/cipharschool certificate.pdf";
import cloud from "@/assets/certificates/Cloud Computing.pdf";
import communication from "@/assets/certificates/Computer communications certificate.pdf";
import freecodecamp from "@/assets/certificates/freecodecamp certificate.pdf";
import sql from "@/assets/certificates/gfg SQL certificate.pdf";
import mongodb from "@/assets/certificates/mongodb gfg certificate.pdf";
import oracle from "@/assets/certificates/Oracle Gen AI eCertificate.pdf";

const certs = [
  {
    title: "Data Structures & Algorithms",
    issuer: "CipherSchools",
    area: "DSA",
    link: cipher,
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    area: "Cloud",
    link: cloud,
  },
  {
    title: "Computer Communications",
    issuer: "Coursera",
    area: "Networking",
    link: communication,
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    area: "Web",
    link: freecodecamp,
  },
  {
    title: "SQL Skill Up",
    issuer: "GeeksforGeeks",
    area: "Database",
    link: sql,
  },
  {
    title: "MongoDB Developer Toolkit",
    issuer: "GeeksforGeeks",
    area: "Database",
    link: mongodb,
  },
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    area: "AI",
    link: oracle,
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            Certifications
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Learning & <span className="text-gradient-primary">Growth</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`group p-5 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award size={18} className="text-primary" />
                  </div>

                  <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>

                  <p className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>

                  <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-mono bg-secondary text-muted-foreground">
                    {cert.area}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;