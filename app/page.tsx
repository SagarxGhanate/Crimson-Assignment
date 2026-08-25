import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DiscountBanner from '@/components/DiscountBanner';
import TabSection from '@/components/TabSection';
import PricingCards from '@/components/PricingCards';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DiscountBanner />
      <TabSection />
      <PricingCards />
      <Testimonials />
      <Footer />
    </main>
  );
}
