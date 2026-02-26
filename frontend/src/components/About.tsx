import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: '30+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Users,
      title: '5',
      description: 'Expert Partners',
    },
    {
      icon: TrendingUp,
      title: '100%',
      description: 'Success Rate',
    },
    {
      icon: Shield,
      title: 'ICAI',
      description: 'Certified Member',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Our Practice</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in chartered accountancy services with integrity, expertise, and
              dedication
            </p>
          </div>

          {/* Firm History */}
          <div className="mb-12">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Established over three decades ago, B R Bhandari & Co has grown from a small practice into one of Mumbai's trusted chartered accountancy firms. Our journey began with a vision to provide personalized, high-quality financial services to businesses and individuals navigating India's complex regulatory landscape. Over the years, we have expanded our expertise across multiple domains including audit, taxation, corporate compliance, and financial consulting, while maintaining our core values of integrity and client-focused service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, with a team of five experienced partners and dedicated professionals, we serve a diverse clientele ranging from startups and SMEs to established corporations across manufacturing, IT services, real estate, and professional services sectors. Our 30+ years of experience have equipped us with deep insights into industry-specific challenges and regulatory requirements, enabling us to deliver practical, effective solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-t-4 border-t-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses and individuals with expert financial guidance, ensuring compliance, optimizing tax efficiency, and fostering sustainable growth. We are committed to delivering personalized services with unwavering integrity, technical excellence, and a deep understanding of our clients' unique needs and aspirations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as Mumbai's leading chartered accountancy practice, known for innovation, reliability, and client success. We aspire to set new standards in professional services by embracing technology, continuous learning, and building long-term partnerships that contribute to our clients' financial prosperity and peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                B R Bhandari & Co
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A registered firm with the Institute of Chartered Accountants of India (ICAI), B R Bhandari & Co
                brings over 30 years of extensive experience in audit, taxation, and financial
                consulting. Our practice is built on the foundation of trust, transparency, and
                technical excellence.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We specialize in serving small to medium enterprises, startups, and individual
                clients across various industries including manufacturing, IT services, real estate,
                and professional services.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3" />
                  <p className="text-muted-foreground">
                    <strong>ICAI Registration:</strong> 101163W
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3" />
                  <p className="text-muted-foreground">
                    <strong>Experience:</strong> 30+ years of professional excellence
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3" />
                  <p className="text-muted-foreground">
                    <strong>Areas of Expertise:</strong> Income Tax, GST, Audit & Assurance, Finance Market & Capital Restructuring, Bank Audit
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are committed to providing personalized, high-quality professional services that
                help our clients achieve their financial goals while ensuring full compliance with
                Indian regulatory requirements.
              </p>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Client-Centric Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Every client receives personalized attention and customized solutions tailored
                      to their unique needs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Technical Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Stay updated with latest tax laws, accounting standards, and regulatory
                      changes to provide accurate advice.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Timely Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      We understand the importance of deadlines and ensure all deliverables are
                      completed on time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
