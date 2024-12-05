'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'WebcraftStudios delivered an outstanding website that exceeded our expectations. Their attention to detail and creativity are unmatched.',
    avatar: 'https://th.bing.com/th/id/OIP.dCpgPQ0i-xX2gZ-yonm54gHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, GrowthCo',
    content: 'Working with WebcraftStudios was a pleasure. They understood our vision and brought it to life with a beautiful, functional website.',
    avatar: 'https://th.bing.com/th/id/OIP.dCpgPQ0i-xX2gZ-yonm54gHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Founder, StartupX',
    content: 'The team at WebcraftStudios is incredibly talented. They created a website that perfectly represents our brand and has helped us attract new customers.',
    avatar: 'https://th.bing.com/th/id/OIP.dCpgPQ0i-xX2gZ-yonm54gHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        nextTestimonial()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, autoplay])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
    <span className="flex items-center bg-gray-200 ml-5 mr-5">
  <span className="h-px flex-1 bg-black"></span>
  <span className="h-px flex-1 bg-black"></span>
</span>
    <section id="testimonials" className="py-20 bg-gray-200 relative overflow-hidden shadow-lg">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Crafting Digital Excellence
          </span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-md"
            >
              <Quote className="w-12 h-12 text-blue-500 mb-4" />
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.div 
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <p className="text-gray-800 text-lg mb-4 italic leading-relaxed">{testimonials[currentIndex].content}</p>
                  <div className="font-semibold text-gray-800">
                    <p className="text-2xl">{testimonials[currentIndex].name}</p>
                    <p className="text-lg text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="bg-blue-500 text-white p-3 rounded-full shadow-md transition duration-300 hover:bg-blue-600 transform hover:scale-105"
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="bg-blue-500 text-white p-3 rounded-full shadow-md transition duration-300 hover:bg-blue-600 transform hover:scale-105"
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     role: 'CEO, TechCorp',
//     content: 'WebcraftStudios delivered an outstanding website that exceeded our expectations. Their attention to detail and creativity are unmatched.',
//     avatar: '/placeholder.svg?height=128&width=128',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     role: 'Marketing Director, GrowthCo',
//     content: 'Working with WebcraftStudios was a pleasure. They understood our vision and brought it to life with a beautiful, functional website.',
//     avatar: '/placeholder.svg?height=128&width=128',
//   },
//   {
//     id: 3,
//     name: 'Mike Johnson',
//     role: 'Founder, StartupX',
//     content: 'The team at WebcraftStudios is incredibly talented. They created a website that perfectly represents our brand and has helped us attract new customers.',
//     avatar: '/placeholder.svg?height=128&width=128',
//   },
// ]

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [autoplay, setAutoplay] = useState(true)

//   useEffect(() => {
//     if (autoplay) {
//       const timer = setTimeout(() => {
//         nextTestimonial()
//       }, 5000)
//       return () => clearTimeout(timer)
//     }
//   }, [currentIndex, autoplay])

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden rounded-3xl">
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <h2 className="text-5xl font-bold text-center text-white mb-12">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
//             Crafting Digital Excellence
//           </span>
//         </h2>
//         <div className="relative max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
//             >
//               <Quote className="w-12 h-12 text-yellow-400 mb-4" />
//               <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//                 <motion.div 
//                   className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <img 
//                     src={testimonials[currentIndex].avatar} 
//                     alt={testimonials[currentIndex].name} 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//                 <div className="flex-1">
//                   <p className="text-white text-xl mb-6 italic leading-relaxed">{testimonials[currentIndex].content}</p>
//                   <div className="font-semibold text-white">
//                     <p className="text-2xl">{testimonials[currentIndex].name}</p>
//                     <p className="text-lg opacity-75">{testimonials[currentIndex].role}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//           <div className="flex justify-center mt-8 gap-4">
//             <motion.button
//               onClick={prevTestimonial}
//               className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full shadow-md transition duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </motion.button>
//             <motion.button
//               onClick={nextTestimonial}
//               className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full shadow-md transition duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   )
// }

