export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    id: "1",
    position: "Associate Software Engineer",
    company: "Hashbaze Pvt Ltd",
    startDate: "Apr 2025",
    endDate: "Present",
    description: [
      "Lead a cross-functional team in developing a scalable web platform from initial sketches through to production deployment.",
      "Collaborate directly with clients to gather requirements, define scope, and ensure alignment with business goals using React, TypeScript, NestJS, PostgreSQL, Docker, and AWS.",
      "Drive Agile processes including sprint planning, code reviews, and problem-solving to deliver maintainable, performant solutions with clean code principles and internationalization.",
    ],
  },
  {
    id: "2",
    position: "Software Engineer Intern",
    company: "Hashbaze Pvt Ltd",
    startDate: "May 2024",
    endDate: "Feb 2025",
    description: [
      "Contributed to full-stack web application development, translating Figma designs into responsive UIs with React, Next.js, Tailwind CSS, Redux, and Zustand.",
      "Built and maintained RESTful APIs using Express.js and Nest.JS, integrated MongoDB/PostgreSQL databases, and handled containerization/deployment via Docker and AWS.",
      "Participated in Agile workflows with Jira/Trello, Git/GitHub collaboration, client communications, and analytical problem-solving to support team deliverables.",
    ],
  },
];

