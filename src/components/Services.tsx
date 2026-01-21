import { 
  Monitor, 
  Brain, 
  BarChart3, 
  Workflow, 
  Cloud, 
  Palette, 
  GraduationCap, 
  Wrench,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Digital System Design & Software Development',
    description: 'Custom management systems, web & mobile applications, and database-driven platforms tailored to your business needs.',
    features: ['Web Applications', 'Mobile Apps', 'Database Platforms', 'Custom Software'],
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence (AI) Training & Adoption',
    description: 'AI fundamentals training, practical tools adoption, ethical AI implementation, and SME-focused AI applications.',
    features: ['AI Fundamentals', 'Tool Training', 'Ethical AI', 'SME Applications'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Business Projections',
    description: 'Interactive dashboards, business performance insights, financial forecasting, and data-driven decision support.',
    features: ['Dashboards', 'Performance Insights', 'Forecasting', 'Decision Support'],
  },
  {
    icon: Workflow,
    title: 'Digital Process Automation',
    description: 'Workflow automation, paperless systems, online forms, and digital dashboards to streamline your operations.',
    features: ['Workflow Automation', 'Paperless Systems', 'Online Forms', 'Digital Dashboards'],
  },
  {
    icon: Cloud,
    title: 'System Integration & Cloud Solutions',
    description: 'Payment gateway integration, API connections, cloud deployment, and seamless system connectivity.',
    features: ['Payment Gateways', 'API Integration', 'Cloud Deployment', 'System Connectivity'],
  },
  {
    icon: Palette,
    title: 'Branding & Creative Digital Services',
    description: 'Professional logo design, brand identity creation, visual assets, and complete digital branding packages.',
    features: ['Logo Design', 'Brand Identity', 'Visual Assets', 'Digital Branding'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    description: 'Digital skills training, software usage workshops, team training programs, and organizational capacity building.',
    features: ['Digital Skills', 'Software Training', 'Team Workshops', 'Capacity Building'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Remote Support',
    description: 'System updates, bug fixing, performance optimization, and 24/7 remote technical support.',
    features: ['System Updates', 'Bug Fixing', 'Performance Optimization', '24/7 Support'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Complete Digital Solutions for{' '}
            <span className="hero-text-gradient">Your Business</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From AI training to system development—we provide end-to-end digital solutions 
            that help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group cursor-pointer"
            >
              {/* Icon */}
              <div className="service-icon feature-icon mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <a
            href="https://wa.me/254108899189"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal inline-flex"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
