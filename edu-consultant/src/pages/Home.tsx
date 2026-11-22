import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Deadlines } from '../components/sections/Deadlines';
import { Advisory } from '../components/sections/Advisory';

import { Footer } from '../components/layout/Footer';
import { Methodology } from '../components/sections/Methodology';
import { AidEstimator } from '../components/sections/AidEstimator';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <div>
      {/* Navbar is sticky and contains links with hashes (#) */}
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="destinations">
          <Deadlines />
        </section>

        <section id="advisory">
          <Advisory />
        </section>

        <section id="process">
          <Methodology />
        </section>

        <section id="aid">
          <AidEstimator />
        </section>

        <section id="results">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};