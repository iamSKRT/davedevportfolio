import { Github, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Christian Dave. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
         
                <a
                  href="https://www.linkedin.com/in/christian-dave-alvarez-0750933a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] transition-all duration-300 border border-border"
                >
                  <Linkedin size={18} />

                  
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
