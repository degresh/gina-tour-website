"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      src: '/landing page gina tour 1.png',
      alt: 'Wild Landscape',
    },
    {
      src: '/landing page gina tour 2.1.png',
      alt: 'Camera',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative" id="carouselExampleSlidesOnly">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={100}
              height={50}
              className="block w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;