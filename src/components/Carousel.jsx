'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://www.bing.com/th?id=OIP.QeiUlb86I0JeQCroEzxO1QHaD_&w=167&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
  'https://www.bing.com/th?id=OIP.pFTVBh1F93ZFx4bPv_NYMAHaFj&w=108&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
  'https://www.bing.com/th?id=OIP.MBili4kL88CpsAvj7yLF3AHaEC&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
  'https://www.bing.com/th?id=OIP.ZvZqaQqXr7VeaMMC1f3PHwHaFw&w=140&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
  'https://th.bing.com/th/id/OIP.-svoTCIE6yka38M70oEqCAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
]

const Carousel = () => {
  const [position, setPosition] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const moveCarousel = () => {
      if (carouselRef.current) {
        const totalWidth = images.length * 128 * 3; // 3 times the images array
        setPosition((prevPosition) => {
          const newPosition = prevPosition - 1;
          if (newPosition <= -totalWidth) {
            return 0;
          }
          return newPosition;
        });
      }
    };

    const intervalId = setInterval(moveCarousel, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="w-screen overflow-hidden mt-8 z-[500] "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={carouselRef}
        className="flex w-full"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...images, ...images, ...images, ...images, ...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            className="min-w-[128px] min-h-[128px] p-2"
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className="w-full h-full rounded-md pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Carousel

