import React from 'react';
import { SERVICES, SERVICE_ICONS } from '../data/constants';

import SpotlightCard from './SpotlightCard';

const ServiceCard = React.memo(({ service, index }) => (
  <SpotlightCard className={`svc animate-on-scroll animate-delay-${index + 1}`}>
    <article style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="svc__icon">{SERVICE_ICONS[service.icon]}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="ul">
        {service.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </article>
  </SpotlightCard>
));

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section__head animate-on-scroll">
          <h2>Servicios</h2>
          <p>Elige el servicio que necesites: desde una web rápida hasta un sistema completo para tu negocio.</p>
        </div>

        <div className="grid3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
