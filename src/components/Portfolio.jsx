import React, { useState, useCallback, useMemo } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/constants';

const FILTER_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'web', label: 'Sitios Web' },
  { value: 'sistema', label: 'Sistemas' },
  { value: 'app', label: 'Aplicaciones' },
];

import SpotlightCard from './SpotlightCard';

const ProjectCard = React.memo(({ project, onSelect }) => (
  <SpotlightCard className="pcard animate-on-scroll">
    <article data-category={project.category} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <a className="pcard__media" href="#!" onClick={(e) => { e.preventDefault(); onSelect(project); }} aria-label={`Ver descripción: ${project.title}`}>
        <img src={project.image} alt={`Proyecto: ${project.title}`} loading="lazy" decoding="async" />
        {project.badge && <div className="pcard__badge">{project.badge}</div>}
      </a>
      <div className="pcard__body">
        <div className="pcard__top">
          <h3>{project.title}</h3>
          <span className="pcard__year">{project.year}</span>
        </div>
        <p className="pcard__description">{project.description}</p>
        <div className="pcard__tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="chip">{tag}</span>
          ))}
        </div>
        <div className="pcard__actions">
          <a className="btn btn--sm" href="#!" onClick={(e) => { e.preventDefault(); onSelect(project); }}>
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            Ver descripción
          </a>
        </div>
      </div>
    </article>
  </SpotlightCard>
));

ProjectCard.displayName = 'ProjectCard';

const Portfolio = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <section className="section section--alt" id="portafolio">
      <div className="container">
        <div className="section__head animate-on-scroll">
          <h2>Portafolio</h2>
          <p>Proyectos y soluciones que hemos construido con nuestros clientes.</p>
        </div>

        <div className="portfolio__filters animate-on-scroll animate-delay-1">
          {FILTER_OPTIONS.map(filter => (
            <button
              key={filter.value}
              className={`portfolio__filter${activeFilter === filter.value ? ' active' : ''}`}
              onClick={() => handleFilterClick(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio">
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;