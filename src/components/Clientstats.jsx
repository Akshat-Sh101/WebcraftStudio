'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Calendar, DollarSign } from 'lucide-react'
import PropTypes from 'prop-types'

const StatItem = ({ label, value, suffix, icon }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep += 1
        setCount(Math.min(Math.round(stepValue * currentStep), value))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4 text-blue-500">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-center text-gray-600">{label}</p>
    </motion.div>
  )
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

const Clientstats = () => {
  return (
    <section className="relative py-16 bg-gray-50 bg-gradient-to-b from-[#d5cfefa6] to-[#ffffff]" >
      <div className="container mx-auto px-4" >
      <img src="src\assets\—Pngtree—black decorative line divider dividing_8285006.png" className='hidden absolute z-[2] top-[-45%] right-[25%] w-[50%]  lg:block' alt="" />
        <h2 className="text-5xl font-bold text-center mb-14 mt-2 text-gray-800">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem
            label="Happy Clients"
            value={500}
            suffix="+"
            icon={<Users size={32} />}
          />
          <StatItem
            label="Years of Experience"
            value={10}
            suffix=""
            icon={<Calendar size={32} />}
          />
          <StatItem
            label="Revenue Generated"
            value={10}
            suffix="M+"
            icon={<DollarSign size={32} />}
          />
        </div>
      </div>
    </section>
  )
}

export default Clientstats



// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { useState, useEffect } from 'react'
// import { Users, Calendar, DollarSign } from 'lucide-react'

// let StatItemProps = {
//   label: string,
//   value: number,
//   suffix: string,
//   icon: React.ReactNode,
// }

// const StatItem = ({ label, value, suffix, icon }: StatItemProps) => {
//   const [count, setCount] = useState(0)
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       const duration = 2000
//       const steps = 60
//       const stepValue = value / steps
//       let currentStep = 0

//       const timer = setInterval(() => {
//         currentStep += 1
//         setCount(Math.min(Math.round(stepValue * currentStep), value))

//         if (currentStep >= steps) {
//           clearInterval(timer)
//         }
//       }, duration / steps)

//       return () => clearInterval(timer)
//     }
//   }, [inView, value])

//   return (
//     <motion.div
//       ref={ref}
//       className="bg-white p-6 rounded-lg shadow-md"
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex items-center justify-center mb-4 text-blue-500">
//         {icon}
//       </div>
//       <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">
//         {count}
//         {suffix}
//       </h3>
//       <p className="text-center text-gray-600">{label}</p>
//     </motion.div>
//   )
// }

// export default function ClientStats() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <StatItem
//             label="Happy Clients"
//             value={500}
//             suffix="+"
//             icon={<Users size={32} />}
//           />
//           <StatItem
//             label="Years of Experience"
//             value={10}
//             suffix=""
//             icon={<Calendar size={32} />}
//           />
//           <StatItem
//             label="Revenue Generated"
//             value={10}
//             suffix="M+"
//             icon={<DollarSign size={32} />}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

