import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Copyright */}
      <p className="text-sm text-muted-foreground">
        Copyright © 2026 Christian Dave. All rights reserved, view the source code on <a href="https://github.com/iamSKRT" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>.
      </p>
     

      {/* Social Icons */}
      <div className="flex items-center gap-4">

        {/* GitHub */}
        <a
          href="https://github.com/iamSKRT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#c8ced8] transition-colors"
        >
          <Github size={18} />
        </a>

          {/* LinkedIn */}
           <a
          href="https://www.linkedin.com/in/christian-dave-alvarez-0750933a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
        >
          <Linkedin size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/iam_chrstndv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#E1306C] transition-colors"
        >
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
