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
    position: "Software Engineer",
    company: "Hashbaze Pvt Ltd",
    startDate: "Mar 2026",
    endDate: "Present",
    description: [
      "Architected and shipped an autonomous browser automation workflow platform using Puppeteer, Socket.IO, and React Flow, eliminating human-monitored task execution across repeated web data extraction workflows.",
      "Designed and deployed production backend APIs with NestJS and PostgreSQL on AWS with Docker, managing authentication and role-based access for 500+ concurrent users via AWS Cognito with JWT-based role resolution.",
      "Built AI-assisted data extraction pipelines using LangChain and Google Generative AI, enabling structured data transformation from unstructured web sources within automated workflows.",
      "Led frontend development of enterprise SaaS platforms using React 18, TypeScript, Material UI, and Atomic Design principles, maintaining a component library reused across 3+ product modules.",
      "Implemented first-click UX testing tools with heatmap and scatter plot analytics using Recharts, delivering quantifiable interaction data to researchers across uploaded UI designs.",
    ],
  },
  {
    id: "2",
    position: "Associate Software Engineer",
    company: "Hashbaze Pvt Ltd",
    startDate: "Apr 2025",
    endDate: "Mar 2026",
    description: [
      "Developed and maintained production web applications using React, TypeScript, and Next.js, translating Figma designs pixel-perfectly into responsive interfaces with Tailwind CSS.",
      "Optimized complex UI state management using Redux and Zustand, reducing unnecessary re-renders and improving perceived load time across high-traffic dashboard views.",
      "Built and integrated RESTful APIs using Express.js and NestJS, backed by MongoDB and PostgreSQL, with all services containerized via Docker and deployed to AWS.",
      "Collaborated in Agile workflows including sprint planning, code reviews, and Git-based team collaboration across multiple repositories.",
    ],
  },
  {
    id: "3",
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
