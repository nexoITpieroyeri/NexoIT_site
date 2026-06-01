# NexoIT — Design Reference
> Grafito de ingeniería, iluminado por una señal cobalto.

**Theme:** dark

NexoIT proyecta capacidad técnica con confianza tranquila. Una base de grafito casi negro, neutra y precisa, sobre la que el azul cobalto actúa como una señal: marca lo accionable, los datos vivos y los puntos de conexión (el "nexo"). Sin estridencia: el impacto nace de la precisión tipográfica, el espaciado generoso y un motion intencional, no del ruido cromático. Estrategia de color **Committed**: el cobalto es la única voz saturada; todo lo demás es neutro frío.

## Color strategy

Committed — un color de marca (cobalto) que carga la identidad sobre neutros fríos de grafito. Nada de segundo acento saturado compitiendo; los degradados y halos usan el mismo cobalto a baja opacidad.

## Tokens — Colors (OKLCH)

| Token | Hex | OKLCH | Rol |
|-------|-----|-------|-----|
| `--bg` | `#0A0C10` | oklch(0.16 0.012 264) | Fondo base de toda la página. |
| `--bg-2` | `#0E1117` | oklch(0.19 0.013 264) | Fondo alterno de sección, rebajes. |
| `--surface` | `#13171F` | oklch(0.23 0.015 264) | Tarjetas y paneles elevados. |
| `--surface-2` | `#1A2030` | oklch(0.28 0.022 264) | Hover de tarjetas, paneles anidados ligeros. |
| `--border` | `#232A38` | oklch(0.31 0.022 264) | Bordes hairline y divisores. |
| `--border-strong` | `#33405A` | oklch(0.40 0.04 264) | Bordes activos / enfatizados. |
| `--ink` | `#E9EDF4` | oklch(0.94 0.006 264) | Texto principal, títulos. |
| `--ink-muted` | `#A2AEC2` | oklch(0.74 0.02 264) | Texto secundario, descripciones (≥7:1 sobre `--bg`). |
| `--ink-faint` | `#6B7688` | oklch(0.55 0.02 264) | Solo etiquetas / texto grande / metadatos. |
| `--brand` | `#3D7BFF` | oklch(0.62 0.20 264) | Color de marca: CTAs, enlaces, señal. |
| `--brand-hi` | `#6AA1FF` | oklch(0.73 0.15 264) | Hover, halos, líneas vivas. |
| `--brand-ink` | `#05070C` | oklch(0.10 0.01 264) | Texto sobre superficies cobalto. |
| `--ok` | `#3DDC97` | oklch(0.78 0.16 162) | Solo estados de éxito puntuales. |

Halos / glow: `color-mix(in oklch, var(--brand) N%, transparent)`. Nunca un segundo color saturado como relleno.

## Tokens — Typography

Tres familias, eje de contraste claro. Vía Google Fonts.

### Sora — Display / headings · `--font-display`
- **Weights:** 600, 700
- **Rol:** Todos los titulares. Geométrica, confiada, contemporánea. `letter-spacing` -0.02 a -0.035em en tamaños grandes; `text-wrap: balance`.

### Geist — Body / UI · `--font-body`
- **Weights:** 400, 500
- **Rol:** Cuerpo, navegación, etiquetas UI. Grotesca neutra, precisa, legible. Fallback: Inter.

### Geist Mono — Technical · `--font-mono`
- **Weights:** 400, 500
- **Rol:** Etiquetas técnicas, números, kickers de marca, "snippets" de capacidad. Es legítima: la marca ES técnica. Fallback: JetBrains Mono.

### Type scale (fluida)

