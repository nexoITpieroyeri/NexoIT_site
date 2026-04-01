import React, { useRef, useEffect } from "react";

const PixelSnow = ({ color = "#0080ff", variant = "snowflake", count = 80 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 3,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.6 + 0.2
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
        if (variant === "snowflake") {
          // Forma de cruz tipo copo de nieve
          ctx.fillRect(p.x, p.y + p.size / 3, p.size, p.size / 3);
          ctx.fillRect(p.x + p.size / 3, p.y, p.size / 3, p.size);
        } else {
          // Cuadrado básico (pixel)
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas.height) {
          p.y = 0 - p.size;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) {
          p.x = 0 - p.size;
        } else if (p.x < 0 - p.size) {
          p.x = canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, variant, count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0, // se quedó al fondo de todo
      }}
    />
  );
};

export default PixelSnow;
