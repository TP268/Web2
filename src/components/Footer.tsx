
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-pneumatic flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M2 12h20M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                </svg>
              </div>
              <span className="text-xl font-bold">PneumaFinder</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted partner for pneumatic solutions and system optimization.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/cylinders" className="text-gray-300 hover:text-white">Cylinders</Link></li>
              <li><Link to="/products/valves" className="text-gray-300 hover:text-white">Valves</Link></li>
              <li><Link to="/products/air-preparation" className="text-gray-300 hover:text-white">Air Preparation</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/air-leakage" className="text-gray-300 hover:text-white">Air Leakage</Link></li>
              <li><Link to="/solutions/slow-actuation" className="text-gray-300 hover:text-white">Slow Actuation</Link></li>
              <li><Link to="/solutions/energy-efficiency" className="text-gray-300 hover:text-white">Energy Efficiency</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white">All Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" /> 
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:info@pneumafinder.com" className="hover:text-white">info@pneumafinder.com</a>
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              <strong>Business Hours:</strong><br />
              Monday-Friday: 8:00 AM - 5:00 PM<br />
              Saturday-Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PneumaFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
