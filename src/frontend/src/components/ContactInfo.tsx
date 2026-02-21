import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Shop no 2, Ground floor, Khodiyar Krupa Building, Carter Road no-1, Next to Abhilasha Apartment, Borivali East, Mumbai, Maharashtra-400066',
      link: 'https://www.google.com/maps/place/B+R+BHANDARI+%26+CO+(CHARTERED+ACCOUNTANTS)/@19.2254424,72.854304,17z/data=!3m1!5s0x3be7b0d40cef7f15:0x1c3d85200456e9c1!4m14!1m7!3m6!1s0x3be7b1cf23c30011:0xe87158d0aa29d56a!2sB+R+BHANDARI+%26+CO+(CHARTERED+ACCOUNTANTS)!8m2!3d19.2254424!4d72.8568789!16s%2Fg%2F11h3ft1zlq!3m5!1s0x3be7b1cf23c30011:0xe87158d0aa29d56a!8m2!3d19.2254424!4d72.8568789!16s%2Fg%2F11h3ft1zlq?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '7738993300',
      link: 'tel:+917738993300',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'brbhandariandco@gmail.com',
      link: 'mailto:brbhandariandco@gmail.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '10.30 AM to 7.30 PM (Monday to Saturday)',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Feel free to reach out to us through any of the following channels. We're always ready to
          assist you with your financial and compliance needs.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <detail.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-1">{detail.title}</h4>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      target={detail.icon === MapPin ? '_blank' : undefined}
                      rel={detail.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary text-white border-0">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2">Professional Consultation</h4>
          <p className="text-sm text-white/90">
            Schedule a consultation to discuss your specific requirements. We offer both in-person
            and virtual meetings for your convenience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
