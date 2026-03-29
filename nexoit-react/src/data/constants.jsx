import React from 'react';

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: 'casos-exito.html', label: 'Casos de Éxito' },
  { href: '#planes', label: 'Planes' },
  { href: '#faq', label: 'FAQ' },
];

export const COMPANY_WHATSAPP = '51925585217';
export const COMPANY_EMAIL = 'nexoit90@gmail.com';
export const SOCIAL = {
  facebook: 'https://www.facebook.com/share/1J2pU7xaFT/',
  linkedin: 'https://www.linkedin.com/company/nexoittech/',
  tiktok: 'https://www.tiktok.com/@nexo.it'
};

export const SERVICES = [
  {
    title: 'Páginas web profesionales',
    description: 'Landing pages, portafolios, catálogos y e‑commerce con diseño moderno, responsive y SEO.',
    features: ['Diseño UX/UI', 'Velocidad y optimización', 'Hosting + dominio (opcional)'],
    icon: 'web'
  },
  {
    title: 'Apps móviles y PWA',
    description: 'Aplicaciones para Android/iOS o web apps instalables (PWA) con login, roles y notificaciones.',
    features: ['Flutter / React Native', 'Integración de pagos', 'Publicación en tiendas (opcional)'],
    icon: 'mobile'
  },
  {
    title: 'Sistemas & software a medida',
    description: 'Automatizamos procesos: ventas, inventario, reportes, control de clientes, dashboards y más.',
    features: ['SQL / APIs', 'Roles y permisos', 'Escalable y seguro'],
    icon: 'systems'
  },
  {
    title: 'Asesoría y proyectos',
    description: 'Te apoyamos en tu proyecto: arquitectura, base de datos, front-end, back-end, documentación y despliegue.',
    features: ['Buenas prácticas', 'Git/GitHub', 'Documentación y entregables'],
    icon: 'advisory'
  },
  {
    title: 'Automatizaciones',
    description: 'Conectamos herramientas (forms, Excel/Sheets, CRM, WhatsApp, correo) para ahorrar tiempo y reducir errores.',
    features: ['Flujos de trabajo', 'Notificaciones', 'Reportes automáticos'],
    icon: 'automation'
  },
  {
    title: 'Mantenimiento & soporte',
    description: 'Actualizaciones, mejoras, monitoreo y soporte continuo para que tu sistema siempre esté al 100%.',
    features: ['Backups', 'Seguridad', 'Mejoras evolutivas'],
    icon: 'support'
  }
];

export const SERVICE_ICONS = {
  web: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3.1a15.6 15.6 0 0 0-1.2-5.1A8.02 8.02 0 0 1 19.9 11ZM12 4c1 1.3 1.8 3.5 2.2 7H9.8C10.2 7.5 11 5.3 12 4Zm-3.6 1.9A15.6 15.6 0 0 0 7.2 11H4.1a8.02 8.02 0 0 1 4.3-5.1ZM4.1 13h3.1c.2 2 .7 3.8 1.2 5.1A8.02 8.02 0 0 1 4.1 13Zm7.9 7c-1-1.3-1.8-3.5-2.2-7h4.4c-.4 3.5-1.2 5.7-2.2 7Zm3.6-1.9c.5-1.3 1-3.1 1.2-5.1h3.1a8.02 8.02 0 0 1-4.3 5.1Z" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 18H7V5h10v14Z" />
    </svg>
  ),
  systems: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1l-.4-2.7h-4l-.4 2.7c-.6.2-1.2.5-1.7 1l-2.5-1-2 3.5L4.6 11a7.7 7.7 0 0 0 0 2L2.5 14.6l2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.7h4l.4-2.7c.6-.2 1.2-.5 1.7-1l2.5 1 2-3.5L19.4 13ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 6h-8l-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H3V6h7.2l2 2H21v10Z" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-10 10v3a3 3 0 0 0 3 3h2v-8H5a7 7 0 0 1 14 0h-2v8h2a3 3 0 0 0 3-3v-3A10 10 0 0 0 12 2Zm-1 15h2v2h-2v-2Zm0-10h2v8h-2V7Z" />
    </svg>
  )
};

