"use client";

import Marquee from "react-fast-marquee";

const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
];


export default function LogoMarquee() {
  const logos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
  ];

  return (
    <div className="py-8">
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, i) => (
          <div key={i} className="mx-10 flex items-center justify-center">
            <img
              src={logo}
              alt={`Logo ${i}`}
              className="h-20 object-contain transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
