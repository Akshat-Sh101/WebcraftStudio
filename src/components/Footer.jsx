'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">WebcraftStudios</h3>
            <p className="text-gray-400">Crafting digital experiences that inspire and engage.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/WebCraftStudios" className="hover:text-blue-400 transition duration-300"><Facebook /></a>
              <a href="https://x.com/WebCraftStudios" className="hover:text-blue-400 transition duration-300"><Twitter /></a>
              <a href="https://www.instagram.com/web.craft_studios/profilecard/?igsh=bjZlZW9iNWdieGt5" className="hover:text-blue-400 transition duration-300"><Instagram /></a>
              <a href="https://www.linkedin.com/in/webcraft-studios-a1532b340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-400 transition duration-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} WebcraftStudios. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

