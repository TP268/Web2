
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import ProductSearch from '@/components/ProductSearch';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/">Back to Homepage</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium mb-4">Looking for a product?</h3>
              <ProductSearch isCompact className="max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
