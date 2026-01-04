# NexoIT - Sitio Web Profesional

Sitio web de NexoIT con animaciones y efectos modernos inspirados en animate-ui.com y uiverse.io.

## 🚀 Mejoras Implementadas

### Secciones Nuevas
- ✅ **Testimonios de Clientes** - Sección con 3 testimonios, avatares con iniciales, estrellas de calificación y efectos de hover con glow
- ✅ **Typewriter Effect en Hero** - Efecto de máquina de escribir que cambia palabras dinámicamente (sistemas, apps, soluciones digitales, software a medida, experiencias únicas)
- ✅ **Masonry Layout en Portafolio** - Cards de diferentes tamaños (large, tall) con layout tipo Pinterest
- ✅ **Accordion Mejorado (FAQ)** - Mejor animación de apertura/cierre con barra lateral verde y transiciones suaves
- ✅ **Preloader Animado** - Loader elegante con logo, 3 anillos giratorios y animaciones de pulse

### Animaciones y Efectos
- ✅ **Botones con efectos de shimmer y glow**
- ✅ **Efectos de ripple al hacer clic**
- ✅ **Animaciones de entrada mejoradas (fade, scale, slide, blur)**
- ✅ **Efectos de hover en cards con glow y escala**
- ✅ **Partículas flotantes animadas en el fondo**
- ✅ **Animaciones de gradiente en texto**
- ✅ **Efectos de neón pulsante**
- ✅ **Animaciones de parallax en imágenes**
- ✅ **Contador animado para estadísticas**
- ✅ **Efectos glassmorphism y neumorphism**
- ✅ **Transiciones suaves con cubic-bezier**
- ✅ **Typewriter effect en títulos**
- ✅ **Preloader animado con múltiples anillos**

### Mejoras de UX/UI
- ✅ **Header con blur y efectos de sombra al hacer scroll**
- ✅ **Navegación con animaciones de hover**
- ✅ **Inputs con efectos de focus mejorados**
- ✅ **FAQ con animaciones suaves**
- ✅ **Botón "Subir" con efectos de glow y shimmer**
- ✅ **Smooth scroll mejorado**
- ✅ **Lightbox para imágenes con animaciones**

### Características Técnicas
- ✅ **100% Responsive**
- ✅ **Optimizado para rendimiento**
- ✅ **Accesibilidad (ARIA)**
- ✅ **SEO optimizado**
- ✅ **Código limpio y organizado**

## 📁 Estructura de Archivos

```
p-gina-web-NexoIT/
├── index.html              # Página principal
├── casos-exito.html        # Página de casos de éxito
├── privacidad.html         # Política de privacidad
├── terminos.html           # Términos y condiciones
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos principales
│   │   └── animations.css  # Animaciones avanzadas
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   ├── img/
│   │   ├── icons/          # Iconos SVG
│   │   ├── projects/       # Imágenes de proyectos
│   │   ├── team/           # Fotos del equipo
│   │   └── logo.jpg        # Logo de la empresa
│   └── video/
│       └── promo.mp4       # Video promocional
├── proyectos/              # Páginas de proyectos individuales
├── robots.txt              # Robots.txt para SEO
├── sitemap.xml             # Sitemap XML
└── README.txt              # README original
```

## 🎨 Clases de Animación Disponibles

### Animaciones de Entrada
- `.animate-on-scroll` - Aparece al hacer scroll hacia arriba
- `.animate-slide-left` - Desliza desde la izquierda
- `.animate-slide-right` - Desliza desde la derecha
- `.animate-scale-in` - Escala desde 0.9 a 1
- `.animate-blur-in` - Aparece con efecto de blur

### Delays
- `.animate-delay-1` - 0.1s de delay
- `.animate-delay-2` - 0.2s de delay
- `.animate-delay-3` - 0.3s de delay
- `.animate-delay-4` - 0.4s de delay
- `.animate-delay-5` - 0.5s de delay

### Efectos Especiales
- `.gradient-animated` - Texto con gradiente animado
- `.neon-text` - Efecto de neón pulsante
- `.glitch` - Efecto de glitch al hover
- `.bounce-soft` - Rebote suave
- `.heartbeat` - Efecto de latido
- `.wiggle` - Movimiento de lado a lado
- `.zoom-in` - Zoom rápido
- `.glow-circular` - Glow circular pulsante
- `.border-animated` - Borde con gradiente animado
- `.float-diagonal` - Flotación diagonal
- `.spin-slow` - Rotación lenta

### Efectos Dinámicos (Automáticos)
- **Typewriter Effect** - Efecto de máquina de escribir en el Hero (JavaScript)
- **Masonry Layout** - Cards de diferentes tamaños en portafolio (CSS)
- **Preloader** - Loader animado con múltiples anillos (CSS + JS)

