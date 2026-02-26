import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Shield, Lightbulb, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const valuePropositions = [
    {
      icon: Users,
      title: 'Personalized Attention',
      description:
        'Unlike large firms where you are just a number, we provide dedicated, personalized service. Each client is assigned a partner who understands your business intimately and is available for consultation whenever needed.',
    },
    {
      icon: Award,
      title: 'Deep Regulatory Expertise',
      description:
        'With 30+ years navigating India\'s complex tax and regulatory landscape, we possess in-depth knowledge of Income Tax, GST, Companies Act, and industry-specific compliance requirements. Our expertise keeps you ahead of regulatory changes.',
    },
    {
      icon: Lightbulb,
      title: 'Technology Integration',
      description:
        'We leverage modern accounting software, cloud-based solutions, and digital tools to streamline processes, enhance accuracy, and provide real-time financial insights. Our tech-forward approach saves you time and reduces errors.',
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description:
        'No hidden fees or surprise charges. We provide clear, upfront pricing for all our services with detailed engagement letters. Our fee structure is competitive and offers excellent value for the quality of service delivered.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description:
        'We understand that missed deadlines can result in penalties and business disruption. Our systematic approach and compliance calendar ensure all filings, returns, and deliverables are completed well before due dates.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Comprehensive Support',
      description:
        'Beyond compliance, we serve as your trusted financial advisors. From strategic planning to crisis management, loan assistance to business restructuring, we provide holistic support for all your financial needs under one roof.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what sets B R Bhandari & Co apart as your trusted financial partner
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-accent"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
