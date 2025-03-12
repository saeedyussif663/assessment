import Features from '@/components/features';
import HeroSection, { MobileHeroSection } from '@/components/hero-section';
import Navbar from '@/components/navbar';
import Partners from '@/components/partners';
import SendMoney from '@/components/send-money';

export default function Home() {
  return (
    <main>
      <div className="bg-[#F8F9FE] pt-5 pb-5">
        <Navbar />
        <HeroSection />
        <MobileHeroSection />
      </div>

      <div className="mt-5 w-full border border-dashed border-[#9747FF] hidden"></div>

      <SendMoney />
      <Features />
      <Partners />
    </main>
  );
}
