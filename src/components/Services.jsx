import React from 'react'
import AnimatedCard from './AnimatedCard'
function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Our Services</h2>
        <p className="text-gray-600 mt-4">We specialize in creating custom websites that are both functional and beautiful.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedCard 
            animationClass="animate__slideInLeft animate__delay-1.5s"
            title="Development"
            description="Building responsive, SEO-friendly websites."
          />
          <AnimatedCard 
            animationClass="animate__slideInLeft animate__delay-1s"
            title="Web Design"
            description="Custom web design to match your brand’s identity."
          />
          <AnimatedCard 
            animationClass="animate__slideInLeft animate__delay-2s"
            title="E-commerce"
            description="Creating online stores that maximize conversions."
          />
        </div>
      </div>
    </section>
  );

      };


export default Services
