// NexoIT - Global Navigation Script
// This file is loaded once globally and should not be duplicated

(function() {
  // Prevenir inicialización múltiple
  if (window.nexoInitialized) {
    return;
  }
  window.nexoInitialized = true;

  // Smooth scroll para anclas (cerrar menú móvil si está abierto)
  function handleSmoothScroll(e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;
    var href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    var y = target.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', href);
  }

  // Header sticky con soporte para scrollbar del navegador
  function handleStickyHeader() {
    var header = document.querySelector('.navbar');
    if (!header) return;

    var scrollTarget = 50;
    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;
      var isScrolled = currentScroll > scrollTarget;
      if (isScrolled) {
        header.classList.add('navbar--scrolled');
      } else {
        header.classList.remove('navbar--scrolled');
      }
    }, { passive: true });

    if (window.scrollY > scrollTarget) {
      header.classList.add('navbar--scrolled');
    }
  }

  // Animaciones con Intersection Observer
  function handleAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in, .animate-blur-in')
        .forEach(function(el) {
          el.classList.add('is-visible');
        });
      return;
    }
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    
    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in, .animate-blur-in')
      .forEach(function(el) {
        observer.observe(el);
      });
  }

  // WhatsApp Modal
  function handleWhatsApp() {
    const modal = document.getElementById('waModal');
    const floatBtn = document.getElementById('waFloat');
    if (!modal || !floatBtn) return;
    
    const closeBtn = document.getElementById('waModalClose');
    const form = document.getElementById('waForm');
    
    function openModal() { modal.classList.add('open'); }
    function closeModal() { modal.classList.remove('open'); }
    
    floatBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('waName')?.value || '';
        const plan = document.getElementById('waPlan')?.value || '';
        const price = document.getElementById('waPrice')?.value || '';
        const desc = document.getElementById('waDesc')?.value || '';
        
        let msg = 'Hola, soy ' + name + ', me interesa el servicio de NexoIT.';
        if (plan) msg += ' Específicamente el plan ' + plan + ' (' + price + '). ' + desc;
        
        const submitBtn = form.querySelector('.wa-modal__btn');
        if (submitBtn) {
          submitBtn.textContent = 'Abriendo WhatsApp...';
          submitBtn.disabled = true;
        }
        
        window.open('https://wa.me/51925585217?text=' + encodeURIComponent(msg), '_blank');
        closeModal();
        
        setTimeout(function() {
          form.reset();
          if (submitBtn) {
            submitBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M17.472 14.382c-.293-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.293-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.37-.03-.51-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.08-.12-.26-.19-.55-.34zM12.05 21.7c-1.73 0-3.43-.46-4.92-1.33l-.35-.21-3.67.96.98-3.57-.23-.37a9.74 9.74 0 0 1-1.49-5.23c0-5.38 4.39-9.76 9.77-9.76 2.61 0 5.07 1.02 6.91 2.87a9.72 9.72 0 0 1 2.86 6.91c-.01 5.39-4.39 9.77-9.77 9.77z"/></svg> Abrir WhatsApp';
            submitBtn.disabled = false;
          }
        }, 2000);
      });
    }
    
    // Función global para cotizar
    window.cotizarPlan = function(plan, price, desc) {
      const p = document.getElementById('waPlan');
      const pr = document.getElementById('waPrice');
      const d = document.getElementById('waDesc');
      if (p) p.value = plan;
      if (pr) pr.value = price;
      if (d) d.value = desc;
      openModal();
    };
  }

  // Lightbox para imágenes
  function handleLightbox() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (!lb || !img) return;
    
    let imgs = [];
    let idx = 0;
    
    function close() { lb.classList.remove('active'); }
    function update() { if (imgs[idx]) img.src = imgs[idx]; }
    
    window.openLightbox = function(src, alt, list) {
      imgs = (list && list.length) ? list : [src];
      idx = imgs.indexOf(src);
      if (idx < 0) idx = 0;
      update();
      img.alt = alt || '';
      lb.classList.add('active');
    };
    
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    
    if (closeBtn) closeBtn.addEventListener('click', close);
    
    if (prevBtn) prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      idx = (idx - 1 + imgs.length) % imgs.length;
      update();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      idx = (idx + 1) % imgs.length;
      update();
    });
    
