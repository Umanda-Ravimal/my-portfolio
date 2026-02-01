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
  {
    id: "1",
    degree: "Bachelor of Information and Communication Technology Honors Degree",
    institution: "University of Sri Jayewardenepura",
    startDate: "Apr 2021",
    endDate: "Oct 2025",
    achievements: ["Second Class Upper Division, GPA 3.46/4.0"],
  },
  {
    id: "2",
    degree: "Diploma in English",
    institution: "British way English Academy",
    startDate: "Mar 2020",
    endDate: "Dec 2020",
  },
];

