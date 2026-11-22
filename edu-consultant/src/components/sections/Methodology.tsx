export const Methodology = () => {
  const steps = [
    { num: '01', title: 'Profile Analysis', desc: 'Evaluating 10th/12th board scores, JEE/NEET percentile, and competitive alignment.' },
    { num: '02', title: 'College Selection', desc: 'JoSAA & CSAB counselling strategy, balancing IITs, NITs, and top state colleges.' },
    { num: '03', title: 'Application Strategy', desc: 'Expert guidance for BITSAT, VITEEE, and private university scholarship applications.' },
    { num: '04', title: 'Counselling & Allotment', desc: 'Mock counselling sessions, choice-filling optimization, and final admission readiness.' }
  ];

  return (
    <section className="methodology-section">
      <div className="section-header">
        <span className="section-badge">OUR PROCESS</span>
        <h2 className="section-title">The 4-Step Strategy</h2>
        <p className="section-subtitle">A methodical roadmap from exam preparation to final college allotment.</p>
      </div>
      <div className="methodology-grid">
        {steps.map((step, idx) => (
          <div key={idx} className="methodology-card">
            <span className="step-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};