export const PORTFOLIO_PROJECTS = [
  {
    title: 'Plataforma de E-commerce',
    year: 2026,
    description: 'Sistema completo de administración de tienda en línea con roles de usuario, seguimiento de pedidos y dashboard interactivo.',
    tags: ['E-commerce', 'Dashboard', 'PHP + MySQL'],
    category: 'ecommerce',
    image: '/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce1.webp',
    link: 'proyectos/Sistema de Gestión.html',
    badge: 'Destacado'
  },
  {
    title: 'Landing Page Restaurante',
    year: 2025,
    description: 'Landing page moderna para restaurante de alta gama con diseño responsive y optimización de rendimiento.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    category: 'web',
    image: '/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante1.webp',
    link: 'proyectos/cola-atencion.html',
    badge: 'Popular'
  },
  {
    title: 'Sistema de Préstamo con Bot',
    year: 2025,
    description: 'Sistema SaaS de gestión de préstamos con panel administrativo y bot automatizado para atención al cliente.',
    tags: ['SaaS', 'React', 'Node.js'],
    category: 'sistema',
    image: '/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot1.webp',
    link: 'proyectos/agencia-viajes.html',
    badge: null
  },
  {
    title: 'Página Web Empresarial para Clínica',
    year: 2024,
    description: 'Sitio web corporativo para clínica en Piura con agendamiento de citas online, especialidades médicas y diseño moderno.',
    tags: ['Web Empresarial', 'HTML/CSS/JS', 'PHP'],
    category: 'web',
    image: '/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica1.webp',
    link: 'proyectos/tienda-online.html',
    badge: null
  },
  {
    title: 'App Web Lavandería',
    year: 2024,
    description: 'Aplicación web para lavandería en Piura con gestión de pedidos, seguimiento en tiempo real y catálogo de servicios.',
    tags: ['Aplicación Web', 'Frontend', 'Backend'],
    category: 'app',
    image: '/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería1.webp',
    link: 'proyectos/lavanderia.html',
    badge: null
  }
];

export const PLANS = {
  web: [
    {
      tag: 'Landing Page',
      name: 'Starter',
      description: 'Para emprendedores y marcas que quieren captar clientes rápido.',
      price: '$220',
      note: 'Pago único · Entrega 7-12 días hábiles',
      features: [
        '1 página con 3 a 5 secciones',
        'Diseño moderno y responsive',
        'Hero, servicios, contacto y WhatsApp',
        'Formulario de contacto',
        'Optimización de velocidad'
      ],
      featured: false
    },
    {
      tag: 'Web Empresarial',
      name: 'Business',
      description: 'Presencia digital completa con panel de administración.',
      price: '$350',
      note: 'Pago único · Entrega 2-3 semanas',
      features: [
        'Hasta 8 secciones / páginas internas',
        'Diseño profesional personalizado',
        'Panel de administración de contenido',
        'SEO básico (metatags, velocidad, sitemap)',
        'WhatsApp, correo y formularios avanzados',
        'Soporte técnico 30 días'
      ],
      featured: true
    },
    {
      tag: 'Tienda Online',
      name: 'E-commerce',
      description: 'Para negocios que venden productos y quieren una tienda funcional.',
      price: '$450',
      note: 'Pago en etapas · Entrega 3-5 semanas',
      features: [
        'Catálogo de productos con filtros',
        'Carrito de compras',
        'Panel admin para stock y pedidos',
        'Pasarela de pagos (Yape, Stripe…)',
        'Diseño responsive y optimizado',
        'Soporte 30 días'
      ],
      featured: false
    }
  ],
  sistemas: [
    {
      tag: 'Gestión',
      name: 'Sistema Básico',
      description: 'Digitaliza y automatiza los procesos internos de tu empresa.',
      price: '$380',
      note: 'Pago en etapas · Entrega 3-5 semanas',
      features: [
        'Panel administrativo (dashboard)',
        'Módulos de clientes, ventas o inventario',
        'Gestión de usuarios y roles',
        'Base de datos estructurada',
        'Reportes exportables',
        'Soporte técnico 30 días'
      ],
      featured: false
    },
    {
      tag: 'Plataforma SaaS',
      name: 'SaaS Completo',
      description: 'Plataforma multi-usuario con suscripciones o gestión avanzada.',
      price: '$550',
      note: 'Pago en etapas · Entrega 6-10 semanas',
      features: [
        'Arquitectura multi-tenant (SaaS)',
        'Autenticación con roles y permisos',
        'Dashboard con métricas en tiempo real',
        'Módulos a medida (CRM, reservas…)',
        'APIs REST para integraciones',
        'Despliegue en servidor + capacitación 60 días'
      ],
      featured: true
    }
  ],
  apps: [
    {
      tag: 'App Web',
      name: 'PWA',
      description: 'App instalable desde el navegador, sin publicar en tiendas.',
      price: '$500',
      note: 'Pago en etapas · Entrega 3-5 semanas',
      features: [
        'Funciona en celular, tablet y PC',
        'Instalable desde el navegador',
        'Login de usuarios y roles',
        'Notificaciones push',
        'Funcionamiento offline básico',
        'Backend con API REST'
      ],
      featured: true
    },
    {
      tag: 'App Móvil',
      name: 'App Nativa',
      description: 'App publicada en Google Play y/o App Store con Flutter.',
      price: '$750',
      note: 'Pago en etapas · Entrega 6-12 semanas',
      features: [
        'Android e iOS desde un solo código (Flutter)',
        'Login, registro y perfiles de usuario',
        'Integración con backend (API / Firebase)',
        'Notificaciones push',
        'Diseño UX/UI moderno y fluido',
        'Publicación en Google Play + soporte 60 días'
      ],
      featured: false
    }
  ]
};

