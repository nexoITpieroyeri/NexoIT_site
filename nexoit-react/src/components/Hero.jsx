import React, { useEffect, useRef } from 'react';
import ShinyText from './ShinyText';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;

    const words = ['webs, sistemas, apps', 'soluciones digitales', 'software a medida', 'experiencias únicas'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy animate-blur-in">
          <p className="pill animate-scale-in animate-delay-1">
            <ShinyText text="Ingeniería de software | Web | Apps | Automatización" speed={4} />
          </p>
          <h1 className="animate-scale-in animate-delay-2">
            Convertimos ideas en{' '}
            <span className="grad gradient-animated">
              <span ref={typewriterRef}></span>
            </span>{' '}
            <br />
            <ShinyText text="listas para crecer." speed={3} />
          </h1>
          <p className="lead animate-scale-in animate-delay-3">
            Somos <strong>NexoIT</strong>, un equipo de ingenieros de sistemas enfocado en crear soluciones rápidas,
            seguras y escalables: páginas web, aplicaciones móviles, sistemas internos, software a medida y apoyo en
            proyectos.
          </p>

          <div className="hero__stats animate-scale-in animate-delay-3">
            <div className="stat animate-on-scroll">
              <span className="stat__number"><AnimatedCounter end={3} suffix="+" duration={1500} /></span>
              <span className="stat__label">Años de experiencia</span>
            </div>
            <div className="stat animate-on-scroll">
              <span className="stat__number"><AnimatedCounter end={100} suffix="%" duration={1500} /></span>
              <span className="stat__label">Confiable</span>
            </div>
            <div className="stat animate-on-scroll">
              <span className="stat__number"><AnimatedCounter end={12} suffix="+" duration={1500} /></span>
              <span className="stat__label">Clientes satisfechos</span>
            </div>
          </div>

          <div className="hero__cta animate-scale-in animate-delay-4">
            <a className="btn" href="#contacto">Quiero una cotización</a>
            <a className="btn btn--ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>

        <div className="hero__card animate-slide-right">
          <div className="card">
            <div className="card__header">
              <span className="card__badge">Disponible</span>
            </div>

            <div className="preview">
              <img
                src="/assets/img/logo.jpg"
                alt="NexoIT"
                className="preview__img"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="preview__overlay">
                <p className="preview__title">NexoIT</p>
                <p className="preview__sub">Soluciones que conectan</p>
              </div>
            </div>

            <div className="card__row">
              <div className="mini">
                <span className="mini__k">Web</span>
                <span className="mini__t">Landing | Ecommerce | Portafolio</span>
              </div>
              <div className="mini">
                <span className="mini__k">Apps</span>
                <span className="mini__t">Android | iOS | PWA</span>
              </div>
              <div className="mini">
                <span className="mini__k">Sistemas</span>
                <span className="mini__t">ERP | Gestión | Automatización</span>
              </div>
            </div>

            <div className="card__actions">
              <a className="btn btn--full" href="#video">Ver video</a>
              <a className="link" href="#portafolio">Explorar trabajos -&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
