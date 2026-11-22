import { Button } from '../ui/Button';

export const AidEstimator = () => {
  return (
    <section className="aid-section">
      <div className="aid-container">
        <div className="aid-left">
          <span className="section-badge">FEE & SCHOLARSHIP</span>
          <h2 className="section-title">Merit Scholarship Estimator</h2>
          <p className="section-subtitle">Estimate potential fee waivers and government scholarships.</p>
          
          <div className="slider-group">
            <label>Annual Family Income:</label>
            <span className="slider-value">₹8,00,000 / year</span>
            <input type="range" min="100000" max="2000000" step="100000" defaultValue="800000" />
            <div className="slider-labels">
              <span>₹1 Lakh</span>
              <span>₹10 Lakhs</span>
              <span>₹20 Lakhs+</span>
            </div>
          </div>

          <div className="aid-inputs">
            <div className="input-group">
              <label>Entrance Exam</label>
              <select><option>JEE Main / Advanced</option><option>NEET UG</option><option>CUET UG</option></select>
            </div>
            <div className="input-group">
              <label>Category</label>
              <select><option>General / EWS</option><option>OBC-NCL</option><option>SC / ST</option></select>
            </div>
          </div>
        </div>

        <div className="aid-right-card">
          <span className="card-badge">ESTIMATED POTENTIAL</span>
          <h3 className="estimate-amount">₹1,50,000 - ₹3,00,000</h3>
          <p>Annual Projected Fee Waiver</p>
          <hr />
          <div className="breakdown">
            <span>Merit-cum-Means Scholarship:</span>
            <span>₹1,20,000 / yr</span>
          </div>
          <div className="breakdown">
            <strong>Four-Year Estimated Savings:</strong>
            <strong>₹6,80,000</strong>
          </div>
          <Button>Check Full Scholarship List</Button>
        </div>
      </div>
    </section>
  );
};