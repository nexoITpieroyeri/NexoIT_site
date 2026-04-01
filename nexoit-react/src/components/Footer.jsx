import React from 'react';
import { COMPANY_WHATSAPP, COMPANY_EMAIL } from '../data/constants';

const Footer = ({ onNavClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <img className="brand__logo" src="/assets/img/logo.jpg" alt="Logo de NexoIT" width="44" height="44" />
            <div className="brand__text">
              <span className="brand__name">NexoIT</span>
              <span className="brand__tag">Soluciones que conectan</span>
            </div>
          </div>
          <p className="muted">Desarrollo de páginas web, apps y software a medida. Automatizamos procesos para que tu negocio crezca.</p>
        </div>

        <div className="footer__col">
          <h4>Secciones</h4>
          <a href="#servicios" onClick={() => { if(onNavClick) onNavClick(); }}>Servicios</a>
          <a href="#proceso" onClick={() => { if(onNavClick) onNavClick(); }}>Proceso</a>
          <a href="#portafolio" onClick={() => { if(onNavClick) onNavClick(); }}>Portafolio</a>
          <a href="#testimonios" onClick={() => { if(onNavClick) onNavClick(); }}>Testimonios</a>
          <a href="#planes" onClick={() => { if(onNavClick) onNavClick(); }}>Planes</a>
          <a href="#faq" onClick={() => { if(onNavClick) onNavClick(); }}>FAQ</a>
          <a href="#contacto" onClick={() => { if(onNavClick) onNavClick(); }}>Contacto</a>
          <a href="/casos-exito.html">Casos de Éxito</a>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <a href="/terminos.html">Términos y condiciones</a>
          <a href="/privacidad.html">Política de privacidad</a>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href="#contacto" onClick={() => { if(onNavClick) onNavClick(); }}>Cotizar</a>
          <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        <div className="footer__bottom">
          <span>© {year} NexoIT. Todos los derechos reservados.</span>
          <span className="muted">Hecho por Piero & Eri</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;