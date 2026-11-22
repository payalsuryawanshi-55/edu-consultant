export interface Consultant {
  id: string;
  name: string;
  title: string;
  tags: string;
  availability: 'Open Today' | 'Slots Tomorrow' | '2 Slots Left' | 'Live Now';
  image: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  ranking: number;
  acceptanceRate: string;
  tuition: string;
}
export interface Deadline {
  id: string;
  country: string;
  daysLeft: number;
  date: string;
  description: string;
  linkText: string;
}