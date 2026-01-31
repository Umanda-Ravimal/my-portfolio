import React, { ReactNode } from "react";
import {
  ReactIcon,
  TypeScriptIcon,
  NextJSIcon,
  MaterialUIIcon,
  TailwindIcon,
  ZustandIcon,
} from "@/assets/icons";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level?: "beginner" | "intermediate" | "advanced";
  iconName?: string;
  iconColor?: string;
}

// Base skills data (without JSX)
const baseSkills: Omit<Skill, "icon">[] = [
  // Frontend Skills
  {
    name: "React",
    category: "frontend",
    iconName: "react",
  },
  {
    name: "TypeScript",
    category: "frontend",
    iconName: "typescript",
  },
  {
    name: "Next.js",
    category: "frontend",
    iconName: "nextjs",
  },
  {
    name: "Material-UI",
    category: "frontend",
    iconName: "materialui",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    iconName: "tailwind",
  },
  {
    name: "Zustand",
    category: "frontend",
    iconName: "zustand",
  },
  // Add more skills here
  // Example without icon (will show initials):
  // {
  //   name: "Vue.js",
  //   category: "frontend",
  //   iconColor: "#4FC08D",
  // },
];

// Icon mapping function using React.createElement to avoid JSX in .ts file
const getIcon = (iconName?: string): ReactNode | undefined => {
  if (!iconName) return undefined;
  
  const iconSize = 28;
  const iconMap: Record<string, ReactNode> = {
    react: React.createElement(ReactIcon, { width: 28, height: 28 }),
    typescript: React.createElement(TypeScriptIcon, { width: 36, height: 36 }),
    nextjs: React.createElement(NextJSIcon, { width: 36, height: 36 }),
    materialui: React.createElement(MaterialUIIcon, { width: 32, height: 32 }),
    tailwind: React.createElement(TailwindIcon, { width: 32, height: 32 }),
    zustand: React.createElement(ZustandIcon, { width: 32, height: 32 }),
  };

  return iconMap[iconName.toLowerCase()];
};

// Export skills with icons
export const skills: (Skill & { icon?: ReactNode })[] = baseSkills.map(
  (skill) => ({
    ...skill,
    icon: getIcon(skill.iconName),
  })
);

