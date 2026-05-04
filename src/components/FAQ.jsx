import React from 'react';
import { FAQS } from '../data/constants';

const FAQ = () => {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head">
          <h2>Preguntas Frecuentes</h2>
          <p>Encuentra respuestas a las consultas más comunes sobre nuestros servicios.</p>
        </div>

        <div className="faq">
          {FAQS.map((faq, i) => (
            <details className="faq__item" key={i} open={i === 0}>
              <summary className="faq__question">{faq.question}</summary>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
