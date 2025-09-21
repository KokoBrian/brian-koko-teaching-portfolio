import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Lightbulb, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhilosophySection = () => {
  const [openSections, setOpenSections] = useState<string[]>(["approach"]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const philosophyPoints = [
    {
      id: "approach",
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      title: "Student-Centered Learning",
      subtitle: "Every learner is unique",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I believe that meaningful learning happens when students are active participants in their 
            education. Rather than passive recipients of information, I encourage my students to ask 
            questions, explore concepts, and make connections between mathematical principles and 
            real-world applications.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Differentiated instruction to meet diverse learning styles</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Scaffolded support that builds confidence progressively</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Culturally responsive teaching that honors student backgrounds</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "growth",
      icon: <Target className="w-6 h-6 text-secondary" />,
      title: "Growth Mindset Culture",
      subtitle: "Mistakes are learning opportunities",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            In my classroom, we celebrate the process of learning, not just the final answer. 
            I foster an environment where students feel safe to take risks, make mistakes, and 
            learn from them. This approach is especially crucial in STEM fields where persistence 
            and resilience are key to success.
          </p>
          <div className="bg-accent-light p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">My Growth Mindset Strategies:</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Emphasize effort and strategy over innate ability</li>
              <li>• Use formative assessment to guide instruction</li>
              <li>• Encourage peer collaboration and discussion</li>
              <li>• Provide specific, actionable feedback</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "relevance",
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Real-World Connections",
      subtitle: "Making abstract concepts tangible",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Mathematics and computer science are not isolated subjects—they're powerful tools 
            that shape our world. I help students see the relevance by connecting classroom 
            learning to current events, career paths, and problems they care about solving.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary-light p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2">Math Connections</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Financial literacy and compound interest</li>
                <li>• Statistics in social justice and equity</li>
                <li>• Geometric principles in art and architecture</li>
              </ul>
            </div>
            <div className="bg-primary-light p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2">CS Applications</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AI ethics and algorithmic bias</li>
                <li>• Environmental data analysis</li>
                <li>• Social media algorithm understanding</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "innovation",
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Technology Integration",
      subtitle: "Enhancing learning through innovation",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Technology should enhance learning, not replace good teaching. I strategically 
            integrate digital tools to provide interactive experiences, immediate feedback, 
            and personalized learning paths that would be impossible with traditional methods alone.
          </p>
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-3">Innovative Tools I Use</h5>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>
                  <strong>Mathematics:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• GeoGebra for visualization</li>
                    <li>• Desmos graphing calculator</li>
                    <li>• Khan Academy for practice</li>
                  </ul>
                </div>
                <div>
                  <strong>Computer Science:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Replit for collaborative coding</li>
                    <li>• Scratch for programming logic</li>
                    <li>• GitHub for project management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Teaching Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            My approach to education is built on the belief that every student can succeed when given 
            the right support, challenge, and encouragement
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {philosophyPoints.map((point, index) => (
            <Card 
              key={point.id} 
              className={`card-hover animate-fade-in transition-all duration-300 ${
                openSections.includes(point.id) ? 'bg-card shadow-lg' : 'bg-card/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Collapsible 
                open={openSections.includes(point.id)}
                onOpenChange={() => toggleSection(point.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-background rounded-lg shadow-sm">
                          {point.icon}
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl font-bold text-foreground">
                            {point.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm mt-1">
                            {point.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          openSections.includes(point.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    {point.content}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="warm" size="lg" className="animate-bounce-in">
            Explore My Curriculum Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;