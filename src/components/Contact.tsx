import { MessageCircle, Mail, MapPin, Phone, ArrowRight, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const mailtoLink = `mailto:letrix27@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application should open with the message.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+254 108 899 189',
      href: 'https://wa.me/254108899189',
      description: 'Quick responses, usually within minutes',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'letrix27@gmail.com',
      href: 'mailto:letrix27@gmail.com',
      description: 'For detailed inquiries and proposals',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      href: null,
      description: '24/7 support for active clients',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="section-title mb-4">
            Let's Start Your{' '}
            <span className="hero-text-gradient">Digital Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your business? Reach out to us via WhatsApp for quick 
            responses or email for detailed discussions. We're here to help!
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/254108899189"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-[hsl(142,70%,45%)] to-[hsl(142,70%,35%)] rounded-2xl p-8 text-primary-foreground hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Book a Consultation on WhatsApp</h3>
            <p className="text-white/80 mb-4">
              Get quick responses and schedule a call. We're usually online and respond within minutes.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
              Chat Now
              <ArrowRight size={16} />
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:letrix27@gmail.com"
            className="group bg-hero-gradient rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email Us to Get Started</h3>
            <p className="text-white/80 mb-4">
              Send us a detailed message about your project requirements. We'll respond within 24 hours.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
              Send Email
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

        {/* Contact Info & Form */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-semibold">{info.value}</span>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-10 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe for free AI & data insights tips
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="btn-teal shrink-0">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-hero-primary">
                  Send Message
                  <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
