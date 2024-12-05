// src/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form submitted!");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-200">
      <img src="https://www.gapinfotech.com/images/any-query.png" className="absolute h-[160px] w-[160px] left-[18%] top-[5%] rotate-[270deg] hidden lg:block" alt="" />
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>
        <div className="flex justify-center flex-col align-center items-center text-gray-600"> 
          <h2 className="mt-3 font-bold">(OR)</h2>
          <p className="mt-3 font-bold">Call us: +91 9599177805</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           ref={ref}
//         >
//           Contact Us
//         </motion.h2>
//         <motion.form
//           className="max-w-lg mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="PhoneNo" className="block text-gray-700 font-semibold mb-2">
//               Phone Number
//             </label>
//             <input
//               type="number"
//               id="phonenumber"
//               name="phonenumber"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             ></textarea>
//           </div>
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   )
// }



// import React from 'react'

// function Contact() {
//     return (
//         <section id="contact" className="py-16 bg-white">
//           <div className="text-center animate__animated animate__fadeIn animate__delay-1s">
//             <h2 className="text-3xl font-semibold text-blue-600">Contact Us</h2>
//             <p className="text-gray-600 mt-4">We'd love to hear from you! Get in touch for a free consultation.</p>
//             <div className="mt-8">
//               <form className="max-w-md mx-auto">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       );
// }

// export default Contact