lb.addEventListener('click', function(e) {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('active')) {
      close();
    } else if (e.key === 'ArrowLeft' && lb.classList.contains('active')) {
      idx = (idx - 1 + imgs.length) % imgs.length;
      update();
    } else if (e.key === 'ArrowRight' && lb.classList.contains('active')) {
      idx = (idx + 1) % imgs.length;
      update();
    }
  });
  }

  // Typewriter effect
  function handleTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    
    const words = ['webs, sistemas, apps', 'soluciones digitales', 'software a medida', 'experiencias únicas'];
    let wIdx = 0, cIdx = 0, del = false;
    
    function loop() {
      const w = words[wIdx];
      el.textContent = w.substring(0, cIdx);
      if (!del && cIdx < w.length) { 
        cIdx++; 
        setTimeout(loop, 100); 
      } else if (del && cIdx > 0) { 
        cIdx--; 
        setTimeout(loop, 50); 
      } else if (!del && cIdx === w.length) { 
        del = true; 
        setTimeout(loop, 2000); 
      } else { 
        del = false; 
        wIdx = (wIdx + 1) % words.length; 
        setTimeout(loop, 500); 
      }
    }
    loop();
  }

  // Hero: red de nodos animada en canvas (señal cobalto)
  function handleHeroCanvas() {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var nodes = [];
    var w = 0, h = 0;
    var pointer = { x: -9999, y: -9999 };
    var BRAND = '61,123,255';

    function resize() {
      var rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var density = Math.min(Math.max(Math.round((w * h) / 18000), 26), 76);
      nodes = [];
      for (var i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.8
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var maxDist = 140;
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        // enlaces
        for (var j = i + 1; j < nodes.length; j++) {
          var m = nodes[j];
          var dx = n.x - m.x, dy = n.y - m.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            var a = (1 - dist / maxDist) * 0.32;
            ctx.strokeStyle = 'rgba(' + BRAND + ',' + a.toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
        // halo cerca del puntero
        var pdx = n.x - pointer.x, pdy = n.y - pointer.y;
        var pd = Math.sqrt(pdx * pdx + pdy * pdy);
        var near = pd < 120;
        ctx.fillStyle = near ? 'rgba(' + BRAND + ',0.95)' : 'rgba(' + BRAND + ',0.5)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    var raf;
    resize();
    if (prefersReduced) { step(); cancelAnimationFrame(raf); return; }
    window.addEventListener('resize', function () { resize(); }, { passive: true });
    var heroEl = canvas.closest('.hero');
    if (heroEl) {
      heroEl.addEventListener('pointermove', function (e) {
        var rect = canvas.getBoundingClientRect();
        pointer.x = e.clientX - rect.left; pointer.y = e.clientY - rect.top;
      }, { passive: true });
      heroEl.addEventListener('pointerleave', function () { pointer.x = -9999; pointer.y = -9999; });
    }
    // Pausar fuera de viewport
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { if (!raf) raf = requestAnimationFrame(step); }
        else { cancelAnimationFrame(raf); raf = null; }
      });
    }, { threshold: 0 });
    io.observe(canvas);
  }

  // Inicializar todo cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    handleStickyHeader();
    handleAnimations();
    handleWhatsApp();
    handleLightbox();
    handleTypewriter();
    handleHeroCanvas();
  });

  // Event listener global para smooth scroll (se agrega una vez al cargar)
  document.addEventListener('click', handleSmoothScroll, true);

  // Manejar hash al cargar
  window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash && hash !== '#') {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(function() {
          const y = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  });
})();
