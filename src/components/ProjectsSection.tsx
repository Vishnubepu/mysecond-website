import { useState } from 'react';
import { BookOpen, Shield, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'education' | 'cybersecurity';

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  image?: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
 
  {
    id: '1',
    title: 'A Study of Solid Waste Generation and Management in Bedadka Grama Panchayat',
    category: 'education',
    description: 'Conducted a field-based study analyzing solid waste generation and management practices in a local panchayat. Collected primary data through surveys and observations, evaluated environmental impacts, and proposed sustainable waste management solutions.',
    problem: 'Inefficient solid waste management in Bedadka Grama Panchayat leading to improper waste disposal, environmental pollution, and lack of public awareness about sustainable waste practices.',
    approach: 'Adopted a field-based research approach by collecting primary data through surveys, observations, and interactions with residents. Analyzed waste generation patterns and existing management practices, and evaluated environmental impacts to suggest practical and sustainable solutions.',
    tools: ['Field surveys, questionnaires, observation methods, Microsoft Excel for data analysis, QGIS/Google Earth for mapping, and basic statistical techniques.'],
    outcome: 'Identified key issues in waste management practices and proposed practical, sustainable solutions to improve waste segregation, disposal, and public awareness. Enhanced understanding of environmental impacts and strengthened research and analytical skills.',
    image: 'https://plus.unsplash.com/premium_photo-1663076452996-abef3ccfc4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww',
    github: 'https://github.com',
  },
  
  {
    id: '2',
    title: 'secure-scan-hub',
    category: 'cybersecurity',
    description: 'A tool to scan websites for vulnerabilities and security threats.',
    problem: 'Websites are vulnerable to hidden security threats and attacks.',
    approach: 'Developed a security-focused system that analyzes URLs, scans for vulnerabilities, and evaluates risk factors using automated tools and techniques.',
    tools: ['Kali Linux, Nmap, Nuclei, OWASP ZAP, Python (basic), and web security techniques.'],
    outcome: 'Built a functional security scanning platform that enhances threat detection, improves user awareness, and strengthens practical knowledge in cybersecurity.',
     image: 'https://images.unsplash.com/photo-1751448555253-f39c06e29d82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VjdXJlJTIwU2NhbiUyMEh1YnxlbnwwfHwwfHx8MA%3D%3D',
    github: 'https://github.com/Vishnubepu/secure-scan-hub.git',
  },
  {
    id: '3',
    title: 'phish-guard-ai',
    category: 'cybersecurity',
    description: 'AI tool to detect phishing URLs in real time.',
    problem: 'Users fall victim to phishing attacks online.',
    approach: 'Analyzed URL features using machine learning.',
    tools: ['Python, Machine Learning, URL analysis.'],
    outcome: 'Improved detection of phishing threats and user safety.',
    image: 'https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpc2hpbmd8ZW58MHx8MHx8fDA%3D',
    github: 'https://github.com/Vishnubepu/phish-guard-ai.git',
  },
  {
    id: '4',
    title: 'SubDomainScout',
    category: 'cybersecurity',
    description: 'A tool to discover and scan subdomains of websites.',
    problem: 'Hidden subdomains can expose security vulnerabilities.',
    approach: 'Automated subdomain enumeration and scanning.',
    tools: ['Python, Nmap, Subdomain tools.'],
    outcome: 'Improved detection of hidden assets and security risks.',
    image: 'https://media.istockphoto.com/id/2195176937/photo/subdomain.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yViyShkQldW7BsdOp51DZ5GiCz1dY5wWCYnTGTZbg0=',
    github: 'https://github.com/Vishnubepu/SubDomainScout.git',
  },
];

const upcomingProjects = [
  {
    id: 'u1',
    title: ' Vulnerability Scanner (Python)',
    description: 'A lightweight Python tool that scans websites for basic security issues. It checks for missing HTTP security headers, performs simple directory fuzzing using a wordlist, and helps identify common misconfigurations. Ideal for learning and basic web assessments.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1583695477819-357b45d15825?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VnVsbmVyYWJpbGl0eSUyMFNjYW5uZXIlMjAoUHl0aG9uKXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'u2',
    title: 'Manual GPS Tracking System',
    description: 'A low-cost GPS-based tracking system that works with manual activation to monitor location without continuous internet usage.',
    status: 'Planning',
    image: 'https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3BzfGVufDB8fDB8fHww',
  },
  {
    id: 'u3',
    title: 'Optical Transistor',
    description: 'An optical transistor (phototransistor) is a semiconductor device that uses light instead of electrical current to control its operation.',
    status: 'Design',
    image: 'https://images.unsplash.com/photo-1611759386165-ed9beec7b14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3B0aWNhbCUyMFRyYW5zaXN0b3J8ZW58MHx8MHx8fDA%3D',
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all group">
    {/* Project Image */}
    {project.image && (
      <div className="w-full h-48 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${project.category === 'education' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
          {project.category === 'education' ? <BookOpen className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              title="View Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

      <div className="space-y-3 text-sm">
        <div>
          <span className="font-medium text-primary">Problem:</span>
          <p className="text-muted-foreground mt-1">{project.problem}</p>
        </div>
        <div>
          <span className="font-medium text-primary">Approach:</span>
          <p className="text-muted-foreground mt-1">{project.approach}</p>
        </div>
        <div>
          <span className="font-medium text-primary">Outcome:</span>
          <p className="text-muted-foreground mt-1">{project.outcome}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-heading">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              A showcase of educational innovations and security research
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl glass-card">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'education'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Education
              </button>
              <button
                onClick={() => setActiveTab('cybersecurity')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'cybersecurity'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Shield className="w-4 h-4" />
                Cybersecurity
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Upcoming Projects */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                Upcoming <span className="gradient-text">Projects</span>
              </h3>
              <p className="text-muted-foreground">What I’m building next in education and security.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingProjects.map((project) => (
                <div key={project.id} className="glass-card rounded-2xl p-5 hover:border-accent/50 transition-all">
                  <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <p className="text-xs text-primary font-medium">Status: {project.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
