import { useState } from 'react';
import { Button } from '../ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    target: 'JEE Main / Advanced' 
  });

  // Yahan apna WhatsApp number aur Email daalein
  const YOUR_WHATSAPP_NUMBER = "917909913392"; // India ka code 91 lagayein
  const YOUR_EMAIL = "payalsuryawanshi820@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Message Format
    const text = `Hello Aegis, I want a strategy session.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ATarget Exam: ${formData.target}`;
    
    // Opens WhatsApp with the pre-filled message
    window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Form */}
        <div className="contact-form-card">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="form-title">Book a Strategy Session</h2>
          <p className="form-subtitle">Connect with an associate dean to assess your profile.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. Katherine Zhang" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="student@example.com" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Target Intake</label>
              <select onChange={(e) => setFormData({...formData, target: e.target.value})}>
                <option>Fall 2025 (Immediate)</option>
                <option>Spring 2026</option>
                <option>Fall 2026</option>
              </select>
            </div>
            
            {/* Black Button */}
            <Button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Get Started
            </Button>

            {/* Optional: Email option below the button */}
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
              Or email us directly at <a href={`mailto:${YOUR_EMAIL}`} style={{ color: 'var(--accent)', fontWeight: '600' }}>{YOUR_EMAIL}</a>
            </p>
          </form>
        </div>

        {/* Right Side: FAQ */}
        <div className="contact-faq">
          <span className="section-badge">CLARIFICATIONS</span>
          <h2 className="section-title">Common Questions</h2>
          
          <div className="faq-item">
            <h4>How is counseling conducted ethically?</h4>
            <p>We strictly practice zero-ghostwriting. Through Socratic mentoring, we help students refine authentic voice and narrative pacing that withstand admissions committee scrutiny.</p>
          </div>
          
          <div className="faq-item">
            <h4>When is the ideal time to start?</h4>
            <p>Most students begin during 10th or 11th grade to architect extracurricular spikes and academic coursework prior to senior application deadlines.</p>
          </div>
          
          <div className="faq-item">
            <h4>Do you assist with financial aid and visas?</h4>
            <p>Yes. Our specialists support CSS Profile filings, merit endowment applications, and mock visa consular clearance with 100% resolution.</p>
          </div>
        </div>

      </div>
    </section>
  );
};