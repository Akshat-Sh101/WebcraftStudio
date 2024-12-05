'use client'

import React from 'react'
import AnimatedCard from './AnimatedCard'
import { Code, Palette, ShoppingCart, Search } from 'lucide-react'
import { motion } from 'framer-motion'

function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(59, 130, 246, 0.15)"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ transition: { duration: 0.5 }, transition: { repeat: Infinity, repeatType: 'loop', duration: 0.5 },rotate: [0, 10, -10, 10, -10, 0], opacity: 0.8 }} src="./images/technical-support.png" alt="Shaking Image" className="shaking-image absolute h-[200px] top-[-12%] left-[60px] hidden lg:block" />
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in creating custom websites that are both functional and beautiful,
            tailored to meet your unique business needs and boost your online presence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCard 
            animationClass="animate__fadeIn animate__delay-1.5s"
            title="Web Design"
            description="Crafting visually stunning, user-friendly designs that perfectly capture your brand's essence."
            icon={<Palette className="w-12 h-12 text-purple-500 mb-4" />}
            cardClass="bg-cover bg-center hover:scale-105 transition-transform duration-300" 
            backgroundImage="url('/path/to/your/image1.jpg')"
          />
          <AnimatedCard 
            animationClass="animate__fadeIn animate__delay-1s"
            title="Web Development"
            description="Building responsive, SEO-friendly websites that perform flawlessly across all devices."
            icon={<Code className="w-12 h-12 text-blue-500 mb-4" />}
            cardClass="bg-cover bg-center hover:scale-105 transition-transform duration-300" 
            backgroundImage="url('/path/to/your/image2.jpg')"
          />
          <AnimatedCard 
            animationClass="animate__fadeIn animate__delay-2s"
            title="E-commerce Solutions"
            description="Creating powerful online stores that drive sales and provide seamless shopping experiences."
            icon={<ShoppingCart className="w-12 h-12 text-green-500 mb-4" />}
            cardClass="bg-cover bg-center hover:scale-105 transition-transform duration-300" 
            backgroundImage="url('/path/to/your/image3.jpg')"
          />
          <AnimatedCard 
            animationClass="animate__fadeIn animate__delay-3s"
            title="SEO Optimization"
            description="Boosting your website's visibility in search engines to attract more organic traffic and potential customers."
            icon={<Search className="w-12 h-12 text-orange-500 mb-4" />}
            cardClass="bg-cover bg-center hover:scale-105 transition-transform duration-300" 
            backgroundImage="url('/path/to/your/image4.jpg')"
          />
        </div>
      </div>
    </section>
  );
}

export default Services


// 'use client'

// import React from 'react'
// import AnimatedCard from './AnimatedCard'
// import { Code, Palette, ShoppingCart, Search } from 'lucide-react'
// import { motion } from 'framer-motion'

// function Services() {
//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
//       {/* Background Element */}
//       <div className="absolute inset-0 z-0">
//         <svg
//           className="absolute bottom-0 left-0 w-full h-auto"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="rgba(59, 130, 246, 0.15)"
//             fillOpacity="1"
//             d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ transition: { duration: 0.5 }, transition: { repeat: Infinity, repeatType: 'loop', duration: 0.5 },rotate: [0, 10, -10, 10, -10, 0], opacity: 0.8 }} src="src\assets\technical-support.png" alt="Shaking Image" className="shaking-image absolute h-[200px] top-[-12%] left-[60px] hidden lg:block" />
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We specialize in creating custom websites that are both functional and beautiful,
//             tailored to meet your unique business needs and boost your online presence.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <AnimatedCard 
//             animationClass="animate__fadeIn animate__delay-1.5s"
//             title="Web Design"
//             description="Crafting visually stunning, user-friendly designs that perfectly capture your brand's essence."
//             icon={<Palette className="w-12 h-12 text-purple-500 mb-4" />}
//           />
//           <AnimatedCard 
//             animationClass="animate__fadeIn animate__delay-1s"
//             title="Web Development"
//             description="Building responsive, SEO-friendly websites that perform flawlessly across all devices."
//             icon={<Code className="w-12 h-12 text-blue-500 mb-4" />}
//           />
//           <AnimatedCard 
//             animationClass="animate__fadeIn animate__delay-2s"
//             title="E-commerce Solutions"
//             description="Creating powerful online stores that drive sales and provide seamless shopping experiences."
//             icon={<ShoppingCart className="w-12 h-12 text-green-500 mb-4" />}
//           />
//           <AnimatedCard 
//             animationClass="animate__fadeIn animate__delay-3s"
//             title="SEO Optimization"
//             description="Boosting your website's visibility in search engines to attract more organic traffic and potential customers."
//             icon={<Search className="w-12 h-12 text-orange-500 mb-4" />}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services








