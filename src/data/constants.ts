export const NAV_LINKS = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#portafolio', label: 'Portafolio' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#planes', label: 'Planes' },
  { href: '/#faq', label: 'FAQ' },
] as const;

export const COMPANY_WHATSAPP = '51925585217';
export const COMPANY_EMAIL = 'nexoit90@gmail.com';
export const SOCIAL = {
  facebook: 'https://www.facebook.com/share/1J2pU7xaFT/',
  linkedin: 'https://www.linkedin.com/company/nexoittech/',
  tiktok: 'https://www.tiktok.com/@nexo.it',
  instagram: 'https://www.instagram.com/nexo.it/',
} as const;

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: 'web' | 'mobile' | 'systems' | 'advisory' | 'automation' | 'support';
}

export const SERVICES: Service[] = [
  { title: 'Páginas web profesionales', description: 'Landing pages, portafolios, catálogos y ecommerce con diseño moderno, responsive y SEO.', features: ['Diseño UX/UI', 'Velocidad y optimización', 'Hosting + dominio (opcional)'], icon: 'web' },
  { title: 'Apps móviles y PWA', description: 'Aplicaciones para Android/iOS o web apps instalables (PWA) con login, roles y notificaciones.', features: ['Flutter / React Native', 'Integración de pagos', 'Publicación en tiendas (opcional)'], icon: 'mobile' },
  { title: 'Sistemas y software a medida', description: 'Automatizamos procesos: ventas, inventario, reportes, control de clientes, dashboards y más.', features: ['SQL / APIs', 'Roles y permisos', 'Escalable y seguro'], icon: 'systems' },
  { title: 'Asesoría y proyectos', description: 'Te apoyamos en tu proyecto: arquitectura, base de datos, front-end, back-end, documentación y despliegue.', features: ['Buenas prácticas', 'Git/GitHub', 'Documentación y entregables'], icon: 'advisory' },
  { title: 'Automatizaciones', description: 'Conectamos herramientas (forms, Excel/Sheets, CRM, WhatsApp, correo) para ahorrar tiempo y reducir errores.', features: ['Flujos de trabajo', 'Notificaciones', 'Reportes automáticos'], icon: 'automation' },
  { title: 'Mantenimiento y soporte', description: 'Actualizaciones, mejoras, monitoreo y soporte continuo para que tu sistema siempre esté al 100%.', features: ['Backups', 'Seguridad', 'Mejoras evolutivas'], icon: 'support' },
];

export const PORTFOLIO_PROJECTS = [
  { title: 'Plataforma de E-commerce', slug: 'ecommerce', year: 2026, description: 'Sistema completo de administración de tienda en línea con roles de usuario, seguimiento de pedidos y dashboard interactivo.', fullDescription: 'Sistema completo de administración de tienda en línea con roles de usuario (administrador, vendedor, cliente), seguimiento de pedidos en tiempo real, reportes automatizados y dashboard interactivo con indicadores clave de rendimiento.', features: ['Gestión de inventario y productos', 'Control de pedidos y estados de entrega', 'Panel de reportes con gráficas', 'Módulo de usuarios y permisos', 'Notificaciones automáticas'], tags: ['E-commerce', 'Dashboard', 'PHP + MySQL'], category: 'ecommerce', image: '/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce1.webp', gallery: ['/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce1.webp', '/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce2.webp', '/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce3.webp'], badge: 'Destacado' },
  { title: 'Landing Page Restaurante', slug: 'landing-restaurante', year: 2025, description: 'Landing page moderna para restaurante de alta gama con diseño responsive y optimización de rendimiento.', fullDescription: 'Desarrollo de una landing page moderna para un restaurante de alta gama, enfocada en la conversión, mostrando el menú interactivo, reserva de mesas online y galería de alta calidad con optimización avanzada de rendimiento para Web Vitals.', features: ['Diseño responsive premium', 'Optimización de SEO y velocidad', 'Sistema de reservas integrado', 'Menú interactivo y dinámico'], tags: ['React', 'Next.js', 'Tailwind CSS'], category: 'web', image: '/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante1.webp', gallery: ['/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante1.webp', '/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante2.webp', '/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante3.webp'], badge: 'Popular' },
  { title: 'Sistema de Préstamo con Bot', slug: 'sistema-prestamo', year: 2025, description: 'Sistema SaaS de gestión de préstamos con panel administrativo y bot automatizado para atención al cliente.', fullDescription: 'Plataforma SaaS diseñada para agencias de préstamos, integrando un bot conversacional por WhatsApp para calificar prospectos automáticamente y un panel administrativo completo para controlar desembolsos, cuotas y mora.', features: ['Bot de WhatsApp automatizado', 'Dashboard financiero', 'Asignación automática de analistas', 'Módulo de alertas de cobro'], tags: ['SaaS', 'React', 'Node.js'], category: 'sistema', image: '/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot1.webp', gallery: ['/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot1.webp', '/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot2.webp', '/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot3.webp', '/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot4.webp'], badge: null },
  { title: 'Página Web Empresarial para Clínica', slug: 'web-clinica', year: 2024, description: 'Sitio web corporativo para clínica en Piura con agendamiento de citas online, especialidades médicas y diseño moderno.', fullDescription: 'Sitio web corporativo e institucional para una importante clínica en Piura. Incluye un sistema de agendamiento de citas online, catálogo detallado de especialidades médicas, blog de salud y diseño limpio que inspira confianza.', features: ['Agendamiento de citas en línea', 'Catálogo de especialidades', 'Integración con CRM médico', 'Blog de noticias'], tags: ['Web Empresarial', 'HTML/CSS/JS', 'PHP'], category: 'web', image: '/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica1.webp', gallery: ['/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica1.webp', '/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica2.webp', '/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica3.webp'], badge: null },
  { title: 'App Web Lavandería', slug: 'lavanderia', year: 2024, description: 'Aplicación web para lavandería en Piura con gestión de pedidos, seguimiento en tiempo real y catálogo de servicios.', fullDescription: 'Aplicación PWA escalable para una cadena de lavanderías. Permite a los usuarios solicitar recogidas, realizar seguimiento del estado de sus prendas en tiempo real, visualizar el catálogo de servicios y procesar pagos integrados.', features: ['Seguimiento GPS de conductores', 'Estados del pedido en tiempo real', 'Catálogo interactivo', 'Pasarela de pagos en línea'], tags: ['Aplicación Web', 'Frontend', 'Backend'], category: 'app', image: '/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería1.webp', gallery: ['/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería1.webp', '/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería2.webp', '/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería3.webp'], badge: null },
];

