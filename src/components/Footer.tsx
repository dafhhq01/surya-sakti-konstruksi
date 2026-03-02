import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-['Montserrat'] font-bold text-xl tracking-tight text-white">
                AK Bali Construction
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Design-led construction for homes that feel as good as they look. 
              Building precision into every project since 2008.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@akbaliconstruction.com"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="micro-label text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/services', label: 'Services' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="micro-label text-white/40 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>hello@akbaliconstruction.com</li>
              <li>+1 (555) 234-5678</li>
              <li>1234 Design District<br />Bali, CA 94102</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} AK Bali Construction. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Licensed & insured. All projects include a written warranty.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
