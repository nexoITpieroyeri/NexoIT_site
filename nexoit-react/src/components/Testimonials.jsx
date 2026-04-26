import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TESTIMONIALS } from '../data/constants';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#2ef59a" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ChevronIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const intervalRef = useRef(null);

  const goToSlide = useCallback((index, direction = 'next') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection(direction);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % TESTIMONIALS.length;
    goToSlide(next, 'next');
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    goToSlide(prev, 'prev');
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, nextSlide]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section className="section" id="testimonios">
      <div className="container">
        <div className="section__head animate-on-scroll">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Empresas que confían en NexoIT para transformar sus ideas en soluciones digitales.</p>
        </div>

        <div className="testimonials-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="testimonial-arrow testimonial-arrow--prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronIcon direction="left" />
          </button>

          <div className="testimonials-split">
            <div className="testimonials-split__nav">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  className={`testimonial-nav${activeIndex === i ? ' active' : ''}`}
                  onClick={() => goToSlide(i, i > activeIndex ? 'next' : 'prev')}
                >
                  <img src={t.navImage} alt={t.author} loading="lazy" decoding="async" />
                  <span className="testimonial-nav__company">{t.project}</span>
                </button>
              ))}
            </div>

            <div className="testimonials-split__content">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className={`testimonial-slide${activeIndex === i ? ' active' : ''} ${isTransitioning && activeIndex === i ? `slide-${slideDirection}` : ''}`}
                >
                  <div className="testimonial-slide__number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="testimonial-slide__quote">&quot;</div>
                  <p className="testimonial-slide__text">{t.text}</p>
                  <div className="testimonial-slide__highlight">{t.highlight}</div>
                  <div className="testimonial-slide__author">
                    <img src={t.image} alt={t.author} loading="lazy" />
                    <div>
                      <strong>{t.author}</strong>
                      <span>{t.company}</span>
                    </div>
                  </div>
                  <div className="testimonial-slide__rating">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="testimonial-arrow testimonial-arrow--next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="testimonials-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${activeIndex === i ? ' active' : ''}`}
              onClick={() => goToSlide(i, i > activeIndex ? 'next' : 'prev')}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
