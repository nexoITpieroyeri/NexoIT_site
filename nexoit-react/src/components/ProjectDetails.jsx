import React, { useEffect, useLayoutEffect, useState } from 'react';
import SpotlightCard from './SpotlightCard';
import ShinyText from './ShinyText';
import { COMPANY_WHATSAPP } from '../data/constants';

const ProjectDetails = ({ project, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  useLayoutEffect(() => {
    // Para desactivar por completo el smooth scroll y forzar la vista superior
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBehavior = html.style.scrollBehavior;
    
    html.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    const forceScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      html.scrollTop = 0;
      body.scrollTop = 0;
    };

    // Ejecución inmediata
    forceScroll();
    
    // Ejecución tras pintar el DOM
    const timer = setTimeout(() => {
      forceScroll();
      html.style.scrollBehavior = prevHtmlBehavior || '';
      body.style.scrollBehavior = '';
    }, 50);

    return () => clearTimeout(timer);
  }, [project]);

  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxImg]);

  if (!project) return null;

  return (
    <div style={{ padding: '120px 20px 60px', minHeight: '100vh', maxWidth: '1120px', margin: '0 auto', animation: 'fadeIn 0.4s ease-out' }}>
      <button 
        onClick={onClose}
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#eaf2ff',
          padding: '10px 20px',
          borderRadius: '99px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '2rem',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(-5px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateX(0)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver al portafolio
      </button>

      <SpotlightCard className="project-details-content" style={{
        width: '100%',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        
        <div style={{ textAlign: 'center' }}>
          <p className="pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>{project.category.toUpperCase()} • PROYECTO</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0 0 1rem 0' }}>
            <ShinyText text={project.title} speed={3} />
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }}>Desarrollado en {project.year}</p>
        </div>

        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', maxHeight: '600px', borderRadius: '16px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} 
          onClick={() => setLightboxImg(project.image)}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)' }}>
            <h3 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.5rem' }}>Sobre el proyecto</h3>
            <p>{project.fullDescription || project.description}</p>
            
            <h4 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Stack Tecnológico</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="chip">{tag}</span>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem' }}>Características Principales</h3>
              <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ef59a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {project.gallery && project.gallery.length > 1 && (
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem', textAlign: 'center' }}>Galería de Pantallas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {project.gallery.slice(1).map((imgSrc, i) => (
                <div key={i} style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img 
                    src={imgSrc} 
                    alt={`Pantalla ${i + 1} del proyecto`} 
                    style={{ width: '100%', height: '220px', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.4s' }}
                    onClick={() => setLightboxImg(imgSrc)}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', margin: '4rem 0 1rem', padding: '3.5rem 2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.8rem', fontWeight: '800' }}>Somos NexoIT</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            Un equipo de ingenieros de sistemas enfocado en crear soluciones rápidas, seguras y escalables: páginas web, aplicaciones móviles, sistemas internos, software a medida y apoyo en proyectos.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/${COMPANY_WHATSAPP}?text=Hola,%20busco%20crear%20un%20proyecto%20similar%20a%20${encodeURIComponent(project.title)}.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-filled" 
              style={{ padding: '14px 32px', fontSize: '1.1rem' }}
            >
              Quiero una parecida
            </a>
            <a href="#servicios" onClick={() => onClose()} className="btn" style={{ padding: '14px 32px', fontSize: '1.1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>Ver servicios</a>
          </div>
        </div>
      </SpotlightCard>

      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <img 
            src={lightboxImg} 
            alt="Vista ampliada" 
            style={{ 
              maxWidth: '90vw', 
              maxHeight: '90vh', 
              objectFit: 'contain',
              borderRadius: '8px',
              animation: 'scaleIn 0.3s ease-out'
            }} 
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
