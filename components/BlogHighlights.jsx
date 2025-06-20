import Image from 'next/image';

const blogPosts = [
  {
    title: 'Revolutionizing Carton Packaging with Automatic Adhesive Dispenser Machines',
    date: 'Dec 4',
    image: '/images/blog1.png',
    link: '#',
  },
  {
    title: 'Enhance your packaging efficiency with the perfect glue dispenser solution',
    date: 'Dec 8',
    image: '/images/blog2.png',
    link: '#',
  },
];

const BlogHighlights = () => {
  return (
    <section className="py-12 px-4 md:text-center text-left">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold mb-10 ml-4 text-green-700 ">
        Insights and Updates 
        <span className="text-black text-left"> from </span>
        <span className="text-green-700 font-bold">Our Blog</span>
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[84rem] mx-auto px-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-[#D6F5E3] rounded-lg overflow-hidden shadow-sm text-left relative">
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />

              {/* Custom Best Seller Ribbon with Date Text */}
              <div className="absolute top-0 left-0 ml-6 mt-0">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/images/best-seller.png"
                    alt="Best Seller Icon"
                    fill
                    className="object-contain"
                  />
                  <span className="absolute top-[9px] left-3 text-white text-[14px] font-bold text-center">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-4">
              <h3 className="text-md font-semibold mb-4">{post.title}</h3>
              <a
                href={post.link}
                className="text-green-700 font-semibold text-sm flex items-center gap-1"
              >
                Continue Reading
                <Image
                  src="/images/arrow-up.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogHighlights;
