'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function CompanyHistory() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image with badge */}
        <div className="relative">
          <Image
            src="/images/history-image.png" // make sure this image exists in /public/images
            alt="Company Interior"
            width={640}
            height={420}
            className="rounded-lg w-full h-auto object-cover"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#026D37] text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium shadow-lg">
            <img src="/images/suitcase.png" alt="Badge Icon" width={16} height={16} /> 25 Years Experience
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#026D37]">Sysway Trading & Engineering</h2>
          <h3 className="font-jakarta text-[36px] leading-[54px] font-semibold mt-2">History</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Sysway Trading & Engineering is a locally established company in the year 1999, with a competent team of highly skilled professional engineers, technicians and craftsmen in each respective field. Our managers are experienced and qualified people who have been in this trade for various years. We specialize in the engineering, manufacturing and installation of oil & gas equipment.
          </p>
          {/* <Link href="/about">
            <span className="inline-flex items-center gap-2 mt-6 text-[#026D37] font-semibold group">
                <span className="border-b-2 border-[#026D37]">Continue Reading</span>
                <span><img src="/images/arrow-up.png" alt="arrow" width={24} height={24} /></span>
            </span>

          </Link> */}
        </div>
      </div>
    </section>
  );
}
