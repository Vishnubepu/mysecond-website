import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '/class-gallery', label: 'Gallery', isPage: true },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  const handleNavClick = (href: string, isPage?: boolean) => {
    setIsOpen(false);
    if (isPage) {
      navigate(href);
      return;
    }

    if (href.startsWith('#')) {
      const hash = href;

      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash });
        return;
      }

      // Update the URL hash (so refresh/share keeps the section)
      navigate({ hash }, { replace: true });
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When we navigate to /#section from another page, ensure we scroll after mount.
  useEffect(() => {
    if (location.pathname !== '/') return;
    if (!location.hash) return;

    const el = document.querySelector(location.hash);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname, location.hash]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isPage)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group bg-transparent border-none cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
            <a href="https://drive.google.com/drive/folders/14bz2lA7YLAq6cM2J9CN-NE201EPCJWf9?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-up">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isPage)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a href="https://drive.google.com/drive/folders/14bz2lA7YLAq6cM2J9CN-NE201EPCJWf9?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-fit">
                <Button variant="hero" size="sm">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
