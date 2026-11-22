import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Side */}
        <div className="hero-content">
          <span className="hero-badge">● CYCLE 2025/2026 ADMISSIONS</span>
          <h1 className="hero-heading">Strategic Admissions.<br/>Proven Results.</h1>
          <p className="hero-subtitle">
            Direct, personalized guidance from former Ivy League and Oxbridge deans to help ambitious students secure top university admissions.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>98.4%</h3>
              <p>Top-3 Choice Rate</p>
            </div>
            <div className="stat-item">
              <h3>$25M+</h3>
              <p>Merit Aid Awarded</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Former Deans</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-form-card">
          <h3 className="form-title">Profile Eligibility Check</h3>
          <p className="form-subtitle">Get an instant assessment of your institutional fit.</p>
          
          <div className="input-group">
            <label>Target Degree</label>
            <select>
              <option>Undergraduate (BA / BS)</option>
            </select>
          </div>
          <div className="input-group">
            <label>Destination</label>
            <select>
              <option>United States (Ivy Plus / T20)</option>
            </select>
          </div>
          <div className="input-group">
            <label>Academic Score / GPA</label>
            <input type="text" placeholder="e.g. 3.9 GPA or 92%" />
          </div>
          
          <Button>Check My Profile</Button>
        </div>

      </div>
    </section>
  );
};