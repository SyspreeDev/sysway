import Image from 'next/image';

const GlobalStatsBanner = () => {
  return (
    <section className="bg-green-800 text-white py-12 px-6 w-full relative overflow-hidden">
      {/* Watermark Logos */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
        <Image
          src="/images/left_banner.png" // Replace with your actual logo path
          alt="Watermark Left"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
        <Image
          src="/images/right_banner.png" // Replace with your actual logo path
          alt="Watermark Right"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Main Stats Row */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center text-center">
        {/* Block 1 */}
        <div className="flex items-center flex-col sm:flex-row gap-6 sm:gap-16">
          <div className="flex flex-col items-center w-[200px]">
            <Image src="/images/mechanic.png" alt="Installations" width={100} height={100} className="mb-2" />
            <div className="text-2xl font-bold">10k+</div>
            <div className="text-sm">Installations</div>
          </div>

          {/* Separator */}
          <div className="my-4 sm:my-0 sm:mx-6">
            <Image
              src="/images/line.png"
              alt="vertical separator"
              className="hidden sm:block"
              width={6}
              height={140}
            />
            <Image
              src="/images/line2.png"
              alt="horizontal separator"
              className="block sm:hidden"
              width={180}
              height={60}
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex items-center flex-col sm:flex-row gap-6 sm:gap-16 mt-6 sm:mt-0">
          <div className="flex flex-col items-center w-[200px]">
            <Image src="/images/thumb.png" alt="Happy Customers" width={100} height={100} className="mb-2" />
            <div className="text-2xl font-bold">3k+</div>
            <div className="text-sm">Happy Customers</div>
          </div>

          {/* Separator */}
          <div className="my-4 sm:my-0 sm:mx-6">
            <Image
              src="/images/line.png"
              alt="vertical separator"
              className="hidden sm:block"
              width={6}
              height={140}
            />
            <Image
              src="/images/line2.png"
              alt="horizontal separator"
              className="block sm:hidden"
              width={180}
              height={50}
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center w-[200px] mt-6 sm:mt-0">
          <Image src="/images/flag.png" alt="Countries" width={100} height={100} className="mb-2" />
          <div className="text-2xl font-bold">45+</div>
          <div className="text-sm">Countries</div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStatsBanner;
