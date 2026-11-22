import type { College, Consultant, Deadline } from "../types";


export const mockConsultants: Consultant[] = [
  {
    id: '1',
    name: 'Dr. Eleanor Vance',
    title: 'Ex-Columbia & Harvard Kennedy',
    tags: 'STEM & Pre-Med Selective Tracks',
    availability: 'Open Today',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: '2',
    name: 'Marcus Sterling',
    title: 'Ex-Cambridge Admissions Tutor',
    tags: 'Oxbridge & Russell Group Law / STEM',
    availability: 'Slots Tomorrow',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: '3',
    name: 'Priya Ramanathan',
    title: 'Merit Aid & Fellowship Strategist',
    tags: 'Full-Ride Scholarships & Endowments',
    availability: '2 Slots Left',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const mockColleges: College[] = [
  {
    id: '1',
    name: 'Harvard University',
    location: 'Cambridge, MA',
    ranking: 1,
    acceptanceRate: '3.4%',
    tuition: '$54,000'
  },
  {
    id: '2',
    name: 'Stanford University',
    location: 'Stanford, CA',
    ranking: 2,
    acceptanceRate: '3.9%',
    tuition: '$56,000'
  }
];

export const mockDeadlines: Deadline[] = [
  {
    id: '1',
    country: 'JEE Advanced',
    daysLeft: 18,
    date: 'May 26',
    description: 'IIT Admissions. Registration and choice filling for JoSAA counselling.',
    linkText: 'Check IIT Cutoffs',
  },
  {
    id: '2',
    country: 'NEET UG',
    daysLeft: 24,
    date: 'Jun 05',
    description: 'AIIMS, JIPMER & State Medical Colleges. Final registration window.',
    linkText: 'Review Medical Seats',
  },
  {
    id: '3',
    country: 'CUET UG',
    daysLeft: 32,
    date: 'Jun 15',
    description: 'Delhi University & Central Universities. Exam city slip release.',
    linkText: 'DU Admission Guide',
  },
  {
    id: '4',
    country: 'BITSAT',
    daysLeft: 12,
    date: 'May 20',
    description: 'BITS Pilani, Goa, Hyderabad. Session 1 slot booking.',
    linkText: 'BITSAT Prep Tips',
  }
];