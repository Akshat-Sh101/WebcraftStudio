

import React, { useEffect, useState } from 'react'

function AnimatedImageCard({ animationClass, imgSrc, title }) {
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
      className={`bg-white p-6 rounded-lg shadow-lg ${inView ? `animate__animated ${animationClass}` : ''}`}
    >
      <img src={imgSrc} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default AnimatedImageCard
