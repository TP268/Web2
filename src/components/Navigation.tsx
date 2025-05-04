
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { 
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'Cylinders', path: '/products/cylinders' },
        { name: 'Valves', path: '/products/valves' },
        { name: 'Air Preparation', path: '/products/air-preparation' },
      ]
    },
    { 
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: 'Air Leakage', path: '/solutions/air-leakage' },
        { name: 'Slow Actuation', path: '/solutions/slow-actuation' },
        { name: 'Energy Efficiency', path: '/solutions/energy-efficiency' },
      ] 
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    className="flex items-center text-gray-700 hover:text-pneumatic focus:outline-none"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link to={item.path} className="text-gray-700 hover:text-pneumatic">
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ${
                    activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                  }`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={closeMenu}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Get Support</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex items-center w-full text-left text-gray-700 hover:text-pneumatic focus:outline-none"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-1 text-gray-600 hover:text-pneumatic"
                            onClick={closeMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="block text-gray-700 hover:text-pneumatic"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={closeMenu}>Get Support</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
