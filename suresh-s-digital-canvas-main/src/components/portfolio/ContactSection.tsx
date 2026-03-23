import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's build something{" "}
              <span className="text-gradient-primary">amazing</span> together.
            </h2>
            <p className="text-muted-foreground">
              Whether you have a project idea, a collaboration opportunity, or just want to say hi — I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-glow hover:shadow-[0_0_80px_hsl(250_90%_65%/0.25)] transition-all duration-300 hover:scale-[1.02]"
              >
                <Send size={16} /> Send Message
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-10">
              <a href="mailto:sureshkm029@gmail.com" className="p-3 rounded-xl glass hover:bg-primary/10 transition-all" title="Email">
                <Mail size={18} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/SURESHBISHNOI09" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:bg-primary/10 transition-all" title="GitHub">
                <Github size={18} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/sureshbishnoi09/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:bg-primary/10 transition-all" title="LinkedIn">
                <Linkedin size={18} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
