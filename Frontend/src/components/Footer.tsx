
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-calm-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-semibold text-mind-700 mb-6 inline-block">
              MindConnect
            </Link>
            <p className="text-calm-600 mb-6">
              Your complete mental health platform for therapy sessions and medication management.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-calm-700 hover:bg-mind-600 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-calm-700 hover:bg-mind-600 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-calm-700 hover:bg-mind-600 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-calm-700 hover:bg-mind-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-calm-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/therapists" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link to="/medications" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Order Medications
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-calm-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Mental Health Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Self-Help Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-calm-600 hover:text-mind-600 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-calm-900 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mind-600 mt-0.5" />
                <span className="text-calm-600">
                  1234 Mental Health Avenue, Suite 567, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mind-600" />
                <span className="text-calm-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mind-600" />
                <span className="text-calm-600">contact@mindconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-calm-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-calm-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MindConnect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-calm-600 hover:text-mind-600 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-calm-600 hover:text-mind-600 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-calm-600 hover:text-mind-600 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
