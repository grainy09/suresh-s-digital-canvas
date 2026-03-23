import { Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border/50">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-foreground font-medium">Suresh Bishnoi</span>. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        <a href="https://github.com/SURESHBISHNOI09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/sureshbishnoi09/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="https://leetcode.com/u/sureshh09/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Code2 size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