| Rol | clamp() | Familia | Notas |
|-----|---------|---------|-------|
| display | clamp(2.6rem, 6vw, 5rem) | Sora 700 | hero; tracking -0.035em; balance |
| h2 | clamp(2rem, 4vw, 3.25rem) | Sora 700 | tracking -0.03em; balance |
| h3 | clamp(1.35rem, 2vw, 1.75rem) | Sora 600 | |
| lead | clamp(1.1rem, 1.4vw, 1.35rem) | Geist 400 | subtítulos; ink-muted |
| body | 1rem / 1.0625rem | Geist 400 | line-height 1.65; máx 68ch |
| label | 0.8rem | Geist Mono 500 | uppercase, tracking 0.12em, ink-faint — uso medido |

Escala ≥1.25 entre pasos. Line-height de cuerpo elevado (texto claro sobre oscuro respira más).

## Tokens — Spacing & Shape

Base 4px. Espaciado fluido para ritmo.

- `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-6` 24 · `--space-8` 32 · `--space-12` 48 · `--space-16` 64 · `--space-24` 96 · `--space-32` 128
- Section padding-block: `clamp(4.5rem, 9vw, 8rem)`
- Radii: `--r-sm` 8px · `--r` 14px · `--r-lg` 20px · `--r-xl` 28px · `--r-full` 9999px. (Más redondeado que el 4px anterior: moderno, menos "terminal crudo".)
- Container: `--max` 1200px; `--max-text` 68ch.

## Elevation & materials

- Sombras suaves y profundas, no duras: `--shadow: 0 1px 0 rgba(255,255,255,.03) inset, 0 24px 48px -24px rgba(0,0,0,.6)`.
- Bordes hairline 1px `--border`; en hover suben a `--border-strong` + halo cobalto sutil.
- Glassmorphism solo en el header sticky (backdrop-blur), nunca decorativo en tarjetas.

## Motion

- Curvas ease-out exponenciales: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. Sin bounce/elastic.
- Page-load orquestado en el hero (stagger del título, subtítulo, CTAs, visual). Reveal on-scroll por sección con stagger en listas; cada reveal ajustado a lo que revela, no un reflejo uniforme.
- Hover: transform translateY(-2px) + cambio de borde/halo, 180–220ms.
- Hero: efecto técnico de red de nodos animada (canvas) en cobalto a baja opacidad — demuestra capacidad sin abrumar. Degradado a estático con `prefers-reduced-motion`.
- `@media (prefers-reduced-motion: reduce)`: todo a crossfade/instantáneo; el canvas se congela o se reemplaza por grid estático.

## Layout

- Contenedor máx 1200px centrado; secciones con padding-block fluido y rebajes de fondo alternos (`--bg` / `--bg-2`) para ritmo vertical.
- Composición variada por sección (no todo centrado, no todo tarjetas): hero asimétrico, servicios en bento de tamaños mixtos, proceso como timeline, portafolio con mosaico, pricing con toggle de categoría.
- Grids responsive sin breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- z-index semántico: dropdown 100 · sticky 200 · backdrop 300 · modal 400 · toast 500 · tooltip 600.

## Imagery

- Logos de tecnologías (devicon) en marquesina monocroma que se ilumina a color en hover.
- Capturas reales de proyectos (`.webp` en `/assets/img/projects`) con tratamiento marco + glow cobalto en hover; lightbox para galería.
- Fotos reales del equipo (`/assets/img/team`).
- Hero: escena generativa (canvas red de nodos), no foto. El resto del impacto es tipográfico y de composición.

## Do / Don't

**Do**
- Cobalto solo para lo accionable, datos vivos y la "señal" de marca.
- Neutros fríos de grafito para todo lo demás; jerarquía por escala + peso.
- Motion intencional con `--ease`; siempre alternativa reduced-motion.
- Mono para etiquetas técnicas y números, con medida.

**Don't**
- Nada de verde/violeta/fucsia heredados de Trigger.dev.
- Sin eyebrows en mayúsculas sobre cada sección ni 01/02/03 decorativos (números solo donde la secuencia es real: el proceso).
- Sin gradient-text, sin side-stripe borders, sin glassmorphism decorativo, sin tarjetas anidadas.
- Sin segundo color saturado compitiendo con el cobalto.
