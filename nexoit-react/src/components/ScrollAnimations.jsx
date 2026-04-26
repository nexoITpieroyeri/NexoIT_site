import { useEffect, useRef, useCallback } from 'react';

const ScrollAnimations = () => {
  const observerRef = useRef(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const delay = entry.target.dataset.delay;
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('animate-ready');
              }, parseInt(delay));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in, .animate-blur-in, .animate-fade-up, .animate-fade-in'
    );
    animatedElements.forEach((el) => observerRef.current.observe(el));
  }, []);

  useEffect(() => {
    setupObserver();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupObserver]);

  return null;
};

export default ScrollAnimations;
