export const Testimonials = () => {
  const reviews = [
    { 
      name: 'Kevin L.', 
      uni: 'Admitted: MIT', 
      text: '"Aegis restructured my robotic patents into a human-first narrative. Within 8 weeks, my essays stood out from generic STEM applicants."', 
      course: 'Electrical Eng.', 
      aid: '$42,000 Aid', 
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100' 
    },
    { 
      name: 'Sarah K.', 
      uni: 'Admitted: Oxford', 
      text: '"Marcus Sterling ran rigorous mock tutorials mirroring Trinity oral defenses. His feedback transformed how I defended my research questions."', 
      course: 'MSc Embryology', 
      aid: 'Full Funding', 
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100' 
    },
    { 
      name: 'Daniel M.', 
      uni: 'Admitted: Toronto', 
      text: '"They handled my PAL attestation letter and expedited biometric submission. My study permit was approved in two weeks."', 
      course: 'Rotman Commerce', 
      aid: '$20,000 Award', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100' 
    },
    { 
      name: 'Ananya S.', 
      uni: 'Admitted: IIT Bombay', 
      text: '"The JoSAA counseling strategy was flawless. I secured my dream branch at IIT Bombay despite tough competition."', 
      course: 'B.Tech CSE', 
      aid: 'Top 1% Rank', 
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100' 
    }
  ];

  return (
    <section className="testimonials-section" id="results">
      <div className="section-header">
        <span className="section-badge">STUDENT OUTCOMES</span>
        <h2 className="section-title">Admissions Ledger</h2>
        <p className="section-subtitle">Real acceptances from the recent admissions cycle.</p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((rev, i) => (
          <div key={i} className="review-card">
            <div className="review-header">
              <img src={rev.img} alt={rev.name} className="review-avatar" />
              <div>
                <h4>{rev.name}</h4>
                <p className="review-uni">{rev.uni}</p>
              </div>
            </div>
            <p className="review-text">{rev.text}</p>
            <div className="review-footer">
              <span>{rev.course}</span>
              <strong>{rev.aid}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};