import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users, Award } from "lucide-react";
import teacherHeadshot from "@/assets/teacher-headshot.jpg";

const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Educational Background",
      frontText: "Strong Academic Foundation",
      backContent: (
        <div className="space-y-3">
          <p className="text-sm">M.S. Computer Science, Stanford University</p>
          <p className="text-sm">B.S. Mathematics Education, Maseno University</p>
          <p className="text-sm">Teaching Credential: California Single Subject</p>
        </div>
      )
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Teaching Passion",
      frontText: "Student-Centered Approach",
      backContent: (
        <div className="space-y-3">
          <p className="text-sm">8+ months inspiring secondary students</p>
          <p className="text-sm">Specializing in making complex concepts accessible</p>
          <p className="text-sm">Building confidence through personalized learning</p>
        </div>
      )
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community Impact",
      frontText: "Beyond the Classroom",
      backContent: (
        <div className="space-y-3">
          <p className="text-sm">Math Team Coach (3 State Championships)</p>
          <p className="text-sm">CS Club Founder & Mentor</p>
          <p className="text-sm">STEM Outreach Coordinator</p>
        </div>
      )
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Recognition",
      frontText: "Excellence in Education",
      backContent: (
        <div className="space-y-3">
          <p className="text-sm">Teacher of the Year 2023</p>
          <p className="text-sm">Innovation in STEM Award</p>
          <p className="text-sm">Outstanding Educator Recognition</p>
        </div>
      )
    }
  ];

  const skills = [
    "Python Programming", "Java Development", "Algebra & Calculus", 
    "Statistics", "Data Structures", "Web Development", "Problem Solving", 
    "Curriculum Design", "Assessment Strategies", "Educational Technology"
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Passionate educator combining the precision of mathematics with the innovation of computer science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image and Info */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <div className="relative inline-block mb-6">
              <img 
                src={teacherHeadshot} 
                alt="Sarah Chen - Computer Science and Mathematics Teacher"
                className="w-80 h-80 object-cover rounded-2xl shadow-large mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg">
                <span className="font-semibold">8+ Years Teaching</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Sarah Chen</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I believe every student has the potential to excel in STEM fields. My mission is to create 
              engaging, supportive learning environments where complex concepts become accessible and 
              exciting challenges become opportunities for growth.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className="flip-card h-48 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setFlippedCard(card.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`flip-card-inner ${flippedCard === card.id ? 'transform rotateY-180' : ''}`}>
                  {/* Front of Card */}
                  <Card className="flip-card-front h-full bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                      <div className="mb-4">
                        {card.icon}
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                      <p className="text-muted-foreground text-sm">{card.frontText}</p>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}
                  <Card className="flip-card-back h-full bg-primary text-primary-foreground">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h4 className="font-semibold text-lg mb-4 text-center">{card.title}</h4>
                      {card.backContent}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;