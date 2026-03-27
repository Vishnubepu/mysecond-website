import { Heart, BookOpen, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <BookOpen className="w-5 h-5 text-primary" />
              <Shield className="w-3 h-3 text-accent absolute -bottom-0.5 -right-0.5" />
            </div>
            <span className="font-semibold gradient-text">Portfolio</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for education & security
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
