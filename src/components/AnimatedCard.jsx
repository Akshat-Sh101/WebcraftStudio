import React, { useEffect, useState } from 'react'

function AnimatedCard({ animationClass, title, description }) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setInView(true);
            }
          });
        },
        { threshold: 0.5 }
      );
  
      const element = document.getElementById(title); // Use the title as a unique ID
      if (element) observer.observe(element);
  
      return () => {
        if (element) observer.unobserve(element);
      };
    }, [title]);
  
    return (
      <div
        id={title}
        className={`bg-gray-200 p-6 rounded-lg shadow-lg transform transition hover:scale-105 duration-300 ${inView ? `animate__animated ${animationClass}` : ''}`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
}

export default AnimatedCard
