'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-[#F1FDF5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side: Text Content with Watermark */}
        <div className="relative">
          {/* Watermark Logo Behind Text */}
          <Image
            src="/images/bg_logo.png"
            alt="Watermark Logo"
            width={400}
            height={400}
            className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none"
          />

          {/* Foreground Text Content */}
          <div className="relative z-20">
            <h1 className="text-[32px] leading-[40px] md:text-[38px] md:leading-[54px] text-gray-900">
              Transforming Industries with <br />
              <span className="text-[#026D37] font-semibold">State-of-the-Art Machinery</span><br />
              and <span className="text-[#026D37] font-semibold">Expert Engineering Solutions.</span>
            </h1>
            <p className="mt-6 text-gray-700 font-inter font-medium text-[20px]">
              Expert Engineering and Advanced Technology Combine to Create Exceptional Manufacturing Machinery Solutions.
            </p>
            <Link href="/products">
              <button className="mt-6 px-6 py-3 bg-[#026D37] text-white rounded hover:bg-[#026D37]/80 transition">
                Check Products
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image and Caption */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Background Image */}
          <Image
            src="/images/bg.png"
            alt="Background Image"
            width={1440}
            height={805}
            className="mx-auto"
          />

          {/* Foreground Image (Positioned on Top) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/mixer_cover.png"
              alt="Mixer Cover"
              width={280}
              height={280}
              className="mx-auto"
            />
            {/* Caption below */}
            <p className="mt-10 text-black font-jakarta font-semibold text-[23px] leading-[35px]">
              Mixer Cover
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
