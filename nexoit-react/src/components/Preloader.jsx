import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setIsVisible(false);
      document.body.classList.add('loaded');
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      const timeout = setTimeout(hideLoader, 4000);
      return () => {
        window.removeEventListener('load', hideLoader);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`page-loader${isVisible ? ' active' : ''}`} id="pageLoader">
      <div className="loader__content">
        <div className="loader__logo">
          <img src="/assets/img/logo.jpg" alt="NexoIT Logo" width="80" height="80" loading="eager" />
        </div>
        <div className="loader">
          <div className="loader__ring"></div>
          <div className="loader__ring"></div>
          <div className="loader__ring"></div>
        </div>
        <p className="loader__text">Cargando...</p>
      </div>
    </div>
  );
};

export default Preloader;
