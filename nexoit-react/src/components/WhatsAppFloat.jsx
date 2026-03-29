import React, { useState, useCallback } from 'react';
import { COMPANY_WHATSAPP } from '../data/constants';

const WhatsAppModal = ({ initialPlan, initialPrice, initialDesc, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    let msg = `Hola, qué tal, soy ${name}, estoy interesado en sus servicios que brindan`;
    if (initialPlan) {
      msg += `, específicamente en el plan ${initialPlan} (desde ${initialPrice} USD). ${initialDesc}`;
    }
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  }, [name, initialPlan, initialPrice, initialDesc, onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className="wa-modal open" onClick={handleOverlayClick}>
      <div className="wa-modal__box">
        <button className="wa-modal__close" onClick={onClose}>&times;</button>
        <h3>Cotizar por WhatsApp</h3>
        <p className="wa-modal__sub">Déjanos tus datos y te atenderemos al instante.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre completo *
            <input
              type="text"
              required
              placeholder="Tu nombre completo"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit" className="wa-modal__btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.37-.03-.51-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.08-.12-.26-.19-.55-.34zM12.05 21.7c-1.73 0-3.43-.46-4.92-1.33l-.35-.21-3.67.96.98-3.57-.23-.37a9.74 9.74 0 0 1-1.49-5.23c0-5.38 4.39-9.76 9.77-9.76 2.61 0 5.07 1.02 6.91 2.87a9.72 9.72 0 0 1 2.86 6.91c-.01 5.39-4.39 9.77-9.77 9.77z" />
            </svg>
            Abrir WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

const WhatsAppFloat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ plan: '', price: '', desc: '' });

  const openModal = useCallback((plan = '', price = '', desc = '') => {
    setModalData({ plan, price, desc });
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <button
        className="wa-float"
        onClick={() => openModal()}
        aria-label="Escríbenos por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path fill="#fff" d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.37-.03-.51-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.08-.12-.26-.19-.55-.34zM12.05 21.7c-1.73 0-3.43-.46-4.92-1.33l-.35-.21-3.67.96.98-3.57-.23-.37a9.74 9.74 0 0 1-1.49-5.23c0-5.38 4.39-9.76 9.77-9.76 2.61 0 5.07 1.02 6.91 2.87a9.72 9.72 0 0 1 2.86 6.91c-.01 5.39-4.39 9.77-9.77 9.77zm8.32-18.15a11.5 11.5 0 0 0-8.29-3.44c-6.36 0-11.53 5.17-11.53 11.53 0 2.03.53 4.01 1.53 5.76l-1.63 5.95 6.1-1.6a11.47 11.47 0 0 0 5.53 1.4c6.36 0 11.53-5.17 11.53-11.53-.01-3.08-1.2-5.97-3.24-8.07z" />
        </svg>
      </button>

      {isModalOpen && (
        <WhatsAppModal
          initialPlan={modalData.plan}
          initialPrice={modalData.price}
          initialDesc={modalData.desc}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export { WhatsAppFloat, WhatsAppModal };
export default WhatsAppFloat;
