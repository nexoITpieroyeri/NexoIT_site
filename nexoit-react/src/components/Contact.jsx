import React, { useState, useCallback } from 'react';
import { COMPANY_WHATSAPP, COMPANY_EMAIL, SOCIAL } from '../data/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    correo: '',
    necesita: '',
    descripcion: ''
  });
  const [copyText, setCopyText] = useState('Copiar mensaje');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const buildMsg = useCallback(() => {
    const { nombre, numero, correo, necesita, descripcion } = formData;
    return [
      `Hola, soy ${nombre}.`,
      "",
      `Número: ${numero}`,
      `Correo: ${correo}`,
      `Necesito: ${necesita}`,
      "",
      "Descripción:",
      descripcion
    ].join("\n");
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { nombre, numero, correo, necesita, descripcion } = formData;
    if (!nombre || !numero || !correo || !necesita || !descripcion) {
      alert("Completa todos los campos para enviar tu solicitud.");
      return;
    }
    const msg = buildMsg();
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }, [formData, buildMsg]);

  const handleCopy = useCallback(async () => {
    const msg = buildMsg();
    try {
      await navigator.clipboard.writeText(msg);
      setCopyText("Copiado");
      setTimeout(() => setCopyText("Copiar mensaje"), 1100);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = msg;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopyText("Copiado");
      setTimeout(() => setCopyText("Copiar mensaje"), 1100);
    }
  }, [buildMsg]);

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section__head">
          <h2>Contacto</h2>
          <p>Contáctanos para cotizar tu proyecto o resolver tus dudas.</p>
        </div>

        <div className="contact">
          <div className="contact__side animate-slide-left">
            <div className="contactcard glassmorphism">
              <h3 className="gradient-animated">Escríbenos</h3>
              <a className="contactcard__link" href={`https://wa.me/${COMPANY_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                WhatsApp: 925585217
              </a>
              <a className="contactcard__link" href={`mailto:${COMPANY_EMAIL}`}>
                Correo: {COMPANY_EMAIL}
              </a>
            </div>

            <div className="contactcard glassmorphism">
              <h3 className="gradient-animated">Redes sociales</h3>
              <p className="muted">Síguenos para ver avances y contenido.</p>
              <div className="social">
                <a className="social__btn icon-rotate" href={SOCIAL.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/icons/facebook.svg" alt="Facebook NexoIT" />
                </a>
                <a className="social__btn icon-rotate" href={SOCIAL.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/icons/linkedin.svg" alt="LinkedIn NexoIT" />
                </a>
                <a className="social__btn icon-rotate" href={SOCIAL.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/icons/tiktok.svg" alt="TikTok NexoIT" />
                </a>
              </div>
            </div>
          </div>

          <form className="form glassmorphism animate-slide-right" onSubmit={handleSubmit}>
            <div className="row">
              <label>
                Nombre
                <input required name="nombre" placeholder="Tu nombre" autoComplete="name" value={formData.nombre} onChange={handleChange} />
              </label>
              <label>
                Número (WhatsApp)
                <input type="tel" required name="numero" placeholder="Tu número" inputMode="tel" autoComplete="tel" pattern="[0-9+\s\-]{7,15}" value={formData.numero} onChange={handleChange} />
              </label>
            </div>

            <div className="row">
              <label>
                Correo
                <input type="email" required name="correo" placeholder="tucorreo@email.com" autoComplete="email" value={formData.correo} onChange={handleChange} />
              </label>
              <label>
                ¿Qué necesitas?
                <select required name="necesita" value={formData.necesita} onChange={handleChange}>
                  <option value="" disabled>Selecciona</option>
                  <option>Web / Landing</option>
                  <option>App móvil</option>
                  <option>Sistema / Software</option>
                  <option>Automatización</option>
                  <option>Asesoría / Proyecto</option>
                </select>
              </label>
            </div>

            <label>
              Descripción
              <textarea required name="descripcion" rows="6" placeholder="Cuéntanos tu idea, funcionalidades, fecha ideal y cualquier referencia." value={formData.descripcion} onChange={handleChange} />
            </label>

            <div className="form__actions">
              <button className="btn" type="submit">Enviar por WhatsApp</button>
              <button className="btn btn--ghost" type="button" onClick={handleCopy}>{copyText}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
