import { ArrowDown, FileText, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Vishnu Prasad</span>
          </h1>

          {/* Title with Typewriter */}
          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6 animate-fade-up delay-200">
            <TypewriterText
              texts={[
                'Social Science Educator',
                'Cybersecurity Researcher',
                'Bug Bounty Hunter',
                
              ]}
              className="text-foreground"
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up delay-300">
            Bridging <span className="text-primary">Society</span>, <span className="text-foreground">Technology</span> & <span className="text-accent">Digital Safety</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up delay-400">
            <Button variant="hero" size="lg">
              <span>View My Projects</span>
              <ArrowDown className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up delay-500">
            <a
              href="https://github.com/Vishnubepu"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-prasad-k-156aa224a/"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
