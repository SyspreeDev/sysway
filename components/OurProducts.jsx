'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = ['Popular', 'New Arrival', 'Top Rated'];

const products = {
  Popular: [
    {
      title: 'Vertical Air Receiver',
      image: '/images/prod1.png',
      link: '#',
    },
    {
      title: 'Horizontal Air Receiver',
      image: '/images/prod2.png',
      link: '#',
    },
    {
      title: 'Steam Header',
      image: '/images/prod3.png',
      link: '#',
    },
    {
      title: 'Gas Compressor Package',
      image: '/images/prod4.png',
      link: '#',
    },
  ],
  'New Arrival': [
    {
      title: 'Vertical Air Receiver',
      image: '/images/prod1.png',
      link: '#',
    },
    {
      title: 'Horizontal Air Receiver',
      image: '/images/prod2.png',
      link: '#',
    },
    {
      title: 'Steam Header',
      image: '/images/prod3.png',
      link: '#',
    },
    {
      title: 'Gas Compressor Package',
      image: '/images/prod4.png',
      link: '#',
    },

  ],
  'Top Rated': [
    {
      title: 'Vertical Air Receiver',
      image: '/images/prod1.png',
      link: '#',
    },
    {
      title: 'Horizontal Air Receiver',
      image: '/images/prod2.png',
      link: '#',
    },
    {
      title: 'Steam Header',
      image: '/images/prod3.png',
      link: '#',
    },
    {
      title: 'Gas Compressor Package',
      image: '/images/prod4.png',
      link: '#',
    },
  ],
};

const ProductShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2">
        Our <span className="text-green-700">Products</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mt-4 mb-10 font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? 'text-green-700 border-b-2 border-green-700'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products[activeTab].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden relative"
          >
            {/* Image block with green background */}
            <div className="bg-[#EAF8F0] flex justify-center items-center" style={{ width: '100%', height: '314px' }}>
              <Image
                src={product.image}
                alt={product.title}
                width={268}
                height={314}
                className="object-contain"
              />
            </div>

            {/* Text block below image, aligned left */}
            <div className="text-left pt-4 pr-4">
              <h3 className="text-base font-semibold text-black mb-2">{product.title}</h3>
              <a
                href={product.link}
                className="text-green-700 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                
                Learn more
                <Image
                  src="/images/arrow-up.png"
                  alt="Arrow Icon"
                  width={29}
                  height={29}
                />
              </a>
            </div>

            {/* Left arrow for first card */}
            {index === 0 && (
              <div className="hidden md:flex absolute left-[-3px] top-1/3 -translate-y-1/2 z-50 p-1 rounded-full ">
                <Image
                  src="/images/arrow2.png"
                  alt="Left Arrow"
                  width={29}
                  height={29}
                />
              </div>
            )}

            {/* Right arrow for last card */}
            {index === 3 && (
              <div className="hidden md:flex absolute right-[-3px] top-1/3 -translate-y-1/2 z-50 p-1">
                <Image
                  src="/images/arrow.png"
                  alt="Right Arrow"
                  width={29}
                  height={29}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcaseTabs;
