import React from 'react';
import { SERVICES, SERVICE_ICONS } from '../data/constants';

const ServiceCard = React.memo(({ service, index }) => (
  <article className={`svc animate-on-scroll animate-delay-${index + 1}`}>
    <div className="svc__icon">{SERVICE_ICONS[service.icon]}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <ul className="ul">
      {service.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  </article>
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
