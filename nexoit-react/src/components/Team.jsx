import React from 'react';
import { TEAM_MEMBERS } from '../data/constants';

const Team = () => {
  return (
    <section className="section section--alt" id="equipo">
      <div className="container">
        <div className="section__head animate-on-scroll">
          <h2>Equipo</h2>
          <p>Ingenieros de sistemas enfocados en entregar soluciones reales, con comunicación clara y resultados.</p>
        </div>

        <div className="team team--cards">
          {TEAM_MEMBERS.map((member, i) => (
            <article className="person person--avatar" key={i}>
              <div className="avatar">
                <span>{member.initials}</span>
              </div>
              <div className="person__info">
                <h3>{member.name}</h3>
                <p className="muted">{member.role}</p>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
