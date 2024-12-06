'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Zap } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const products = [
  { id: 1, title: 'E-commerce Platform', image: './images/ss1.png?height=400&width=600',source: 'https://snow-heron-774734.hostingersite.com/' },
  { id: 2, title: 'Portfolio Website', image: './images/ss4.png?height=400&width=600' ,source: 'https://spicetrail-india-mepvr5gvbet9kqrv.builder-preview.com/'},
  { id: 3, title: 'Blog Template', image: './images/ss6.png?height=400&width=600',source: 'https://casavive-aopvrzp6vrtbynpl.builder-preview.com/' },
  { id: 4, title: 'Landing Page', image: './images/ss3.png?height=400&width=600' ,source: 'https://spicetrail-india-mepvr5gvbet9kqrv.builder-preview.com/'},
  { id: 5, title: 'Dashboard UI', image: './images/ss5.png?height=400&width=600' ,source: 'https://casavive-aopvrzp6vrtbynpl.builder-preview.com/'},
  { id: 6, title: 'Mobile App UI', image: './images/ss2.png?height=400&width=600' ,source: 'https://snow-heron-774734.hostingersite.com/'},
]

const features = [
  { icon: Globe, title: 'Responsive Design', description: 'Websites that look great on any device' },
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
  { icon: Code, title: 'Clean Code', description: 'Well-structured and maintainable codebase' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Designed with mobile users in mind' },
]

export default function Samplepage() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (    //bg-gradient-to-br from-blue-600 to-purple-700
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-700 text-white">
      <header className="container mx-auto px-4 py-6">
        {/* <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">WebCraft</h1>
          </motion.div>
          <motion.ul
            className="flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['Home', 'Portfolio', 'Services', 'Contact'].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">{item}</a>
              </li>
            ))}
          </motion.ul>
        </nav> */}
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-5xl font-bold mb-6">Crafting Digital Experiences</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We build stunning websites that captivate your audience and drive results.
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              key={'/'}
              to={'/'}
            >
              Get Started
            </NavLink>
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.section>

        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Our Latest Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                    <a href={product.source} target='_blank'>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredProduct === product.id ? 1 : 0, y: hoveredProduct === product.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-5xl font-bold mb-10 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h5 className="text-xl font-bold mb-4">WebCraft</h5>
              <p className="text-gray-400">Crafting digital experiences that inspire and engage.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <p className="text-gray-400">hello@webcraft.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="w-full md:w-1/3">
              <h5 className="text-xl font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

