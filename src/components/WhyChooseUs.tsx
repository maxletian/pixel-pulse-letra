import { 
  Award, 
  Clock, 
  HeadphonesIcon, 
  Shield, 
  Rocket, 
  Users, 
  Globe, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Years of experience delivering digital solutions across industries',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We tailor every solution to your specific business needs',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile methodology ensures quick turnaround without compromising quality',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Your data and systems are protected with enterprise-grade security',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock remote support for all your technical needs',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients locally and internationally with the same excellence',
  },
];

const benefits = [
  'Custom solutions tailored to your business',
  'Transparent pricing with no hidden costs',
  'Regular progress updates and communication',
  'Post-launch training and documentation',
  'Scalable solutions that grow with you',
  'Dedicated project manager for every project',
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title mb-4">
            The LetraX{' '}
            <span className="hero-text-gradient">Advantage</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We're not just service providers—we're partners invested in your success.
            Here's why businesses trust LetraX for their digital transformation.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              What You Get When You Work With Us
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We go beyond just delivering projects. Our commitment to your success means 
              you get comprehensive support, transparent communication, and solutions that 
              truly make a difference for your business.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trust Card */}
          <div className="relative">
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-10 text-white">
              <Zap className="w-12 h-12 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Join the growing number of businesses that have trusted LetraX to 
                deliver intelligent digital solutions. Let's discuss how we can 
                help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  Start a Conversation
                </a>
                <a
                  href="mailto:contact@letrax.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
