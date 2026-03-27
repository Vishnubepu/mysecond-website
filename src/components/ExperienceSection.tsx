import { Briefcase, GraduationCap, Shield } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  track: 'education' | 'security';
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'Teaching Practice (B.Ed Training)',
    organization: 'GVHSS , IRIYANNI',
    period: '11/07/2025-22/10/2025',
    description: 'Teaching social sciences with a focus on digital citizenship and civic engagement.',
    track: 'education',
    highlights: [
      'Prepared daily lesson plans under mentor supervision based on curriculum requirements',
      'Delivered Social Science lessons using charts, maps, and real-life examples',
      'Conducted classroom activities, discussions, and group-based learning sessions',
      'Assisted in student assessment, evaluation, and constructive feedback',
      'Observed classroom management strategies and student behavior',
      'Participated in school functions and academic activities',  
    ],
  },
  {
    title: 'Bug Bounty Researcher',
    organization: 'Independent / HackerOne',
    period: '2022 – Present',
    description: 'Identifying and responsibly disclosing security vulnerabilities in web applications.',
    track: 'security',
    highlights: [
      'Reported 20+ validated vulnerabilities',
      'Specializing in OWASP Top 10 issues',
      'Recognized by multiple organizations',
    ],
  },
  {
    title: '  vijnjanolsavam',
    organization: 'Panchayat Level- ',
    period: '2020 – 2021',
    description: 'Conducted workshops at the Panchayat level as part of Vijnanolsavam',
    track: 'education',
    highlights: [
      'Trained 30+ participants ',
      'Conducted a lesson on the Preamble of the Indian Constitution to promote civic awaren',
      
    ],
  },
  
];

const trackConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    dot: 'bg-primary',
  },
  security: {
    icon: Shield,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    dot: 'bg-accent',
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subheading mx-auto">
              A timeline of my journey across education and cybersecurity
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const config = trackConfig[exp.track];
                const Icon = config.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot on timeline */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full border-2 border-background z-10 -translate-x-1/2 mt-6"
                      style={{ background: `hsl(var(--${exp.track === 'education' ? 'primary' : 'accent'}))` }}
                    />

                    {/* Spacer for mobile */}
                    <div className="w-12 shrink-0 md:hidden" />

                    {/* Card */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`glass-card rounded-2xl p-6 border ${config.border} hover:border-opacity-100 transition-all`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${config.bg}`}>
                            <Icon className={`w-4 h-4 ${config.color}`} />
                          </div>
                          <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                        </div>

                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                        <p className={`text-sm font-medium ${config.color} mb-2`}>{exp.organization}</p>
                        <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                        <ul className="space-y-1.5">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${config.dot} mt-1.5 shrink-0`} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Empty spacer for the other side on desktop */}
                    <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
