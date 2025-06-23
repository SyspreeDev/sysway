'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] flex items-center justify-center p-6 overflow-hidden">

      {/* Left Yellow Triangle */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[330px] border-r-[330px] border-t-[#ECFDF4] border-r-transparent z-0" />

      {/* Right Green Triangle */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[300px] border-l-[300px] border-b-[#026D37] border-l-transparent z-0" />

      {/* Main Content */}
      <div className="w-full max-w-4xl bg-white p-10 text-center z-10">
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-4 text-green-600">
          <FaCheckCircle className="w-10 h-10" />
        </div>

        {/* Thank You Heading */}
        <h1 className="text-3xl font-bold text-[#026D37] mb-2">Thank you!</h1>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          We’ve sent your message successfully. You can find more information on our website and
          social pages.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          {/* Connect with Us */}
          <div className="bg-[#FFFFFF] rounded-md p-15 shadow-sm">
            <h3 className="text-lg font-semibold mb-8">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#026D37] text-white flex items-center justify-center hover:bg-[#02572d] transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#026D37] text-white flex items-center justify-center hover:bg-[#02572d] transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#026D37] text-white flex items-center justify-center hover:bg-[#02572d] transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#026D37] text-white flex items-center justify-center hover:bg-[#02572d] transition"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visit Website */}
          <div className="bg-[#FFFFFF] rounded-md p-15 shadow-sm">
            <h3 className="text-lg font-semibold mb-8">Visit Our Website</h3>
            <a
              href="/"
              className="inline-block bg-[#026D37] text-white px-6 py-2 rounded-md font-medium hover:bg-[#02572d] transition"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
