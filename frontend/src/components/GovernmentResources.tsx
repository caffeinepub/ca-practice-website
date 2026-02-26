import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const GovernmentResources = () => {
  const resources = [
    {
      name: 'Income Tax Department',
      description: 'File returns, check refund status, and access tax-related services',
      url: 'https://www.incometax.gov.in/',
      category: 'Tax',
    },
    {
      name: 'GST Portal',
      description: 'GST registration, return filing, and compliance management',
      url: 'https://www.gst.gov.in/',
      category: 'Tax',
    },
    {
      name: 'MahaGST',
      description: 'Maharashtra state GST portal for local tax administration',
      url: 'https://mahagst.gov.in/',
      category: 'Tax',
    },
    {
      name: 'Professional Tax',
      description: 'Professional tax registration and payment services',
      url: 'https://mahavat.gov.in/',
      category: 'Tax',
    },
    {
      name: 'Ministry of Corporate Affairs (MCA)',
      description: 'Company registration, compliance, and corporate filings',
      url: 'https://www.mca.gov.in/',
      category: 'Corporate',
    },
    {
      name: 'Registrar of Companies (ROC)',
      description: 'ROC services, company master data, and registrations',
      url: 'https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html',
      category: 'Corporate',
    },
    {
      name: 'SEBI',
      description: 'Securities and Exchange Board of India - market regulations',
      url: 'https://www.sebi.gov.in/',
      category: 'Market',
    },
    {
      name: 'NSE India',
      description: 'National Stock Exchange - live market data and trading',
      url: 'https://www.nseindia.com/',
      category: 'Market',
    },
    {
      name: 'BSE India',
      description: 'Bombay Stock Exchange - stock quotes and market information',
      url: 'https://www.bseindia.com/',
      category: 'Market',
    },
    {
      name: 'MahaRERA',
      description: 'Maharashtra Real Estate Regulatory Authority',
      url: 'https://rera.maharashtra.gov.in/',
      category: 'Regulatory',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tax':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400';
      case 'Corporate':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400';
      case 'Market':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      case 'Regulatory':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="government-resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Government Resources
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick access to essential government and regulatory websites for your business needs
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        resource.category
                      )}`}
                    >
                      {resource.category}
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <div className="text-xs text-accent font-medium group-hover:underline">
                      Visit Website →
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> These are official government
              websites. Please verify the authenticity of any website before sharing sensitive
              information. We are not responsible for the content or services provided by these
              external websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentResources;
