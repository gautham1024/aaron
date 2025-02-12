import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AARON</h3>
            <p className="text-gray-400">
              Professional IT Services & Cybersecurity Solutions since 2007
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-gray-400 hover:text-white transition">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">IT Infrastructure</li>
              <li className="text-gray-400">Managed Services</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">+1 438-988-7946</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">aaronpacific@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">
                  3620, Rue Louise Carrier, Saint Laurent, H4R3K7, Quebec, Canada
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aaron North America Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}