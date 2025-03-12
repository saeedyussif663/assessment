import Navbar from '@/components/navbar';
import Press from '@/components/press';
import PressHero from '@/components/press-hero';

export default function page() {
  return (
    <section>
      <div className="pt-5">
        <Navbar bg="#ffffff" />
      </div>

      {/* latest */}
      <PressHero />

      <Press />
    </section>
  );
}
