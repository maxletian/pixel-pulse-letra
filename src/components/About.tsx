import { Target, Lightbulb, Users, Shield, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses with intelligent digital solutions',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge AI and data technologies',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Building solutions tailored to your unique needs',
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Ensuring data protection and system reliability',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="section-title mb-4">
            Transforming Ideas into{' '}
            <span className="hero-text-gradient">Digital Reality</span>
          </h2>
          <p className="section-subtitle mx-auto">
            LetraX helps organizations transform processes, data, and ideas into intelligent, 
            scalable, and user-friendly digital systems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Your Partner in Digital Transformation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At LetraX, we specialize in digital system design, artificial intelligence training, 
              data analytics, business projections, and creative digital solutions. We serve small 
              and medium-sized enterprises, startups, and institutions—both locally and internationally.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to bridge the gap between technology and business success, helping 
              organizations leverage automation, data-driven insights, and intelligent systems 
              for sustainable growth and competitive advantage.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="feature-icon shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CEO Profile */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
              {/* CEO Image Placeholder */}
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto rounded-2xl bg-hero-gradient flex items-center justify-center shadow-2xl ring-4 ring-background">
                  <span className="text-6xl font-bold text-white">ML</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-secondary text-white text-sm font-semibold rounded-full shadow-lg">
                  Founder & CEO
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">Max Letian</h3>
                <p className="text-muted-foreground">Technology Professional & Visionary</p>
              </div>

              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Max is an experienced technology professional specializing in digital systems, 
                software solutions, data analytics, and business transformation. His vision is 
                to help businesses leverage technology for automation, insights, growth, and 
                strategic advantage.
              </p>

              {/* Passions */}
              <div className="flex flex-wrap justify-center gap-2">
                {['System Design', 'AI', 'Data Insights', 'Empowering SMEs', 'Secure Solutions'].map((passion, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Why We Exist */}
        <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-secondary" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why LetraX Exists
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              We believe every business, regardless of size, deserves access to intelligent 
              digital solutions that drive growth. LetraX exists to democratize technology, 
              making AI, data analytics, and custom systems accessible and affordable for 
              growing businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
