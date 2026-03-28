// NexoIT - JS principal (menú, scroll, links, formulario WhatsApp)
(() => {

  // Preloader mejorado — desaparece cuando la página está lista, sin delay artificial
  const initPreloader = () => {
    const preloader = document.getElementById('pageLoader');
    if (!preloader) return;

    const hideLoader = () => {
      preloader.classList.add('hidden');
      document.body.classList.add('loaded');
    };

    if (document.readyState === 'complete') {
      // Ya cargó antes de que se ejecutara el script
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      // Fallback de seguridad: máximo 4 segundos
      setTimeout(hideLoader, 4000);
    }
  };
  initPreloader();

  const navBtn = document.getElementById("navbtn");
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("totop");
  const year = document.getElementById("year");
  const form = document.getElementById("form");
  const copyBtn = document.getElementById("copy");

  const waLink = document.getElementById("waLink");
  const waFooter = document.getElementById("waFooter");
  const fbLink = document.getElementById("fbLink");
  const liLink = document.getElementById("liLink");
  const ttLink = document.getElementById("ttLink");

  // Datos reales (NexoIT)
  const COMPANY_WHATSAPP = "51925585217"; // +51 925585217 (sin +)
  const COMPANY_EMAIL = "nexoit90@gmail.com";

  // Links públicos (actualiza cuando tengas tus URLs oficiales)
  const SOCIAL = {
    facebook: "https://www.facebook.com/share/1J2pU7xaFT/",
    linkedin: "https://www.linkedin.com/company/nexoittech/",
    tiktok: "https://www.tiktok.com/@nexo.it"
  };

  if (year) year.textContent = String(new Date().getFullYear());

  // Menú mobile
  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });

    // Cerrar al hacer click en un link
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });

    // Cerrar al hacer click fuera del menú
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !navBtn.contains(e.target) && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Botón subir y efectos en header
  const onScroll = () => {
    if (!toTop) return;
    const show = window.scrollY > 400;
    toTop.classList.toggle("show", show);
    
    // Efecto en header al hacer scroll
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(7,11,18,.85)';
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,.3)';
      } else {
        header.style.background = 'rgba(7,11,18,.7)';
        header.style.boxShadow = 'none';
      }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Helpers
  const buildMsg = (data) => {
    const nombre = (data.nombre || "").trim();
    const numero = (data.numero || "").trim();
    const correo = (data.correo || "").trim();
    const necesita = (data.necesita || "").trim();
    const descripcion = (data.descripcion || "").trim();

    const lines = [
      `Hola, soy ${nombre}.`,
      "",
      `Número: ${numero}`,
      `Correo: ${correo}`,
      `Necesito: ${necesita}`,
      "",
      "Descripción:",
      descripcion
    ];

    return lines.join("\n");
  };

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Links rápidos
  if (waLink) {
    waLink.href = `https://wa.me/${COMPANY_WHATSAPP}`;
    waLink.target = "_blank";
    waLink.rel = "noopener noreferrer";
  }
  if (waFooter) {
    waFooter.href = `https://wa.me/${COMPANY_WHATSAPP}`;
    waFooter.target = "_blank";
    waFooter.rel = "noopener noreferrer";
  }
  if (fbLink) {
    fbLink.href = SOCIAL.facebook;
    fbLink.target = "_blank";
    fbLink.rel = "noopener noreferrer";
  }
  if (liLink) {
    if (SOCIAL.linkedin) {
      liLink.href = SOCIAL.linkedin;
      liLink.target = "_blank";
      liLink.rel = "noopener noreferrer";
    } else {
      liLink.style.display = 'none';
    }
  }
  if (ttLink) {
    ttLink.href = SOCIAL.tiktok;
    ttLink.target = "_blank";
    ttLink.rel = "noopener noreferrer";
  }

  // Formulario -> WhatsApp con feedback visual
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      // Validación simple
      if (!data.nombre || !data.numero || !data.correo || !data.necesita || !data.descripcion) {
        alert("Completa todos los campos para enviar tu solicitud.");
        return;
      }

      // Feedback visual
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Abriendo WhatsApp...';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2500);
      }

      const msg = buildMsg(data);
      openWhatsApp(msg);
    });
  }

  // Copiar mensaje
  if (copyBtn && form) {
    copyBtn.addEventListener("click", async () => {
      const data = Object.fromEntries(new FormData(form).entries());
      const msg = buildMsg(data);

      try {
        await navigator.clipboard.writeText(msg);
        copyBtn.textContent = "Copiado";
        setTimeout(() => (copyBtn.textContent = "Copiar mensaje"), 1100);
      } catch (err) {
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = msg;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        copyBtn.textContent = "Copiado";
        setTimeout(() => (copyBtn.textContent = "Copiar mensaje"), 1100);
      }
    });
  }

  // Renderizar estrellas en el portafolio
  const renderStars = () => {
    const starElements = document.querySelectorAll(".stars");
    starElements.forEach(starContainer => {
      const rating = parseInt(starContainer.dataset.rating) || 0;
      let starsHTML = "";
      const starSVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      
      for (let i = 0; i < 5; i++) {
        const isFilled = i < rating;
        starsHTML += `<span class="star ${isFilled ? "" : "star--off"}">${starSVG}</span>`;
      }
      
      starContainer.innerHTML = starsHTML;
    });
  };
  renderStars();

  // Animación de scroll para elementos
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const animatedElements = document.querySelectorAll(".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in, .animate-blur-in");
    animatedElements.forEach(el => observer.observe(el));
  };
  observeElements();

  // Animación de números para estadísticas
  const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat__k');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const text = target.textContent;
          const hasPlus = text.includes('+');
          const hasPercent = text.includes('%');
          const cleanText = text.replace(/[^0-9]/g, '');
          const number = parseInt(cleanText);
          
          if (!isNaN(number) && number > 0) {
            let current = 0;
            const increment = number / 50;
            const duration = 1500;
            const stepTime = duration / 50;
            
            const counter = setInterval(() => {
              current += increment;
              if (current >= number) {
                current = number;
                clearInterval(counter);
              }
              let display = Math.round(current);
              if (hasPlus) display = '+' + display;
              if (hasPercent) display = display + '%';
              target.textContent = display;
            }, stepTime);
          }
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
  };
  animateNumbers();

  // Lightbox para imágenes de galería
  const initLightbox = () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImg) return;

    galleryImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const src = img.src;
        const alt = img.alt || 'Imagen del proyecto';
        
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  };
  initLightbox();


  // Smooth scroll mejorado para navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Efecto de typing en el hero h1
  const initTypingEffect = () => {
    const typewriterEl = document.getElementById('typewriter');
    if (!typewriterEl) return;
    
    const words = ['webs, sistemas, apps', 'soluciones digitales', 'software a medida', 'experiencias únicas'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    setTimeout(type, 1000);
  };
  initTypingEffect();

  // Filtros de Portafolio
  const initPortfolioFilters = () => {
    const filters = document.querySelectorAll('.portfolio__filter');
    const projects = document.querySelectorAll('.pcard');

    if (!filters.length) return;

    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.dataset.filter;

        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        projects.forEach(project => {
          const projectCategory = project.dataset.category;
          
          if (category === 'all' || projectCategory === category) {
            project.style.display = 'flex';
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              project.style.opacity = '1';
              project.style.transform = 'translateY(0)';
            }, 50);
          } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              project.style.display = 'none';
            }, 400);
          }
        });
      });
    });
  };
  initPortfolioFilters();

  // Reducir animaciones si el usuario lo prefiere (accesibilidad)
  const respectReducedMotion = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const particles = document.querySelector('.particles');
      if (particles) particles.style.display = 'none';
    }
  };
  respectReducedMotion();

  // Testimonial Navigation
  const initTestimonialNav = () => {
    const navButtons = document.querySelectorAll('.testimonial-nav');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (!navButtons.length || !slides.length) return;

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.dataset.index;

        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        slides.forEach(slide => {
          slide.classList.remove('active');
          if (slide.dataset.slide === index) {
            slide.classList.add('active');
          }
        });
      });
    });
  };
  initTestimonialNav();

  // === ENTERPRISE UPGRADE ===

  // Auto-rotate Testimonials every 6 seconds
  const initTestimonialAutoRotate = () => {
    const navButtons = document.querySelectorAll('.testimonial-nav');
    const slides = document.querySelectorAll('.testimonial-slide');
    if (!navButtons.length || !slides.length) return;

    let currentIndex = 0;
    let isPaused = false;
    const container = document.querySelector('.testimonials-split');

    const goToSlide = (index) => {
      navButtons.forEach(b => b.classList.remove('active'));
      slides.forEach(s => s.classList.remove('active'));
      if (navButtons[index]) navButtons[index].classList.add('active');
      if (slides[index]) slides[index].classList.add('active');
      currentIndex = index;
    };

    setInterval(() => {
      if (!isPaused) {
        const next = (currentIndex + 1) % slides.length;
        goToSlide(next);
      }
    }, 6000);

    if (container) {
      container.addEventListener('mouseenter', () => isPaused = true);
      container.addEventListener('mouseleave', () => isPaused = false);
    }
  };
  initTestimonialAutoRotate();

  // Stagger animation observer for grouped elements
  const initStaggerObserver = () => {
    const groups = [
      '.grid3 .svc',
      '.steps .step',
      '.pricing .price',
      '.team--cards .person'
    ];

    groups.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, i) => {
        el.classList.add(`stagger-${Math.min(i + 1, 6)}`);
      });
    });
  };
  initStaggerObserver();
})();