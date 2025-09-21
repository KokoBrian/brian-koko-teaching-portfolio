import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sarah.chen@school.edu",
      href: "mailto:sarah.chen@school.edu"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Roosevelt High School, San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sarahchen-educator"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/sarahchen-educator"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Schedule Meeting",
      href: "#"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            I'd love to hear from you! Whether you're a fellow educator, parent, or student, 
            I'm always excited to discuss education, share resources, or explore collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="transition-all duration-300 focus:shadow-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts, questions, or ideas..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:shadow-md resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Contact Details */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium text-foreground">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="card-hover bg-gradient-to-br from-primary-light to-secondary-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>3:30 PM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wednesday:</span>
                    <span>12:00 PM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">By Appointment:</span>
                    <span>Available upon request</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;