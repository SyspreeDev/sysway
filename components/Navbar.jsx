'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        setForm({ name: '', email: '', phone: '', message: '' });
        setShowContactModal(false);
        router.push('/thank-you'); // ✅ redirect after success
      } else {
        setError('Failed to send message.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/nav-logo.png"
              alt="Sysway Logo"
              width={70}
              height={70}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        <ul className="hidden md:flex gap-8 text-black text-[18px] font-medium font-poppins">
          <li><Link href="#history">About us</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          {/* <li><Link href="#blogs">Blogs</Link></li> */}
        </ul>

        <div className="hidden md:flex items-center">
          <button
            className="bg-[#026D37] text-white px-5 py-2.5 rounded hover:bg-[#026D37]/80 transition cursor-pointer"
            onClick={() => setShowContactModal(true)}
          >
            Contact us
          </button>
        </div>

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

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 px-6 py-4 text-[18px] font-poppins font-medium md:hidden">
            <Link href="#history" onClick={() => setIsOpen(false)}>About us</Link>
            <Link href="#products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            {/* <Link href="#blogs" onClick={() => setIsOpen(false)}>Blogs</Link> */}
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

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="relative z-50 bg-white rounded-lg w-full max-w-md p-6 shadow-lg border border-gray-300 pointer-events-auto">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
              onClick={() => {
                setShowContactModal(false);
                setError('');
              }}
            >
              ×
            </button>

            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#026D37] text-white w-full py-2 rounded hover:bg-[#02572d] transition cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </header>
  );
}