// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const testimonials = [
//   {
//     text: `"Working with Sysway Trading & Engineering was a smooth and rewarding experience. Their expert team guided us patiently through every step, ensuring we chose the right solution for our setup. The air receiver we received is top-notch, and the installation process was quick and efficient."`,
//     name: "Martin Mayers",
//     title: "Founder, CEO",
//     image: "/images/test1.png",
//   },
//   {
//     text: `"Sysway Trading & Engineering exceeded our expectations with their service and product quality. As a business owner with limited technical knowledge, I appreciated how clearly everything was explained. The final product was delivered on time and works exactly as promised."`,
//     name: "Alexa Perry",
//     title: "Founder, CEO",
//     image: "/images/test2.png",
//   },
//   {
//     text: `"Working with Sysway Trading & Engineering was a smooth and rewarding experience. Their expert team guided us patiently through every step, ensuring we chose the right solution for our setup. The air receiver we received is top-notch, and the installation process was quick and efficient."`,
//     name: "Martin Mayers",
//     title: "Founder, CEO",
//     image: "/images/test1.png",
//   },
//   {
//     text: `"Sysway Trading & Engineering exceeded our expectations with their service and product quality. As a business owner with limited technical knowledge, I appreciated how clearly everything was explained. The final product was delivered on time and works exactly as promised."`,
//     name: "Alexa Perry",
//     title: "Founder, CEO",
//     image: "/images/test2.png",
//   },
//   {
//     text: `"Working with Sysway Trading & Engineering was a smooth and rewarding experience. Their expert team guided us patiently through every step, ensuring we chose the right solution for our setup. The air receiver we received is top-notch, and the installation process was quick and efficient."`,
//     name: "Martin Mayers",
//     title: "Founder, CEO",
//     image: "/images/test1.png",
//   },
//   {
//     text: `"Sysway Trading & Engineering exceeded our expectations with their service and product quality. As a business owner with limited technical knowledge, I appreciated how clearly everything was explained. The final product was delivered on time and works exactly as promised."`,
//     name: "Alexa Perry",
//     title: "Founder, CEO",
//     image: "/images/test2.png",
//   },
//   {
//     text: `"Working with Sysway Trading & Engineering was a smooth and rewarding experience. Their expert team guided us patiently through every step, ensuring we chose the right solution for our setup. The air receiver we received is top-notch, and the installation process was quick and efficient."`,
//     name: "Martin Mayers",
//     title: "Founder, CEO",
//     image: "/images/test1.png",
//   },
//   {
//     text: `"Sysway Trading & Engineering exceeded our expectations with their service and product quality. As a business owner with limited technical knowledge, I appreciated how clearly everything was explained. The final product was delivered on time and works exactly as promised."`,
//     name: "Alexa Perry",
//     title: "Founder, CEO",
//     image: "/images/test2.png",
//   },
//   // ...repeat as needed
// ];

// const TestimonialsSection = () => {
//   const [activeDot, setActiveDot] = useState(0);
//   const itemsPerPage = 2;
//   const start = activeDot * itemsPerPage;
//   const currentTestimonials = testimonials.slice(start, start + itemsPerPage);

//   return (
//     <section className="py-16 px-6 md:text-center text-left overflow-hidden">
//       {/* Heading */}
//       <h2 className="text-3xl font-semibold mb-12">
//         Hear What <span className="text-black">Our</span>{" "}
//         <span className="text-[#026D37]">Clients</span> Say{" "}
//         <span className="text-[#026D37]">About Us</span>
//       </h2>

//       {/* Testimonials Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {currentTestimonials.map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#D6F5E3] p-6 rounded-lg text-left relative overflow-hidden"
//           >
//             {/* Watermark Logo */}
//             <div className="absolute top-0 right-4 z-0">
//               <Image
//                 src="/images/testimonial-bg.png" // Replace with your watermark image path
//                 alt="Watermark"
//                 width={200}
//                 height={200}
//               />
//             </div>

//             {/* Content */}
//             <div className="relative z-10">
//               <p className="text-gray-800 mb-6 leading-relaxed">{item.text}</p>
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={48}
//                   height={48}
//                   className="rounded-md object-cover"
//                 />
//                 <div>
//                   <p className="font-bold text-black">{item.name}</p>
//                   <p className="text-sm text-gray-700">{item.title}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 mt-8">
//         {[0, 1, 2, 3].map((i) => (
//           <span
//             key={i}
//             onClick={() => setActiveDot(i)}
//             className={`transition-all duration-200 ${
//               activeDot === i ? "bg-[#026D37] w-4 h-4" : "bg-[#C8E7D8] w-3 h-3"
//             } rounded-sm cursor-pointer`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
