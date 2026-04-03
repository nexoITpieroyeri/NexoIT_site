import React, { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--alt" id="video">
      <div className="container">
        <div className="section__head">
          <h2>Lo que hacemos (video)</h2>
          <p>Mira un resumen rápido del tipo de soluciones que entregamos.</p>
        </div>

        <div className="video">
          <div className="video__player-wrapper">
            <video 
              ref={videoRef}
              className="video__player" 
              controls 
              playsInline 
              preload="metadata" 
              poster="/assets/img/logo.jpg"
              volume={0.6}
            >
              <source src="/assets/video/promo.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>

          <div className="video__side">
            <h3>¿Qué incluye una entrega NexoIT?</h3>
            <ul className="check">
              <li>Diseño moderno + responsive (celular y PC)</li>
              <li>Código ordenado y escalable</li>
              <li>Integración con base de datos / APIs</li>
              <li>Despliegue (Netlify/Vercel/Hosting) opcional</li>
              <li>Soporte para mejoras</li>
            </ul>

            <div className="cta2">
              <a className="btn" href="#contacto">Cotizar ahora</a>
              <a className="btn btn--ghost" href="#proceso">Ver proceso</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
