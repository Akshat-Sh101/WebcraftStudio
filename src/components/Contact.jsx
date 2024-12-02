import React from 'react'

function Contact() {
    return (
        <section id="contact" className="py-16 bg-white">
          <div className="text-center animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-3xl font-semibold text-blue-600">Contact Us</h2>
            <p className="text-gray-600 mt-4">We'd love to hear from you! Get in touch for a free consultation.</p>
            <div className="mt-8">
              <form className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      );
}

export default Contact
