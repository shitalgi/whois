import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 w-8 h-8 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Whois</h3>
                <p className="text-xs text-gray-400">Identity for everyone</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading provider of web presence solutions that empower you to establish and grow your online presence.
            </p>
            <Link to="/about" className="text-orange-500 hover:text-orange-400 text-sm inline-block">
              Learn more About Us
            </Link>
            <div className="flex space-x-4 pt-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Login
              </button>
              <span className="text-gray-500 self-center">or</span>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Create an Account
              </button>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Twitter className="w-5 h-5" />
              <Link to="#" className="text-sm hover:text-white transition-colors">
                Follow Us
              </Link>
            </div>
          </div>

          {/* Domains Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Domains</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/register-domain" className="text-sm hover:text-white transition-colors">
                  Register Domain Name
                </Link>
              </li>
              <li>
                <Link to="/transfer-domain" className="text-sm hover:text-white transition-colors">
                  Transfer Domain Name
                </Link>
              </li>
              <li>
                <Link to="/domain-pricing" className="text-sm hover:text-white transition-colors">
                  Domain Pricing
                </Link>
              </li>
              <li>
                <Link to="/whois-lookup" className="text-sm hover:text-white transition-colors">
                  Whois Lookup
                </Link>
              </li>
              <li>
                <Link to="/name-suggestion" className="text-sm hover:text-white transition-colors">
                  Name Suggestion Tool
                </Link>
              </li>
              <li>
                <Link to="/domain-offers" className="text-sm hover:text-white transition-colors">
                  Free with Every Domain
                </Link>
              </li>
              <li>
                <Link to="/domain-offers" className="text-sm hover:text-white transition-colors">
                  Domain Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Hosting & Product Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Hosting & Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/linux-hosting" className="text-sm hover:text-white transition-colors">
                  Linux Hosting
                </Link>
              </li>
              <li>
                <Link to="/windows-hosting" className="text-sm hover:text-white transition-colors">
                  Windows Hosting
                </Link>
              </li>
              <li>
                <Link to="/wordpress-hosting" className="text-sm hover:text-white transition-colors">
                  WordPress Hosting
                </Link>
              </li>
              <li>
                <Link to="/linux-reseller" className="text-sm hover:text-white transition-colors">
                  Linux Reseller Hosting
                </Link>
              </li>
              <li>
                <Link to="/windows-reseller" className="text-sm hover:text-white transition-colors">
                  Windows Reseller Hosting
                </Link>
              </li>
              <li>
                <Link to="/dedicated-servers" className="text-sm hover:text-white transition-colors">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/cloud-hosting" className="text-sm hover:text-white transition-colors">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link to="/business-email" className="text-sm hover:text-white transition-colors">
                  Titan Business Email
                </Link>
              </li>
              <li>
                <Link to="/google-workspace" className="text-sm hover:text-white transition-colors">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link to="/ssl-certificates" className="text-sm hover:text-white transition-colors">
                  SSL Certificates
                </Link>
              </li>
              <li>
                <Link to="/sitelock" className="text-sm hover:text-white transition-colors">
                  Sitelock
                </Link>
              </li>
              <li>
                <Link to="/codeguard" className="text-sm hover:text-white transition-colors">
                  CodeGuard
                </Link>
              </li>
            </ul>
          </div>

          {/* Infrastructure & Support Section */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Infrastructure</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/datacenter" className="text-sm hover:text-white transition-colors">
                    Datacenter Details
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-sm hover:text-white transition-colors">
                    Hosting Security
                  </Link>
                </li>
                <li>
                  <Link to="/monitoring" className="text-sm hover:text-white transition-colors">
                    24 x 7 Servers Monitoring
                  </Link>
                </li>
                <li>
                  <Link to="/backup" className="text-sm hover:text-white transition-colors">
                    Backup and Recovery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/knowledge-base" className="text-sm hover:text-white transition-colors">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link to="/report-abuse" className="text-sm hover:text-white transition-colors">
                    Report Abuse
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm hover:text-white transition-colors">
                    About Whois
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            Copyright © Whois.com. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
