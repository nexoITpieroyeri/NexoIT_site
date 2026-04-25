import React, { useCallback, useState, useEffect, useRef } from 'react';
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

import ProjectDetails from './components/ProjectDetails';
import TechLogos from './components/TechLogos';

function App() {
  const [waModal, setWaModal] = useState({ open: false, plan: '', price: '', desc: '' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRestored = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLoaded && !scrollRestored.current) {
      scrollRestored.current = true;
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    }
  }, [isLoaded]);

  const handleCotizar = useCallback((plan, price, desc) => {
    setWaModal({ open: true, plan, price, desc });
  }, []);

  const closeWaModal = useCallback(() => {
    setWaModal({ open: false, plan: '', price: '', desc: '' });
  }, []);

  const handlePreloaderDone = useCallback(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      {/* Azure Depths */}
      <div
        style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0, left: 0,
          zIndex: -1,
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Preloader onDone={handlePreloaderDone} />

      <a className="skip" href="#contenido">Saltar al contenido</a>

      <Header onNavClick={() => setSelectedProject(null)} />

      <main id="contenido" style={{ overflowAnchor: 'none', paddingTop: '70px' }}>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : (
          <>
            <Hero />
            <Services />
            <TechLogos />
            <Video />
            <Process />
            <Portfolio onSelectProject={setSelectedProject} />
            <Pricing onCotizar={handleCotizar} />
            <Testimonials />
            <Team />
            <FAQ />
            <Contact />
          </>
        )}
      </main>

      <Footer onNavClick={() => setSelectedProject(null)} />
      <WhatsAppFloat />
      <ScrollAnimations key={selectedProject ? 'proj' : 'main'} />

      {waModal.open && (
        <WhatsAppModal
          initialPlan={waModal.plan}
          initialPrice={waModal.price}
          initialDesc={waModal.desc}
          onClose={closeWaModal}
        />
      )}
      </div>
    </div>
  );
}

export default App;
