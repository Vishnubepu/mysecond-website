import { Award, Medal, FileCheck, Trophy, Star, Calendar, FolderOpen } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'certificate' | 'award' | 'recognition';
  description?: string;
  image?: string;
  googleDriveLink?: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'AI for Teachers',
    organization: 'EduMOOCs.in',
    date: '2024',
    type: 'certificate',
    description: 'Completed a 40-hour self-paced add-on course on AI for Teachers, covering AI applications in education, digital pedagogy, and modern teaching methodologies. Achieved Grade A.',
    googleDriveLink: 'https://drive.google.com/file/d/1Ek1yLLCt2TULk0_pWdH5frEgXCazRYpD/view',
  },
  
  {
    id: '3',
    title: 'Cybersecurity Analyst Job Simulation',
    organization: 'Forage (Tata Group Program)',
    date: 'April 2025',
    type: 'certificate',
    description: 'Completed a Cybersecurity Analyst job simulation program by Tata via Forage, gaining hands-on experience in Identity and Access Management (IAM), IAM strategy assessment, developing custom IAM solutions, and platform integration.',
    googleDriveLink: 'https://drive.google.com/file/d/1RhT3aLC6M9bOJJ2aHjALO3jYTH7POvIJ/view?usp=drive_link',
  },
  {
    id: '4',
    title: 'Cybersecurity Foundation Course | Pre-work | SkillUp 2024',
    organization: 'IBM SkillsBuild',
    date: 'April 2025',
    type: 'certificate',
    description: 'Completed IBM SkillsBuild Cybersecurity Foundation Course covering core concepts such as cybersecurity principles, threat landscape, risk management, and foundational security practices.',
    googleDriveLink: 'https://drive.google.com/file/d/16cijaNLYNBVmhPhkeUBbu2xU043OkgKn/view?usp=sharing',
  },
  
];

const getIcon = (type: Achievement['type']) => {
  switch (type) {
    case 'certificate':
      return <FileCheck className="w-5 h-5" />;
    case 'award':
      return <Trophy className="w-5 h-5" />;
    case 'recognition':
      return <Star className="w-5 h-5" />;
  }
};

const getTypeColor = (type: Achievement['type']) => {
  switch (type) {
    case 'certificate':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'award':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'recognition':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
  }
};

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
  <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group">
    <div className="flex items-start gap-4">
      {/* Certificate/Achievement Photo Slot */}
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border/50">
        {achievement.image ? (
          <img
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center ${getTypeColor(
              achievement.type
            )} border border-dashed border-current/30`}
          >
            {getIcon(achievement.type)}
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-sm text-primary/80 mt-1">{achievement.organization}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
              <Calendar className="w-3 h-3" />
              {achievement.date}
            </span>
            {achievement.googleDriveLink && (
              <a
                href={achievement.googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                title="View on Google Drive"
              >
                <FolderOpen className="w-3 h-3" />
                Drive
              </a>
            )}
          </div>
        </div>
        {achievement.description && (
          <p className="text-sm text-muted-foreground mt-2">{achievement.description}</p>
        )}
      </div>
    </div>
  </div>
);

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Achievements & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subheading mx-auto">
              Recognition for excellence in education and cybersecurity
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-card rounded-xl p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold gradient-text">8+</div>
              <div className="text-xs text-muted-foreground">Certifications</div>
            </div>
            
            
            <div className="glass-card rounded-xl p-4 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold gradient-text">15+</div>
              <div className="text-xs text-muted-foreground">Workshops</div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
