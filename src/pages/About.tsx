
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About PneumaFinder
            </h1>
            <p className="text-lg text-gray-300">
              Your trusted partner for pneumatic solutions since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              PneumaFinder was founded in 2010 by a team of engineers with over 20 years of experience 
              in industrial pneumatics. We started with a simple mission: to provide not just pneumatic 
              components, but complete solutions tailored to each client's specific needs.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a small consulting operation has grown into a comprehensive pneumatic 
              solutions provider, serving industries ranging from manufacturing and automation 
              to food processing and pharmaceuticals.
            </p>
            <p className="text-gray-600">
              While we've grown substantially over the years, our core philosophy remains unchanged: 
              solving problems is more important than simply selling parts. This approach has earned 
              us the trust of hundreds of clients across the country.
            </p>
          </div>
          <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="PneumaFinder team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to excellence, integrity, and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-pneumatic/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pneumatic" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We commit to providing the highest quality components and solutions. 
                Our team continuously studies, tests, and implements the latest pneumatic technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-pneumatic/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pneumatic" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We don't just sell products—we build relationships. Our team works closely with clients 
                to understand their unique challenges and develop customized solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-pneumatic/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pneumatic" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                The pneumatic industry is constantly evolving, and so are we. We're committed to finding 
                innovative solutions to even the most challenging pneumatic system problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind PneumaFinder's success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcxNTAxMDI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-gray-600 mb-3">Founder & CEO</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              With 25 years in pneumatic systems engineering, Sarah leads our company vision and strategy.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3NtYW58fHx8fHwxNzE1MDEwMjk4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" 
                alt="Michael Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Michael Chen</h3>
            <p className="text-gray-600 mb-3">Technical Director</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Michael oversees our technical operations and leads product development initiatives.
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tYW4gcHJvZmVzc2lvbmFsfHx8fHx8MTcxNTAxMDMxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" 
                alt="Emily Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
            <p className="text-gray-600 mb-3">Customer Solutions Manager</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Emily ensures our clients receive personalized service and effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pneumatic text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your pneumatic system needs and challenges.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-pneumatic hover:bg-gray-100 hover:text-pneumatic-dark">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