### Clases para Portafolio
- `.pcard` - Card normal del portafolio
- `.pcard.large` - Card que ocupa 2 columnas
- `.pcard.tall` - Card que ocupa 2 filas

### Efectos de Estilo
- `.glassmorphism` - Efecto de cristal
- `.neumorphism` - Efecto neumórfico
- `.gradient-border` - Borde con gradiente
- `.hover-slide` - Efecto de slide al hover
- `.icon-rotate` - Icono que rota al hover
- `.highlight-text` - Texto con resaltado

## 🔧 Personalización

### Colores (CSS Variables)
Edita las variables CSS en `styles.css`:

```css
:root{
  --bg:#070b12;              /* Color de fondo principal */
  --bg2:#0b1220;             /* Color de fondo secundario */
  --text:#eaf2ff;            /* Color de texto principal */
  --muted:rgba(234,242,255,.72); /* Color de texto secundario */
  --green:#2ef59a;           /* Color verde principal */
  --green2:#6cfcc1;          /* Color verde secundario */
  --cyan:#43c8ff;            /* Color cian */
  --glow: 0 0 30px rgba(46,245,154,.4); /* Efecto de glow */
  --glow-cyan: 0 0 30px rgba(67,200,255,.4); /* Glow cian */
  --radius: 20px;           /* Radio de borde */
  --radius2: 28px;           /* Radio de borde grande */
  --max: 1120px;             /* Ancho máximo del contenedor */
}
```

### Información de Contacto
Edita en `main.js`:

```javascript
const COMPANY_WHATSAPP = "51982108849"; // Número de WhatsApp
const COMPANY_EMAIL = "nexoit90@gmail.com"; // Email de contacto

const SOCIAL = {
  facebook: "https://www.facebook.com/tu-pagina",
  instagram: "https://www.instagram.com/tu-pagina",
  tiktok: "https://www.tiktok.com/@tu-pagina"
};
```

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🚀 Deployment

### Netlify
1. Sube el proyecto a GitHub
2. Conecta tu repositorio a Netlify
3. Automatic deployment

### Vercel
1. Sube el proyecto a GitHub
2. Conecta tu repositorio a Vercel
3. Automatic deployment

### Hosting Tradicional
1. Sube todos los archivos a tu hosting vía FTP
2. Asegúrate de mantener la estructura de carpetas
3. El sitio estará listo

## 🎯 Características Principales

### Header
- Sticky con blur y efectos al scroll
- Navegación responsive con menú hamburguesa
- Logo con efectos de hover
- Links con animaciones de underline
- **Nuevo**: Link a Testimonios

### Hero Section
- **Nuevo**: Typewriter effect en el título que cambia palabras dinámicamente
- Títulos con gradientes animados
- Estadísticas con contador animado
- Card con efectos de rotación y glow
- Partículas flotantes en el fondo

### Servicios
- Cards con efectos de hover elevados
- Iconos SVG personalizados
- Animaciones de entrada escalonadas
- Efectos de glow al hover

### Portafolio
- **Nuevo**: Masonry layout con cards de diferentes tamaños (large, tall)
- Cards con imágenes y calificaciones
- Efectos de parallax en imágenes
- Animaciones de zoom al hover
- Lightbox para ver imágenes en grande

### Testimonios
- **Nuevo**: Sección con 3 testimonios de clientes
- Avatares con iniciales y gradientes
- Estrellas de calificación animadas
- Efectos de hover con glow y elevación
- Texto en cursiva estilo "quote"

### Equipo
- Cards con fotos y descripciones
- Efectos de rotación en avatares
- Hover con glow y escala
- Animaciones suaves

### Contacto
- Formulario con validación
- Envío por WhatsApp automático
- Efectos de glassmorphism
- Links con iconos animados

### Preloader
- **Nuevo**: Loader animado con logo de la empresa
- 3 anillos giratorios con diferentes velocidades
- Animación de pulse en el logo
- Texto "Cargando..." con efecto de pulse
- Desaparece suavemente cuando la página carga

## 📊 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Twitter Cards
- Sitemap XML
- Robots.txt
- Estructura semántica HTML5
- Etiquetas ARIA para accesibilidad

## 🔐 Seguridad

- No se incluyen secrets en el código
- Enlaces externos con `rel="noopener noreferrer"`
- Formularios con validación
- HTTPS recomendado

## 📝 Licencia

© 2025 NexoIT. Todos los derechos reservados.

## 👨‍💻 Desarrollado por

**Piero & Eri**
- Desarrollo web & software
- Animaciones y UX/UI
- Optimización y performance

---

**¡Tu proyecto digital listo para destacar!** 🚀