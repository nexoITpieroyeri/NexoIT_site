import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NAV_LINKS } from '../data/constants';

const Header = ({ onNavClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const navRef = useRef(null);
  const navBtnRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setHeaderStyle({
        background: 'rgba(7,11,18,.85)',
        boxShadow: '0 4px 30px rgba(0,0,0,.3)'
      });
    } else {
      setHeaderStyle({
        background: 'rgba(7,11,18,.7)',
        boxShadow: 'none'
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isNavOpen && 
          navRef.current && 
          !navRef.current.contains(e.target) && 
          navBtnRef.current && 
          !navBtnRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isNavOpen]);

  const toggleNav = (e) => {
    e.stopPropagation();
    setIsNavOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    if (onNavClick) onNavClick();
  };

  return (
    <header className="header" id="top" style={headerStyle}>
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Ir al inicio" onClick={() => { if(onNavClick) onNavClick(); }}>
          <img className="brand__logo" src="/assets/img/logo.jpg" alt="Logo de NexoIT" width="44" height="44" loading="eager" />
          <div className="brand__text">
            <span className="brand__name">NexoIT</span>
            <span className="brand__tag">Soluciones que conectan</span>
          </div>
        </a>

        <button
          ref={navBtnRef}
          className={`navbtn${isNavOpen ? ' open' : ''}`}
          onClick={toggleNav}
          aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="nav"
          aria-expanded={isNavOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <nav 
          ref={navRef}
          className={`nav${isNavOpen ? ' open' : ''}`} 
          id="nav"
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeNav}>{link.label}</a>
          ))}
          <a href="#contacto" className="btn btn--sm" onClick={closeNav}>Cotizar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;