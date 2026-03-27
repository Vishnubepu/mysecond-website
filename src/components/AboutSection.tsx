import { useState } from 'react';
import { BookOpen, Shield, GraduationCap, Brain, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const externalProfilePhoto = 'https://drive.google.com/thumbnail?id=1jY2KgRowA32QIcpbMo52j0iuC6ZGBnNq&sz=s800';

const AboutSection = () => {
  const [imgSrc, setImgSrc] = useState<string>(externalProfilePhoto);
  const [imgTransform, setImgTransform] = useState<string>('scale(1)');
  const [imgTransition, setImgTransition] = useState<string>('transform 0.4s ease-out');

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    const moveX = x * 12;
    const moveY = y * 12;

    setImgTransform(`translate(${moveX}px, ${moveY}px) scale(1.16)`);
    setImgTransition('transform 0.1s ease-out');
  };

  const handleMouseLeave = () => {
    setImgTransform('scale(1)');
    setImgTransition('transform 0.4s ease-out');
  };

  return (
    <section id="about" className="py-20 md:py-32 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subheading mx-auto">
              Where classrooms meet code, and education embraces security
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            {/* Left Side Content */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About Me</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I am a Social Science teacher passionate about shaping young minds and building critical thinking.
I also work as an Ethical Hacker, focusing on cybersecurity and digital safety.
I believe in combining education with technology for a better future.
Always committed to learning, teaching, and protecting the digital world.

                    </p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <p className="font-medium">BEd- Social Science</p>
                    <p className="text-sm text-muted-foreground">Social Science Specialization</p>
                  </div>
                  <div className="border-l-2 border-accent/50 pl-4">
                    <p className="font-medium">self-taught Cybersecurity & Ethical Hacking</p>
                    <p className="text-sm text-muted-foreground">OWASP, Ethical Hacking</p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">My Philosophy</h3>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "Education and security share a common goal — empowering people to make informed decisions 
                  and protecting them from harm, whether in society or cyberspace."
                </blockquote>
              </div>
            </div>

            {/* Right Side Photo */}
            <div
              className="relative group w-full h-[550px] md:h-[680px] lg:h-[760px] overflow-hidden rounded-[2.2rem] border-2 border-primary/50 shadow-2xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={imgSrc}
                alt="Profile photo"
                onError={() => setImgSrc(profilePhoto)}
                style={{ transform: imgTransform, transition: imgTransition }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
