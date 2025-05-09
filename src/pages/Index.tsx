
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductSearch from '@/components/ProductSearch';
import { Button } from '@/components/ui/button';
import { getCategories } from '@/services/productService';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  // Get categories for product highlight section
  const categories = getCategories();
  
  // Brand logos for the brands section
  const brands = [
    { name: "SMC", logo: "S" },
    { name: "Festo", logo: "F" },
    { name: "CKD", logo: "C" },
    { name: "Janatics", logo: "J" },
    { name: "Airtac", logo: "A" },
    { name: "Parker", logo: "P" },
    { name: "Camozzi", logo: "C" },
    { name: "Norgren", logo: "N" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Expert Pneumatic Solutions for Your Industrial Needs
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              We specialize in finding the right pneumatic components and solutions for your specific applications. 
              Solving problems, not just selling parts.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-white/10 hover:bg-white/20">
                <Link to="/contact">Request Quote</Link>
              </Button>
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

      {/* Product Search Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Find Your Product</h2>
          <ProductSearch />
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Brands</h2>
          <div className="relative px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="p-2">
                      <div className="rounded-full w-24 h-24 mx-auto bg-white border flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                        <div className="text-3xl font-bold text-gray-700">{brand.logo}</div>
                      </div>
                      <p className="text-center mt-2 text-gray-700 font-medium">{brand.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
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
