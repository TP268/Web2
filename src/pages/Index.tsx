
import React from 'react';
import Header from '@/components/Header';
import ProductSearch from '@/components/ProductSearch';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Pneumatic Parts
          </h1>
          <p className="text-lg text-gray-600">
            Enter the model number to quickly access detailed product information
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <ProductSearch />
        </div>
        
        <div className="mt-12 max-w-lg mx-auto text-center p-6 bg-secondary rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for or need technical assistance?
            Our team is ready to help you find the right pneumatic solution.
          </p>
          <p className="font-medium">
            Contact us: <a href="mailto:support@pneumafinder.com" className="text-pneumatic">support@pneumafinder.com</a>
          </p>
        </div>
      </main>
      
      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2025 PneumaFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
