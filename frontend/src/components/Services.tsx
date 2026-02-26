import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: '/assets/generated/icon-audit.dim_128x128.png',
      title: 'Audit & Assurance',
      description:
        'Comprehensive statutory audits, internal audits, tax audits, and assurance services ensuring compliance with Indian accounting standards and regulatory requirements. Our audit approach combines technical rigor with practical business insights, helping you identify risks, improve controls, and enhance operational efficiency. We deliver detailed audit reports with actionable recommendations within agreed timelines.',
      features: [
        'Statutory Audit',
        'Internal Audit',
        'Tax Audit',
        'Stock Audit',
        'Due Diligence',
      ],
      deliverables: 'Detailed audit reports, management letters, compliance certificates',
      benefits: 'Enhanced credibility, regulatory compliance, risk mitigation, improved internal controls',
    },
    {
      icon: '/assets/generated/icon-tax.dim_128x128.png',
      title: 'Tax Compliance & Planning',
      description:
        'Expert guidance on direct and indirect taxation including Income Tax, GST, TDS, and strategic tax planning to optimize your tax liability legally. We stay current with evolving tax laws and leverage our expertise to minimize your tax burden while ensuring full compliance. Our proactive approach includes advance tax planning, representation before tax authorities, and handling assessments and appeals.',
      features: [
        'Income Tax Returns',
        'GST Registration & Filing',
        'TDS Compliance',
        'Tax Planning',
        'Tax Assessments',
      ],
      deliverables: 'Tax returns, GST filings, TDS returns, tax planning reports, assessment support',
      benefits: 'Optimized tax liability, penalty avoidance, peace of mind, strategic tax savings',
    },
    {
      icon: '/assets/generated/icon-accounting.dim_128x128.png',
      title: 'Accounting & Bookkeeping',
      description:
        'Professional accounting and bookkeeping services to maintain accurate financial records, prepare financial statements, and ensure regulatory compliance. We handle day-to-day bookkeeping, monthly reconciliations, and year-end finalization, providing you with reliable financial data for informed decision-making. Our services include both manual and computerized accounting systems tailored to your business needs.',
      features: [
        'Bookkeeping Services',
        'Financial Statements',
        'MIS Reports',
        'Payroll Management',
        'Accounts Finalization',
      ],
      deliverables: 'Monthly books, financial statements, MIS reports, payroll processing, reconciliations',
      benefits: 'Accurate records, timely reporting, cost efficiency, focus on core business',
    },
    {
      icon: '/assets/generated/icon-company.dim_128x128.png',
      title: 'Company Formation & Compliance',
      description:
        'End-to-end support for company incorporation, LLP formation, and ongoing compliance with MCA, ROC, and other regulatory bodies. From choosing the right business structure to handling annual filings and board meetings, we manage all statutory requirements. Our comprehensive compliance calendar ensures you never miss a deadline, avoiding penalties and maintaining good standing with regulators.',
      features: [
        'Company Registration',
        'LLP Formation',
        'ROC Compliance',
        'Annual Filings',
        'Secretarial Services',
      ],
      deliverables: 'Incorporation certificates, compliance calendar, annual returns, board resolutions',
      benefits: 'Hassle-free incorporation, timely compliance, penalty avoidance, legal protection',
    },
    {
      icon: '/assets/generated/icon-consulting.dim_128x128.png',
      title: 'Financial Consulting',
      description:
        'Strategic financial advisory services including business planning, financial restructuring, investment advisory, and management consulting. We help businesses make informed financial decisions through detailed analysis, feasibility studies, and strategic planning. Our consulting services extend to loan syndication, working capital management, and CFO services for businesses seeking expert financial leadership without full-time commitment.',
      features: [
        'Business Planning',
        'Financial Analysis',
        'Investment Advisory',
        'Loan Assistance',
        'CFO Services',
      ],
      deliverables: 'Business plans, financial models, feasibility reports, loan proposals, strategic advice',
      benefits: 'Informed decisions, growth acceleration, funding access, expert financial guidance',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive chartered accountancy services tailored to meet your business and personal
              financial needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">Deliverables:</h4>
                      <p className="text-xs text-muted-foreground">{service.deliverables}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">Benefits:</h4>
                      <p className="text-xs text-muted-foreground">{service.benefits}</p>
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

export default Services;
