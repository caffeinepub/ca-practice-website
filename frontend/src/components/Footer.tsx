import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ca-practice-website'
  );

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">B R Bhandari & Co</h3>
              <p className="text-white/80 text-sm leading-relaxed italic mb-2">
                Ya Aeshu Suptaeshu Jagruti
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Professional chartered accountancy services with 30+ years of experience. Committed to excellence,
                integrity, and client satisfaction.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-white/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-white/80 hover:text-accent transition-colors">
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-white/80 text-sm mt-4">
                Email: brbhandariandco@gmail.com
                <br />
                Phone: 7738993300
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© {currentYear} B R Bhandari & Co. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
