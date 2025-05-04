
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const solutionsData = [
  {
    id: 'air-leakage',
    title: 'Air Leakage Detection & Prevention',
    description: 'Air leaks in pneumatic systems can waste energy, reduce system performance, and increase operational costs. Our solutions help identify, fix, and prevent air leaks.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    problems: [
      'Excessive energy consumption',
      'Reduced system pressure and performance',
      'Increased compressor wear',
      'Unstable operation of pneumatic components'
    ],
    solutions: [
      'Ultrasonic leak detection services',
      'High-quality fittings and connections',
      'Regular system audits and maintenance',
      'Employee training for leak awareness'
    ]
  },
  {
    id: 'slow-actuation',
    title: 'Slow Actuation & Response Times',
    description: 'Slow cylinder movement and delayed valve response can bottleneck production and reduce efficiency. We provide solutions to optimize response times.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    problems: [
      'Production bottlenecks',
      'Inconsistent operation timing',
      'Reduced throughput',
      'Quality control issues'
    ],
    solutions: [
      'Optimized valve and actuator sizing',
      'Air flow analysis and improvement',
      'Advanced control systems',
      'System pressure optimization'
    ]
  },
  {
    id: 'energy-efficiency',
    title: 'Energy Efficiency Optimization',
    description: 'Pneumatic systems can be significant energy consumers. Our solutions focus on reducing energy use while maintaining or improving performance.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    problems: [
      'High electricity costs',
      'Excessive carbon footprint',
      'Heat generation',
      'Unnecessary system wear'
    ],
    solutions: [
      'Low-pressure operation techniques',
      'Optimized component sizing',
      'Energy recovery systems',
      'Compressor efficiency improvements'
    ]
  },
  {
    id: 'system-contamination',
    title: 'System Contamination Management',
    description: 'Contaminants in pneumatic systems lead to premature wear, failures, and increased maintenance costs. Our solutions ensure clean, reliable air supply.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    problems: [
      'Component failure',
      'Sticking valves',
      'Blocked orifices',
      'Excessive maintenance requirements'
    ],
    solutions: [
      'Multi-stage filtration systems',
      'Regular filter maintenance programs',
      'Moisture removal solutions',
      'Air quality monitoring'
    ]
  }
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Pneumatic System Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We specialize in identifying and solving common pneumatic system problems. 
              Our expertise helps you optimize performance, reduce downtime, and lower operational costs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Expert Help</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Pneumatic System Challenges</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team has extensive experience solving these common issues that affect pneumatic systems across industries.
          </p>
        </div>

        <div className="space-y-16">
          {solutionsData.map((solution, index) => (
            <div 
              key={solution.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Common Problems</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {solution.problems.map((problem, index) => (
                        <li key={index}>{problem}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Our Solutions</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {solution.solutions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={`/contact?solution=${solution.id}`} 
                  className="text-pneumatic hover:text-pneumatic-dark font-medium inline-flex items-center"
                >
                  Get Help With This Issue →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Pneumatic Solutions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can help you identify and solve your specific pneumatic system challenges. 
            Contact us for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
