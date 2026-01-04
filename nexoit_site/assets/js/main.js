// NexoIT - JS principal (menú, scroll, links, formulario WhatsApp)
(() => {
  const navBtn = document.getElementById("navbtn");
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("totop");
  const year = document.getElementById("year");
  const form = document.getElementById("form");
  const copyBtn = document.getElementById("copy");

  const waLink = document.getElementById("waLink");
  const waFooter = document.getElementById("waFooter");
  const fbLink = document.getElementById("fbLink");
  const igLink = document.getElementById("igLink");
  const ttLink = document.getElementById("ttLink");

  // Datos reales (NexoIT)
  const COMPANY_WHATSAPP = "51982108849"; // +51 982108849 (sin +)
  const COMPANY_EMAIL = "nexoit90@gmail.com";

  // Links públicos (actualiza cuando tengas tus URLs oficiales)
  const SOCIAL = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/"
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

  // Botón subir
  const onScroll = () => {
    if (!toTop) return;
    const show = window.scrollY > 400;
    toTop.classList.toggle("show", show);
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
  if (igLink) {
    igLink.href = SOCIAL.instagram;
    igLink.target = "_blank";
    igLink.rel = "noopener noreferrer";
  }
  if (ttLink) {
    ttLink.href = SOCIAL.tiktok;
    ttLink.target = "_blank";
    ttLink.rel = "noopener noreferrer";
  }

  // Formulario -> WhatsApp
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const msg = buildMsg(data);

      // Validación simple
      if (!data.nombre || !data.numero || !data.correo || !data.necesita || !data.descripcion) {
        alert("Completa todos los campos para enviar tu solicitud.");
        return;
      }
      
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

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
  };
  observeElements();

  // Lightbox para imágenes de galería
  const initLightbox = () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = lightbox?.querySelector('.lightbox__content');
    const lightboxClose = lightbox?.querySelector('.lightbox__close');

    if (!lightbox || !lightboxContent) return;

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.alt = img.alt;
        largeImg.className = 'lightbox__content';
        largeImg.style.maxWidth = '90vw';
        largeImg.style.maxHeight = '90vh';
        largeImg.style.objectFit = 'contain';

        lightboxContent.replaceWith(largeImg);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        const newContent = document.createElement('div');
        newContent.className = 'lightbox__content';
        lightbox.lastChild.replaceWith(newContent);
      }, 300);
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
})();