'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Sysway Logo"
              width={120}
              height={60}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-black text-[18px] font-medium font-poppins">
          <li><Link href="#history">About us</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#blogs">Blogs</Link></li>
        </ul>

        {/* Right: Contact Button */}
        <div className="hidden md:flex items-center">
          <button
            className="bg-[#026D37] text-white px-5 py-2.5 rounded hover:bg-[#026D37]/80 transition cursor-pointer"
            onClick={() => setShowContactModal(true)}
          >
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 px-6 py-4 text-[18px] font-poppins font-medium md:hidden">
            <Link href="#history" onClick={() => setIsOpen(false)}>About us</Link>
            <Link href="#products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="#blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <button
              onClick={() => {
                setShowContactModal(true);
                setIsOpen(false);
              }}
              className="w-full bg-[#026D37] text-white px-4 py-2 rounded hover:bg-[#02572d] transition mt-4 cursor-pointer"
            >
              Contact us
            </button>
          </div>
        )}
      </nav>

      {/* Contact Modal – no black overlay */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="relative z-50 bg-white rounded-lg w-full max-w-md p-6 shadow-lg border border-gray-300 pointer-events-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
              onClick={() => setShowContactModal(false)}
            >
              ×
            </button>

            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-[#026D37] text-white w-full py-2 rounded hover:bg-[#02572d] transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
