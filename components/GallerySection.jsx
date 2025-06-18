import Image from 'next/image';

const galleryImages = [
  '/images/gallery1.png',
  '/images/gallery2.png',
  '/images/gallery3.png',
  '/images/gallery4.png',
  '/images/gallery5.png',
  '/images/gallery6.png',
  '/images/gallery7.png',
  '/images/gallery8.png',
];

const GallerySection = () => {
  return (
    <section className="relative py-12 px-6">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[#D6F5E3] top-[40%] bottom-[15%] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <h2 className="text-3xl font-semibold max-w-xl leading-tight">
            <span className="text-green-700 font-bold">Gallery of Images</span>{' '}
            Showcasing Our <br />
            <span className="text-green-700 font-bold">Product Range</span>
          </h2>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-block border border-black rounded-md px-5 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            Visit Gallery
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((src, index) => {
            // Custom sizing for image 1 and 8
            let customClass = '';
            if (index === 0) {
              // Image 1 taller
              customClass = 'col-span-1';
            } else if (index === 7) {
              // Image 8 wider
              customClass = 'row-span-1';
            }

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-md ${customClass}`}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={200}
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
