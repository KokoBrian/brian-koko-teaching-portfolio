import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Users, BookOpen, Code } from "lucide-react";

const PortfolioSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Teacher of the Year 2023",
      description: "Recognized for innovative teaching methods and outstanding student outcomes"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Math Team State Champions",
      description: "Led team to 3 consecutive state championship victories"
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "CS Club Founder",
      description: "Established computer science program with 150+ active members"
    }
  ];

  const projects = [
    {
      title: "Interactive Math Visualizations",
      description: "Created web-based tools for visualizing complex mathematical concepts, improving student comprehension by 40%",
      technologies: ["JavaScript", "D3.js", "React"],
      link: "#",
      type: "Educational Tool"
    },
    {
      title: "Code Learning Platform",
      description: "Developed a gamified coding platform for beginners, used by 500+ students across the district",
      technologies: ["Python", "Flask", "HTML/CSS"],
      link: "#",
      type: "Web Application"
    },
    {
      title: "STEM Curriculum Design",
      description: "Designed integrated STEM curriculum connecting math, computer science, and real-world applications",
      technologies: ["Curriculum Development", "Assessment Design"],
      link: "#",
      type: "Curriculum"
    }
  ];

  const stats = [
    { number: "8+", label: "Years Teaching" },
    { number: "500+", label: "Students Taught" },
    { number: "3", label: "State Championships" },
    { number: "95%", label: "Student Success Rate" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Portfolio & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Showcasing educational innovations, student successes, and professional accomplishments
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="text-center card-hover animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-background rounded-lg shadow-sm w-fit">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Educational Projects & Innovations
          </h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="animate-bounce-in">
            <BookOpen className="w-5 h-5 mr-2" />
            View Full Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;