export const TEAM_MEMBERS = [
  {
    initials: 'PL',
    name: 'Piero Antonio Lazo Ancajima',
    role: 'Co‑fundador • Desarrollo web & sistemas',
    description: 'Frontend, backend, bases de datos, automatización, despliegue y optimización.'
  },
  {
    initials: 'EV',
    name: 'Eri Jampier Valladolid Cruzado',
    role: 'Co‑fundador • Apps & web',
    description: 'Arquitectura, integración, automatización y desarrollo de soluciones.'
  },
  {
    initials: 'DE',
    name: 'Diego Espinoza Rodriguez',
    role: 'Desarrollador & Marketing',
    description: 'Soluciones digitales, estrategias de marketing y optimización de presencia online.'
  }
];

export const TESTIMONIALS = [
  {
    number: '01',
    text: 'Implementaron un sistema de gestión de pedidos y seguimiento que optimizó completamente nuestra operación de tienda online. El dashboard es intuitivo y el equipo estuvo siempre disponible.',
    highlight: '+60% eficiencia',
    author: 'María González',
    company: 'CEO & Founder · Plataforma de E-commerce',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    navImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
    project: 'Plataforma de E-commerce'
  },
  {
    number: '02',
    text: 'El bot automatizado para atención al cliente y el panel administrativo han reducido significativamente nuestro tiempo de gestión. El sistema de préstamos funciona de manera impecable.',
    highlight: '+80% más rápido',
    author: 'Carlos Rodríguez',
    company: 'Gerente de Operaciones · Sistema de Préstamo con Bot',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    navImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face',
    project: 'Sistema de Préstamo con Bot'
  },
  {
    number: '03',
    text: 'La aplicación web para lavandería permite a nuestros clientes hacer seguimiento de pedidos en tiempo real. El catálogo de servicios y la gestión de pedidos han mejorado nuestro servicio enormemente.',
    highlight: '+500 pedidos/mes',
    author: 'Laura Pérez',
    company: 'Directora · Lavandería App',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face',
    navImage: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=120&h=120&fit=crop&crop=face',
    project: 'Lavandería App'
  }
];

export const FAQS = [
  {
    question: '¿Cuánto tiempo demoran en desarrollar una página web?',
    answer: 'El tiempo depende del alcance del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio web completo puede tomar 3-6 semanas. Siempre te damos un cronograma claro antes de iniciar.'
  },
  {
    question: '¿Ofrecen mantenimiento y soporte?',
    answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, seguridad, backups y soporte técnico para que tu sitio o aplicación siempre esté funcionando correctamente.'
  },
  {
    question: '¿Pueden trabajar con tecnologías específicas?',
    answer: 'Absolutamente. Tenemos experiencia con HTML/CSS/JS, React, Node.js, PHP, SQL, Firebase y más. Si necesitas una tecnología específica, podemos adaptarnos a tus requerimientos.'
  },
  {
    question: '¿Qué incluye la entrega final?',
    answer: 'La entrega incluye el código fuente completo, documentación, guía de uso, despliegue en el servidor de tu elección y un periodo de soporte inicial para asegurar que todo funcione correctamente.'
  },
  {
    question: '¿Cómo funcionan los pagos?',
    answer: 'Generalmente trabajamos con un anticipo inicial para comenzar el proyecto y pagos por hitos o según el avance. Los términos exactos se definen en la propuesta antes de iniciar.'
  },
  {
    question: '¿Realizan proyectos fuera de Perú?',
    answer: 'Sí, trabajamos con clientes de cualquier parte del mundo. La comunicación se realiza por WhatsApp, correo, videollamadas y otras herramientas digitales, lo que nos permite colaborar eficientemente sin importar la ubicación.'
  }
];

export const PROCESS_STEPS = [
  { number: 1, title: 'Brief + objetivos', description: 'Definimos qué vas a lograr, público, funciones, estilo y fecha de entrega.' },
  { number: 2, title: 'Propuesta + prototipo', description: 'Te mostramos un diseño base y el flujo del sistema antes de programar.' },
  { number: 3, title: 'Desarrollo', description: 'Construimos por módulos. Te compartimos avances y versiones de prueba.' },
  { number: 4, title: 'Pruebas + ajuste', description: 'Validamos rendimiento, seguridad y corregimos detalles de UX.' },
  { number: 5, title: 'Entrega + soporte', description: 'Publicamos/instalamos y te dejamos guía de uso + soporte inicial.' },
];