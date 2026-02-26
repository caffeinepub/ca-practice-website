import { useGetPartners } from '@/hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface StaticPartner {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  specialization: string[];
  experienceYears: string;
  photoUrl?: string;
}

const staticPartners: StaticPartner[] = [
  {
    id: 'uttamchand-bhandari',
    name: 'Uttamchand Bhandari',
    designation: 'Partner',
    qualifications: 'Chartered Accountant',
    specialization: ['Income Tax', 'Audit & Assurance', 'Bank Audit'],
    experienceYears: '30+',
    photoUrl: '/assets/UMB PHOTO.jpg',
  },
  {
    id: 'padamraj-bhandari',
    name: 'Padamraj Bhandari',
    designation: 'Partner',
    qualifications: 'Chartered Accountant',
    specialization: ['Income Tax', 'Audit & Assurance', 'Bank Audit'],
    experienceYears: '30+',
    photoUrl: '/assets/generated/partner-padamraj.dim_400x400.png',
  },
  {
    id: 'maheshchand-gupta',
    name: 'Maheshchand Gupta',
    designation: 'Partner',
    qualifications: 'Chartered Accountant',
    specialization: ['Income Tax', 'Audit & Assurance', 'Finance Market & Capital Restructuring'],
    experienceYears: '30+',
    photoUrl: '/assets/Mahesh gupta (1).jpg',
  },
  {
    id: 'poonam-punamiya',
    name: 'Poonam Punamiya',
    designation: 'Partner',
    qualifications: 'Chartered Accountant',
    specialization: ['Income Tax', 'Audit & Assurance'],
    experienceYears: '20+',
    photoUrl: '/assets/generated/partner-poonam.dim_400x400.png',
  },
  {
    id: 'vinay-shah',
    name: 'Vinay Shah',
    designation: 'Partner',
    qualifications: 'Chartered Accountant',
    specialization: ['Income Tax', 'Goods and Service Tax', 'Audit & Assurance', 'Bank Audit'],
    experienceYears: '10+',
    photoUrl: '/assets/generated/partner-vinay.dim_400x400.png',
  },
];

// Always cap to exactly 5 partners
const displayedPartners = staticPartners.slice(0, 5);

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

interface PartnerCardProps {
  name: string;
  designation: string;
  qualifications: string;
  specialization: string[];
  experienceYears: string;
  photoUrl?: string;
}

function PartnerCard({
  name,
  designation,
  qualifications,
  specialization,
  experienceYears,
  photoUrl,
}: PartnerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader className="text-center pb-3">
        <div className="mb-4 flex justify-center">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name}
              className="w-28 h-28 rounded-full object-cover object-top border-4 border-accent/20 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 rounded-full border-4 border-accent/20 shadow-md bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{getInitials(name)}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl text-primary">{name}</CardTitle>
        <p className="text-sm font-medium text-accent mt-1">{designation}</p>
        <p className="text-xs text-muted-foreground mt-1">{qualifications}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap gap-2 justify-center">
          {specialization.map((area, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-accent/10 text-accent-foreground text-xs"
            >
              {area}
            </Badge>
          ))}
        </div>
        <div className="mt-auto pt-2 border-t border-border/50 text-center">
          <span className="text-xs text-muted-foreground">Experience: </span>
          <span className="text-sm font-semibold text-primary">{experienceYears} Years</span>
        </div>
      </CardContent>
    </Card>
  );
}

const Partners = () => {
  const { isLoading } = useGetPartners();

  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our team of experienced chartered accountants dedicated to providing exceptional
            financial services
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <Skeleton className="w-28 h-28 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-4 w-1/2 mx-auto mb-1" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-4 w-1/3 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                name={partner.name}
                designation={partner.designation}
                qualifications={partner.qualifications}
                specialization={partner.specialization}
                experienceYears={partner.experienceYears}
                photoUrl={partner.photoUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
