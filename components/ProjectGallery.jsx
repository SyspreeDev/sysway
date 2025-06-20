'use client';
import Image from 'next/image';

const projects = [
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj1.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj2.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj3.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj4.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj5.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj6.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj7.png',
    width: 400,
    height: 200,
  },
  {
    title: 'Vertical Air Receiver',
    subtitle: 'Trakindo Utama',
    image: '/images/proj8.png',
    width: 400,
    height: 200,
  },
];

const ProjectGallery = () => {
  return (
    <section className="py-12 px-6 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Our <span className="text-[#026D37]">Latest Projects</span> and{' '}
            <span className="text-[#026D37]">Innovations</span>
          </h2>
          {/* <button className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            Check Projects
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="relative group overflow-hidden rounded-md shadow-sm">
              <Image
                src={proj.image}
                alt={proj.title || `Project Image ${i + 1}`}
                width={proj.width}
                height={proj.height}
                className="object-cover w-full h-auto"
              />
              {/* Hover Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">{proj.title}</p>
                {proj.subtitle && <p className="text-xs">{proj.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
