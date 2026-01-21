import { Brain, Sparkles, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const trainingModules = [
  {
    title: 'AI Fundamentals',
    description: 'Understand the basics of artificial intelligence and machine learning',
    topics: ['Introduction to AI/ML', 'AI Use Cases', 'ChatGPT & LLMs', 'AI Ethics'],
  },
  {
    title: 'AI Tools for Business',
    description: 'Practical training on AI tools for productivity and automation',
    topics: ['ChatGPT Mastery', 'AI Writing Tools', 'AI Image Generation', 'Automation'],
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable business insights',
    topics: ['Data Visualization', 'Dashboard Creation', 'Business Intelligence', 'Reporting'],
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategy and implementation',
    topics: ['Digital Strategy', 'Process Digitization', 'Change Management', 'ROI Analysis'],
  },
];

const analyticsFeatures = [
  'Custom Business Dashboards',
  'Real-time Performance Metrics',
  'Financial Forecasting Models',
  'Market Trend Analysis',
  'Customer Behavior Insights',
  'Revenue Projection Reports',
];

const Training = () => {
  return (
    <section id="training" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Training & AI Solutions
          </span>
          <h2 className="section-title mb-4">
            Empower Your Team with{' '}
            <span className="hero-text-gradient">AI & Data Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive training programs and data solutions designed to help your 
            organization leverage AI and analytics for competitive advantage.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* AI Training */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Training Programs</h3>
                <p className="text-muted-foreground">For teams and organizations</p>
              </div>
            </div>

            <div className="space-y-4">
              {trainingModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {module.title}
                    </h4>
                    <Sparkles className="w-5 h-5 text-secondary shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Analytics */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Data Analytics & Projections</h3>
                <p className="text-muted-foreground">Turn data into decisions</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border mb-6">
              <p className="text-muted-foreground mb-6">
                Our data analytics services help you understand your business performance, 
                identify opportunities, and make informed decisions backed by real data.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {analyticsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-hero-gradient rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-sm text-white/70">Avg. Efficiency Gain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">3x</div>
                  <div className="text-sm text-white/70">Decision Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Organization?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Schedule a free consultation to discuss your training needs and how we can help 
            your team leverage AI and data analytics effectively.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Book Training Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:contact@letrax.com"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Or Email Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
