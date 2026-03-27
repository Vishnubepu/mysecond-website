import { BookOpen, Shield, Code, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

const teachingSkills: Skill[] = [
  { name: 'Lesson Planning & Curriculum Design', level: 95 },
  { name: 'Pedagogy & Assessment Strategies', level: 92 },
  { name: 'Classroom Management', level: 93 },
  { name: 'Student Engagement & Activity-Based Learning', level: 94 },
  { name: 'Social Science Subject Expertise', level: 96 },
  { name: 'Teaching Aids & Visual Learning', level: 90 },
  { name: 'Child Psychology & Inclusive Education', level: 88 },
  { name: 'Communication & Presentation Skills', level: 91 },
  { name: 'Critical Thinking & Problem Solving', level: 89 },
  { name: 'Research & Field Study Skills', level: 87 },
  { name: 'Interactive Learning Techniques', level: 93 },
  { name: 'Time Management', level: 90 },
  { name: 'Student Assessment & Evaluation', level: 92 },
  { name: 'Creative Teaching Methods', level: 94 },
  { name: 'Educational Technology Integration', level: 89 },
  { name: 'Group Facilitation & Collaboration', level: 91 },
  { name: 'Micro-Teaching & Demonstration Skills', level: 88 },
  { name: 'Real-Life Concept Application', level: 93 },
  { name: 'Curriculum Adaptation & Differentiation', level: 87 },
  { name: 'Leadership & Classroom Guidance', level: 90 }
  
  
];

const cyberSkills: Skill[] = [
  { name: 'Web Application Security', level: 88 },
  { name: 'Burp Suite & Testing Tools', level: 85 },
  { name: 'Kali Linux & Nuclei', level: 82 },
  { name: 'Bug Bounty Research', level: 80 },
  { name: 'Ethical Hacking', level: 78 },
  { name: 'Ethical Hacking Fundamentals', level: 90 },
  { name: 'Network Security', level: 88 },
  { name: 'Web Application Security', level: 87 },
  { name: 'Vulnerability Assessment', level: 89 },
  { name: 'Penetration Testing (Basic)', level: 85 },
  { name: 'Phishing Detection & Analysis', level: 92 },
  { name: 'Malware Analysis (Basic)', level: 82 },
  { name: 'Cryptography Basics', level: 84 },
  { name: 'Security Risk Assessment', level: 88 },
  { name: 'Digital Forensics (Basic)', level: 80 },
  { name: 'Firewall & Network Defense', level: 86 },
  { name: 'Secure Coding Practices', level: 85 },
  { name: 'OWASP Top 10 Awareness', level: 90 },
  { name: 'Linux Security Fundamentals', level: 87 },
  { name: 'AI in Cybersecurity', level: 89 },
  { name: 'Threat Intelligence Basics', level: 83 },
  { name: 'Incident Response (Basic)', level: 84 },
  { name: 'Cloud Security Fundamentals', level: 82 },
  { name: 'Data Privacy & Protection', level: 88 },
  { name: 'Security Tools (Wireshark, Nmap)', level: 91 }
];

const tools = [
  { name: 'Burp Suite', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Kali Linux', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Nuclei', icon: <Code className="w-4 h-4" /> },
  { name: 'OWASP ZAP', icon: <Shield className="w-4 h-4" /> },
  { name: 'Nmap', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Canva', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Google Workspace', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Smart Class Tools', icon: <BookOpen className="w-4 h-4" /> },
  
];

const SkillBar = ({ skill, variant }: { skill: Skill; variant: 'primary' | 'accent' }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${
          variant === 'primary' ? 'bg-primary' : 'bg-accent'
        }`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading mx-auto">
              A unique blend of educational expertise and technical security knowledge
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Teaching Skills */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Teaching & Social Science</h3>
                  <p className="text-sm text-muted-foreground">Education expertise</p>
                </div>
              </div>
              <div className="space-y-5">
                {teachingSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} variant="primary" />
                ))}
              </div>
            </div>

            {/* Cybersecurity Skills */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cybersecurity</h3>
                  <p className="text-sm text-muted-foreground">Security research</p>
                </div>
              </div>
              <div className="space-y-5">
                {cyberSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} variant="accent" />
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies - Marquee */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">Tools & Technologies</h3>
            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {/* First set */}
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover:bg-primary/10 transition-colors mx-2 shrink-0"
                  >
                    {tool.icon}
                    <span className="text-sm whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {tools.map((tool) => (
                  <div
                    key={`${tool.name}-dup`}
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover:bg-primary/10 transition-colors mx-2 shrink-0"
                  >
                    {tool.icon}
                    <span className="text-sm whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
