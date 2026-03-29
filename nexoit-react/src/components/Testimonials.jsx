import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TESTIMONIALS } from '../data/constants';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#2ef59a" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section className="section" id="testimonios">
      <div className="container">
        <div className="section__head animate-on-scroll">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Empresas que confían en NexoIT para transformar sus ideas en soluciones digitales.</p>
        </div>

        <div
          className="testimonials-split"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonials-split__nav">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                className={`testimonial-nav${activeIndex === i ? ' active' : ''}`}
                onClick={() => goToSlide(i)}
              >
                <img src={t.navImage} alt={t.author} />
                <span className="testimonial-nav__company">{t.project}</span>
              </button>
            ))}
          </div>

          <div className="testimonials-split__content">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide${activeIndex === i ? ' active' : ''}`}
              >
                <div className="testimonial-slide__number">{String(i + 1).padStart(2, '0')}</div>
                <div className="testimonial-slide__quote">"</div>
                <p className="testimonial-slide__text">{t.text}</p>
                <div className="testimonial-slide__highlight">{t.highlight}</div>
                <div className="testimonial-slide__author">
                  <img src={t.image} alt={t.author} />
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
      </div>
    </section>
  );
};

export default Testimonials;