interface Plan {
  tag: string;
  name: string;
  description: string;
  price: string;
  note: string;
  features: string[];
  featured: boolean;
}

export const PLANS: Record<string, Plan[]> = {
  web: [
    { tag: 'Landing Page', name: 'Starter', description: 'Para emprendedores y marcas que quieren captar clientes rápido.', price: '$220', note: 'Pago único | Entrega 7-12 días hábiles', features: ['1 página con 3 a 5 secciones', 'Diseño moderno y responsive', 'Hero, servicios, contacto y WhatsApp', 'Formulario de contacto', 'Optimización de velocidad'], featured: false },
    { tag: 'Web Empresarial', name: 'Business', description: 'Presencia digital completa con panel de administración.', price: '$350', note: 'Pago único | Entrega 2-3 semanas', features: ['Hasta 8 secciones / páginas internas', 'Diseño profesional personalizado', 'Panel de administración de contenido', 'SEO básico (metatags, velocidad, sitemap)', 'WhatsApp, correo y formularios avanzados', 'Soporte técnico 30 días'], featured: true },
    { tag: 'Tienda Online', name: 'E-commerce', description: 'Para negocios que venden productos y quieren una tienda funcional.', price: '$450', note: 'Pago en etapas | Entrega 3-5 semanas', features: ['Catálogo de productos con filtros', 'Carrito de compras', 'Panel admin para stock y pedidos', 'Pasarela de pagos (Yape, Stripe y más)', 'Diseño responsive y optimizado', 'Soporte 30 días'], featured: false },
  ],
  sistemas: [
    { tag: 'Gestión', name: 'Sistema Básico', description: 'Digitaliza y automatiza los procesos internos de tu empresa.', price: '$380', note: 'Pago en etapas | Entrega 3-5 semanas', features: ['Panel administrativo (dashboard)', 'Módulos de clientes, ventas o inventario', 'Gestión de usuarios y roles', 'Base de datos estructurada', 'Reportes exportables', 'Soporte técnico 30 días'], featured: false },
    { tag: 'Plataforma SaaS', name: 'SaaS Completo', description: 'Plataforma multiusuario con suscripciones o gestión avanzada.', price: '$550', note: 'Pago en etapas | Entrega 6-10 semanas', features: ['Arquitectura multi-tenant (SaaS)', 'Autenticación con roles y permisos', 'Dashboard con métricas en tiempo real', 'Módulos a medida (CRM, reservas y más)', 'APIs REST para integraciones', 'Despliegue en servidor + capacitación 60 días'], featured: true },
  ],
  apps: [
    { tag: 'App Web', name: 'PWA', description: 'App instalable desde el navegador, sin publicar en tiendas.', price: '$500', note: 'Pago en etapas | Entrega 3-5 semanas', features: ['Funciona en celular, tablet y PC', 'Instalable desde el navegador', 'Login de usuarios y roles', 'Notificaciones push', 'Funcionamiento offline básico', 'Backend con API REST'], featured: true },
    { tag: 'App Móvil', name: 'App Nativa', description: 'App publicada en Google Play y/o App Store con Flutter.', price: '$750', note: 'Pago en etapas | Entrega 6-12 semanas', features: ['Android e iOS desde un solo código (Flutter)', 'Login, registro y perfiles de usuario', 'Integración con backend (API / Firebase)', 'Notificaciones push', 'Diseño UX/UI moderno y fluido', 'Publicación en Google Play + soporte 60 días'], featured: false },
  ],
};

