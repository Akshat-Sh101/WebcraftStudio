
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'animate.css';

function LandingPage() {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slider
  const slides = [
    'https://th.bing.com/th?id=OIP.dRmB5oxhJoWWO8Mm0KVZrAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.IaPxGl6n1g6TXdQcPs6DJgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th/id/OIP.dy4BWGEDD1Qe-uSEtcccFwHaDt?w=324&h=175&c=7&r=0&o=5&pid=1.7',
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="bg-cover bg-center w-full bg-no-repeat bg-gradient-to-b from-blue-500 to-purple-600 text-center h-[900px] py-14 h-screen relative"
      style={{backgroundImage: 'url("https://pngmagic.com/product_images/website-background-image-size-psd-vector-photo.jpg")' }}
    >
    
      <div className="h-5"></div>

      <div className="max-w-4xl mx-auto text-white animate__animated animate__fadeIn" >
        
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Webcraft Studios
          </span>
        </h1>
        <p className="text-xl mb-4 leading-relaxed">
          We specialize in crafting beautiful, responsive, and high-performance websites tailored to your unique needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
          >
            Explore Services
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="bg-transparent border-2 border-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform transform hover:scale-105"
          >
            View Portfolio
          </Link>
        </div>

        {/* Image Slider */}
        <div className="mt-12 relative max-w-xl mx-auto">
          {/* Slider Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto object-cover transition-transform duration-1000 "
            />
          </div>

          
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition shadow-md "
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition shadow-md"
          >
            &#8594;
          </button>

          
          <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? 'bg-yellow-400'
                    : 'bg-white/50 hover:bg-white'
                } transition`}
              ></button>
            ))}
          </div>
        </div>

        
        <div className="mt-12">
          <Link to="services" smooth={true} duration={500}>
            <div className="flex flex-col items-center cursor-pointer">
              <span className="text-white text-sm mb-2">Scroll Down</span>
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;



