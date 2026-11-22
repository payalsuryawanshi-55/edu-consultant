import { mockDeadlines } from '../../data/mockData';

export const Deadlines = () => {
  return (
    <section className="deadlines-section" id="destinations">
      <div className="deadlines-container">
        
        <div className="deadlines-header">
          <div>
            <span className="section-badge">CYCLE REGISTRY</span>
            <h2 className="section-title">Key Upcoming Deadlines</h2>
          </div>
          <p className="deadlines-subtitle">
            Active submission cycles for Regular Decision and international applicant intakes.
          </p>
        </div>

        <div className="deadlines-grid">
          {mockDeadlines.map((deadline) => (
            <div key={deadline.id} className="deadline-card">
              <div className="deadline-top">
                <span className="deadline-badge">
                  {deadline.daysLeft} Days Left
                </span>
                <span className="deadline-date">{deadline.date}</span>
              </div>
              
              <h3 className="deadline-country">{deadline.country}</h3>
              <p className="deadline-desc">{deadline.description}</p>
              
              <a href="#" className="deadline-link">
                {deadline.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};