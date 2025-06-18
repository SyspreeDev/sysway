import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#006837] text-white px-6 py-12 relative overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none">
        <Image
          src="/images/logo-footer.png" // Replace with your watermark image
          alt="Watermark Logo"
          width={400}
          height={400}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <Image
            src="/images/footer-logo.png"
            alt="Sysway Logo"
            width={250}
            height={60}
            className="mb-6"
          />
          <p className="text-sm mb-4 leading-relaxed">
            Sysway Trading & Engineering is a locally established company in the year 1999, with a competent team of
            highly skilled professional engineers, technicians and craftsmen in each respective field.
          </p>

          <div className="flex gap-2 items-start">
            <div className="mb-2 flex gap-2 items-start">
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/images/location.png"
                  alt="Address Icon"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-sm">
                  Blk 3015A Ubi Road 1 #04-10 Kampong Ubi Industrial Estate Singapore 408705
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <Image src="/images/location.png" alt="Address Icon" width={24} height={24} />
            <div>
              <p className="font-semibold">Workshop Address</p>
              <p className="text-sm">110 Neythal Road, Singapore 628597</p>
            </div>
          </div>
        </div>

        {/* Certification Column */}
        <div className="md:col-span-3">
          <p className="font-semibold mb-4 flex items-center gap-2">
            <Image src="/images/certificate-logo.png" alt="Certified Icon" width={46} height={46} />
            We are a Certified Manufacturers
          </p>
          <div className="flex gap-4 flex-wrap mb-8">
            <Image src="/images/cert1.png" alt="DNV" width={146} height={88} />
            <Image src="/images/cert2.png" alt="ISO" width={146} height={88} />
            <Image src="/images/cert3.png" alt="bizSAFE" width={146} height={88} />
            <Image src="/images/cert4.png" alt="ABS" width={146} height={88} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Quick Links */}
            <div>
              <p className="font-semibold mb-2">Quick Links</p>
              <ul className="space-y-1 text-sm">
                <li>Home</li>
                <li>About us</li>
                <li>Products</li>
                <li>Gallery</li>
                <li>Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="font-semibold mb-2">Products</p>
              <ul className="space-y-1 text-sm">
                <li>Air Receiver</li>
                <li>Steam Receiver</li>
                <li>Hydrophore Tank System</li>
                <li>NH3 High Pressure Receiver</li>
                <li>Pump Modules</li>
                <li>Compressor Skid Packages</li>
                <li>Diesel Oil Storage Tank</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold mb-2">Contact</p>
              <div className="flex items-center text-[#D0FFE7] gap-2 text-sm mb-2">
                <Image src="/images/phone.png" alt="Phone" width={16} height={16} />
                Mobile Number
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">+65 9338 8219</div>
              <div className="flex items-center text-[#D0FFE7] gap-2 text-sm mb-1">
                <Image src="/images/email.png" alt="Email" width={16} height={16} />
                Email Address
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">yawsongchan@sysway.com.sg</div>
              <div className="flex items-center gap-2 text-sm mb-4">max@sysway.com.sg</div>
              <div className="flex items-center gap-2 text-sm">
                <Image src="/images/social-media.png" alt="Social" width={20} height={20} />
                Social Media
              </div>
              <div className="flex gap-3 mt-4">
                <Image src="/images/facebook.png" alt="Facebook" width={10} height={10} />
                <Image src="/images/instagram.png" alt="Instagram" width={15} height={12} />
                <Image src="/images/x.png" alt="LinkedIn" width={15} height={10} />
                <Image src="/images/youtube.png" alt="YouTube" width={18} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#FFFFFF] mt-8 pt-4 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto relative z-10">
        <p>© Sysway Trading & Engineering Pte Ltd . All rights reserved.</p>
        <p>
          Designed & Developed by Syspree Digital with{' '}
          <Image src="/images/heart.png" alt="Heart" width={15} height={18} className="inline-block" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
