import Image from 'next/image';

const BestSellerCard = () => {
  return (
    <section className="bg-[#D6F5E3] py-12 px-4 relative overflow-hidden">
      {/* Watermark Logo (left side, behind white card) */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
        <Image
          src="/images/best-seller-bg.png" // Replace with your actual watermark image path
          alt="Watermark"
          width={383}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main White Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

        {/* Ribbon Row: top-left, responsive size */}
        <div className="absolute top-0 left-0 flex items-center ml-4 mt-0">
          <Image
            src="/images/best-seller.png"
            alt="Best Seller Icon"
            width={366}
            height={366}
            className="w-10 h-10 md:w-[60px] md:h-[60px]"
          />
          <span className="ml-2 font-bold text-[18px] md:text-[24px] leading-tight">
            <span className="text-black font-semibold">Our </span>
            <span className="text-[#026D37]">Best Seller</span>
          </span>
        </div>

        {/* Main Content */}
        <div className="flex-1 pt-8">
          <h2 className="text-[35px] font-semibold mb-2 leading-tight">
            Centrifugal Process pump
            <br />
            Package
          </h2>
          <p className="text-[#000000] text-sm leading-relaxed font-inter">
            The Centrifugal Process Pump Package is a robust and efficient solution designed<br />
            for a variety of industrial applications. Engineered to handle high flow rates and a <br />
            wide range of fluid viscosities, this package excels in transferring liquids,<br />
            including chemicals, water, and slurry.
          </p>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-[366px] flex justify-center">
          <Image
            src="/images/pump.png"
            alt="Centrifugal Process Pump"
            width={366}
            height={366}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BestSellerCard;
