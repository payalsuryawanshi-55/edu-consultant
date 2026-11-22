import { Button } from '../ui/Button';

export const Advisory = () => {
  const consultants = [
    {
      id: 1,
      name: 'Dr. Eleanor Vance',
      title: 'Ex-Columbia & Harvard Kennedy',
      tags: 'STEM & Pre-Med Selective Tracks',
      availability: 'Open Today',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 2,
      name: 'Marcus Sterling',
      title: 'Ex-Cambridge Admissions Tutor',
      tags: 'Oxbridge & Russell Group Law',
      availability: 'Slots Tomorrow',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 3,
      name: 'Priya Ramanathan',
      title: 'Merit Aid & Fellowship Strategist',
      tags: 'Full-Ride Scholarships & Endowments',
      availability: '2 Slots Left',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 4,
      name: 'Arthur Dubois',
      title: 'International Visa Liaison',
      tags: 'F-1 & Tier-4 Visa Simulation',
      availability: 'Live Now',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300'
    }
  ];

  return (
    <section className="advisory-section" id="advisory">
      <div className="section-header">
        <span className="section-badge">ADVISORY BOARD</span>
        <h2 className="section-title">Direct Counsel from Former Deans</h2>
        <p className="section-subtitle">Work 1-on-1 with admissions officers who evaluated candidates firsthand.</p>
      </div>

      <div className="advisory-grid">
        {consultants.map((c) => (
          <div key={c.id} className="consultant-card">
            <div className="consultant-img-wrap">
              <img src={c.image} alt={c.name} />
              <span className="availability-badge">{c.availability}</span>
            </div>
            <div className="consultant-content">
              <h3 className="consultant-name">{c.name}</h3>
              <p className="consultant-title">{c.title}</p>
              <p className="consultant-tags">{c.tags}</p>
            </div>
            <Button variant="secondary">Book Consultation</Button>
          </div>
        ))}
      </div>
    </section>
  );
};