export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string[];
  achievements?: string[];
}

export const education: Education[] = [
  // Add your education here
];

