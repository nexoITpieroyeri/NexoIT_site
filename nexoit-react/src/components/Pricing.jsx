import React, { useState, useCallback } from 'react';
import { PLANS } from '../data/constants';

const PlanCard = React.memo(({ plan, onQuote }) => (
  <div className={`plan-card${plan.featured ? ' featured' : ''}`}>
    {plan.featured && <div className="badge">Más pedido</div>}
    <p className="plan-tag">{plan.tag}</p>
    <h3 className="plan-name">{plan.name}</h3>
    <p className="plan-desc">{plan.description}</p>
    <div className="price-row">
      <span className="price-from">Desde</span>
      <span className="price-num">{plan.price}</span>
    </div>
    <p className="price-note">{plan.note}</p>
    <div className="divider"></div>
    <p className="feat-title">Incluye</p>
    <ul className="features">
      {plan.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
    <button
      className={`btn${plan.featured ? ' btn-filled' : ' btn-outline'}`}
      onClick={() => onQuote(plan.name, plan.price, plan.description)}
    >
      Cotizar ahora
    </button>
  </div>
));

PlanCard.displayName = 'PlanCard';

const CATEGORY_CONFIG = [
  { id: 'web', label: 'Páginas Web', count: 3, icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  )},
  { id: 'sistemas', label: 'Sistemas', count: 2, icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17h7M17 14v7"/>
    </svg>
  )},
  { id: 'apps', label: 'Apps', count: 2, icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="20" rx="2"/>
      <circle cx="12" cy="18" r="1" fill="#2ef59a" stroke="none"/>
    </svg>
  )},
];

const Pricing = ({ onCotizar }) => {
  const [activeCategory, setActiveCategory] = useState('web');

  const handleCategoryClick = useCallback((id) => {
    setActiveCategory(id);
  }, []);

  const handleQuote = useCallback((plan, price, desc) => {
    if (onCotizar) {
      onCotizar(plan, price, desc);
    }
  }, [onCotizar]);

  return (
    <section className="section" id="planes">
      <div className="container">
        <div className="section__head">
          <h2>Planes para tu negocio</h2>
          <p className="subtitle">Selecciona la categoría que necesitas. La cotización final varía según alcance.</p>
        </div>

        <div className="categories">
          {CATEGORY_CONFIG.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              <div className="cat-icon">{cat.icon}</div>
              <div className="cat-info">
                <div className="cat-name">{cat.label}</div>
                <div className="cat-count">{cat.count} planes</div>
              </div>
            </button>
          ))}
        </div>

        {Object.entries(PLANS).map(([categoryId, plans]) => (
          <div
            key={categoryId}
            id={`panel-${categoryId}`}
            className={`panel${activeCategory === categoryId ? ' active' : ''}`}
          >
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} onQuote={handleQuote} />
            ))}
          </div>
        ))}

        <p className="footer-note">¿Necesitas algo diferente? <span>Escríbenos</span> y armamos un plan a tu medida.</p>
      </div>
    </section>
  );
};

export default Pricing;
