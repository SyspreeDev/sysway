import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoCarousel from '@/components/LogoCarousel';
import HistorySection from '@/components/HistorySection';
import OurProducts from '@/components/OurProducts';
import BestSellerCard from '@/components/BestSellerCard';
import ProjectGallery from '@/components/ProjectGallery';
import GlobalBanner from '@/components/GlobalBanner';
import BlogHighlights from '@/components/BlogHighlights';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoCarousel />

      <section id="products">
        <OurProducts />
      </section>

      <section id="history">
        <HistorySection />
      </section>

      <section id="bestseller">
        <BestSellerCard />
      </section>

      <section id="projects">
        <ProjectGallery />
      </section>

      <section id="global">
        <GlobalBanner />
      </section>

      {/* <section id="blogs">
        <BlogHighlights />
      </section> */}

      <section id="gallery">
        <GallerySection />
      </section>

      {/* <section id="testimonials">
        <TestimonialsSection />
      </section> */}

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
