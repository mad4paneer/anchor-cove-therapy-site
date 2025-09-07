import { Link } from "react-router-dom";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8" />
              <span className="text-xl font-bold font-serif">Anchor Cove</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your safe harbor for healing and growth. Professional therapy and counseling 
              services in a serene, supportive environment.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed therapy practice providing confidential mental health services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold font-serif mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Services
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Blog
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold font-serif mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@anchorcovetherapy.com</span>
              </div>
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">123 Ocean View Lane<br />Suite 200<br />Serenity Bay, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Anchor Cove Therapy. All rights reserved. | Licensed mental health services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;