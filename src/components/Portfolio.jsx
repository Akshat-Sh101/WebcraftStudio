import React from 'react'
import '../App.css'
import AnimatedImageCard from './AnimatedImageCard'
function Portfolio() {
    return (
        <section id="portfolio" className="py-16 bg-blue-50">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-blue-600">Our Portfolio</h2>
            <p className="text-gray-600 mt-4">Check out some of the work we’ve done for our amazing clients.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedImageCard 
            animationClass=" animate__slideInUp animate__delay-0.5s"
            imgSrc="https://via.placeholder.com/400"
            title="Project 1"
        />

              <AnimatedImageCard 
                animationClass="animate__slideInUp animate__delay-1s"
                imgSrc="https://via.placeholder.com/400"
                title="Project 2"
              />
              <AnimatedImageCard 
                animationClass="animate__slideInUp animate__delay-1.5s"
                imgSrc="https://via.placeholder.com/400"
                title="Project 3"
              />
            </div>
          </div>
        </section>
      );
}

export default Portfolio
