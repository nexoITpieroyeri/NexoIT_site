import React from 'react';
import { PROCESS_STEPS } from '../data/constants';

const Process = () => {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className="section__head">
          <h2>Proceso de trabajo</h2>
          <p>Simple, claro y con entregas por etapas para que siempre tengas control del avance.</p>
        </div>

        <div className="steps">
          {PROCESS_STEPS.map(step => (
            <div className="step" key={step.number}>
              <span className="step__n">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
