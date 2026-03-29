import React, { useCallback, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Video from './components/Video';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat, { WhatsAppModal } from './components/WhatsAppFloat';
import ScrollAnimations from './components/ScrollAnimations';

function App() {
  const [waModal, setWaModal] = useState({ open: false, plan: '', price: '', desc: '' });

  const handleCotizar = useCallback((plan, price, desc) => {
    setWaModal({ open: true, plan, price, desc });
  }, []);

  const closeWaModal = useCallback(() => {
    setWaModal({ open: false, plan: '', price: '', desc: '' });
  }, []);

  return (
    <>
      <Preloader />

      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>

      <a className="skip" href="#contenido">Saltar al contenido</a>

      <Header />

      <main id="contenido">
        <Hero />
        <Services />
        <Video />
        <Process />
        <Portfolio />
        <Pricing onCotizar={handleCotizar} />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollAnimations />

      {waModal.open && (
        <WhatsAppModal
          initialPlan={waModal.plan}
          initialPrice={waModal.price}
          initialDesc={waModal.desc}
          onClose={closeWaModal}
        />
      )}
    </>
  );
}

export default App;
