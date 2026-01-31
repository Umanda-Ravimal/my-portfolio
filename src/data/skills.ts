export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level?: "beginner" | "intermediate" | "advanced";
}

export const skills: Skill[] = [
  // Add your skills here
];

