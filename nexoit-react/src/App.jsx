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
import PixelSnow from './components/PixelSnow';
import ProjectDetails from './components/ProjectDetails';
import TechLogos from './components/TechLogos';

function App() {
  const [waModal, setWaModal] = useState({ open: false, plan: '', price: '', desc: '' });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCotizar = useCallback((plan, price, desc) => {
    setWaModal({ open: true, plan, price, desc });
  }, []);

  const closeWaModal = useCallback(() => {
    setWaModal({ open: false, plan: '', price: '', desc: '' });
  }, []);

  return (
    <>
      <Preloader />
      <PixelSnow
        color="#2ef59a"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        depthFade={8}
        farPlane={20}
        brightness={0.8}
        gamma={0.4545}
        density={0.25}
        variant="snowflake"
        direction={125}
      />

      <a className="skip" href="#contenido">Saltar al contenido</a>

      <Header onNavClick={() => setSelectedProject(null)} />

      <main id="contenido" style={{ overflowAnchor: 'none' }}>
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
    </>
  );
}

export default App;
