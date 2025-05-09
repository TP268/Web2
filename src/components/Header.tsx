
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
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
          <span className="text-xl font-bold text-gray-800">PneumaFinder</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 text-pneumatic hover:text-pneumatic-dark hover:border-pneumatic">
              <Mail size={18} />
              <span>Contact Us</span>
            </Button>
            <Button variant="outline" size="sm" className="sm:hidden p-2 text-pneumatic hover:border-pneumatic">
              <Mail size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