export const TEAM_MEMBERS = [
  { initials: 'PL', name: 'Piero Antonio Lazo Ancajima', role: 'Co-fundador | Desarrollo web y sistemas', description: 'Frontend, backend, bases de datos, automatización, despliegue y optimización.' },
  { initials: 'EV', name: 'Eri Jampier Valladolid Cruzado', role: 'Co-fundador | Apps y web', description: 'Arquitectura, integración, automatización y desarrollo de soluciones.' },
  { initials: 'DE', name: 'Diego Espinoza Rodriguez', role: 'Desarrollador y Marketing', description: 'Soluciones digitales, estrategias de marketing y optimización de presencia online.' },
];

export const TESTIMONIALS = [
  { number: '01', text: 'Implementaron un sistema de gestión de pedidos y seguimiento que optimizó completamente nuestra operación de tienda online. El dashboard es intuitivo y el equipo estuvo siempre disponible.', highlight: '+60% eficiencia', author: 'María González', company: 'CEO & Founder | Plataforma de E-commerce', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face', navImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face', project: 'Plataforma de E-commerce' },
  { number: '02', text: 'El bot automatizado para atención al cliente y el panel administrativo han reducido significativamente nuestro tiempo de gestión. El sistema de préstamos funciona de manera impecable.', highlight: '+80% más rápido', author: 'Carlos Rodríguez', company: 'Gerente de Operaciones | Sistema de Préstamo con Bot', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face', navImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face', project: 'Sistema de Préstamo con Bot' },
  { number: '03', text: 'La aplicación web para lavandería permite a nuestros clientes hacer seguimiento de pedidos en tiempo real. El catálogo de servicios y la gestión de pedidos han mejorado nuestro servicio enormemente.', highlight: '+500 pedidos/mes', author: 'Laura Pérez', company: 'Directora | Lavandería App', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face', navImage: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=120&h=120&fit=crop&crop=face', project: 'Lavandería App' },
];

export const FAQS = [
  { question: '¿Cuánto tiempo demoran en desarrollar una página web?', answer: 'El tiempo depende del alcance del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio web completo puede tomar 3-6 semanas. Siempre te damos un cronograma claro antes de iniciar.' },
  { question: '¿Ofrecen mantenimiento y soporte?', answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, seguridad, backups y soporte técnico para que tu sitio o aplicación siempre esté funcionando correctamente.' },
  { question: '¿Pueden trabajar con tecnologías específicas?', answer: 'Absolutamente. Tenemos experiencia con HTML/CSS/JS, React, Node.js, PHP, SQL, Firebase y más. Si necesitas una tecnología específica, podemos adaptarnos a tus requerimientos.' },
  { question: '¿Qué incluye la entrega final?', answer: 'La entrega incluye el código fuente completo, documentación, guía de uso, despliegue en el servidor de tu elección y un periodo de soporte inicial para asegurar que todo funcione correctamente.' },
  { question: '¿Cómo funcionan los pagos?', answer: 'Generalmente trabajamos con un anticipo inicial para comenzar el proyecto y pagos por hitos o según el avance. Los términos exactos se definen en la propuesta antes de iniciar.' },
  { question: '¿Realizan proyectos fuera de Perú?', answer: 'Sí, trabajamos con clientes de cualquier parte del mundo. La comunicación se realiza por WhatsApp, correo, videollamadas y otras herramientas digitales, lo que nos permite colaborar eficientemente sin importar la ubicación.' },
];

export const PROCESS_STEPS = [
  { number: 1, title: 'Brief + objetivos', description: 'Definimos qué vas a lograr, público, funciones, estilo y fecha de entrega.' },
  { number: 2, title: 'Propuesta + prototipo', description: 'Te mostramos un diseño base y el flujo del sistema antes de programar.' },
  { number: 3, title: 'Desarrollo', description: 'Construimos por módulos. Te compartimos avances y versiones de prueba.' },
  { number: 4, title: 'Pruebas + ajuste', description: 'Validamos rendimiento, seguridad y corregimos detalles de UX.' },
  { number: 5, title: 'Entrega + soporte', description: 'Publicamos/instalamos y te dejamos guía de uso + soporte inicial.' },
];

export const TECH_LOGOS = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Laravel', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
];
