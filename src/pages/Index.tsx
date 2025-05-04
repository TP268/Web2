
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductSearch from '@/components/ProductSearch';
import { Button } from '@/components/ui/button';
import { getCategories } from '@/services/productService';

const Index = () => {
  // Get categories for product highlight section
  const categories = getCategories();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Expert Pneumatic Solutions for Your Industrial Needs
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              We specialize in finding the right pneumatic components and solutions for your specific applications. 
              Solving problems, not just selling parts.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-white/10 hover:bg-white/20">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Product Search Section */}
      <section className="container mx-auto px-4 py-16 relative -mt-12">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Find Your Product</h2>
          <ProductSearch />
        </div>
      </section>

      {/* Company Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">More Than Just Parts Suppliers</h2>
          <p className="text-lg text-gray-600 mb-8">
            At PneumaFinder, we believe in solving problems, not just selling components. 
            Our expertise in pneumatic systems allows us to provide tailored solutions 
            that enhance efficiency, reduce downtime, and optimize your operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Consultation</h3>
              <p className="text-gray-600">
                Our team of pneumatic specialists will help identify the right components for your specific application.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quick Delivery</h3>
              <p className="text-gray-600">
                With extensive inventory and supply network, we ensure you get the parts you need without delays.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-600">
                Ongoing assistance for installation, troubleshooting, and maintenance of pneumatic systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/products/${category.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">
                    {/* Placeholder for category images */}
                    {category[0]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    Browse our selection of high-quality {category.toLowerCase()} for your pneumatic systems.
                  </p>
                  <span className="text-pneumatic font-medium">View Products →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-500">Manufacturing Manager</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Their expertise in pneumatic systems helped us optimize our production line, 
              reducing downtime by 30% and improving overall efficiency."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Maintenance Supervisor</p>
              </div>
            </div>
            <p className="text-gray-600">
              "When our production was halted due to a failed pneumatic component, 
              PneumaFinder provided an immediate solution that got us back up and running within hours."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <h3 className="font-semibold">Michael Chen</h3>
                <p className="text-sm text-gray-500">Process Engineer</p>
              </div>
            </div>
            <p className="text-gray-600">
              "We've been working with PneumaFinder for over 5 years now. 
              Their product knowledge and system expertise continue to add value to our operations."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pneumatic text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Pneumatic Systems?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts today to find the right solutions for your industrial needs.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-pneumatic hover:bg-gray-100 hover:text-pneumatic-dark">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
