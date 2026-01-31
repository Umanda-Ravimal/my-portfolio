import React, { ReactNode } from "react";
import {
  ReactIcon,
  TypeScriptIcon,
  NextJSIcon,
  MaterialUIIcon,
  TailwindIcon,
  ZustandIcon,
  NestJSIcon,
  ExpressIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  DockerIcon,
  AWSIcon,
} from "@/assets/icons";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai-ml";
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
  // Backend Skills
  {
    name: "NestJS",
    category: "backend",
    iconName: "nestjs",
    iconColor: "#E0234E",
  },
  {
    name: "Express.js",
    category: "backend",
    iconName: "express",
    iconColor: "#000000",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    iconName: "postgresql",
    iconColor: "#336791",
  },
  {
    name: "MongoDB",
    category: "backend",
    iconName: "mongodb",
    iconColor: "#47A248",
  },
  {
    name: "Docker",
    category: "backend",
    iconName: "docker",
    iconColor: "#2496ED",
  },
  {
    name: "AWS",
    category: "backend",
    iconName: "aws",
    iconColor: "#FF9900",
  },
  // AI/ML Skills
  {
    name: "TensorFlow",
    category: "ai-ml",
    iconColor: "#FF6F00",
  },
  {
    name: "PyTorch",
    category: "ai-ml",
    iconColor: "#EE4C2C",
  },
  {
    name: "YOLO",
    category: "ai-ml",
    iconColor: "#00D9FF",
  },
  {
    name: "CNN",
    category: "ai-ml",
    iconColor: "#5170FF",
  },
  {
    name: "NLP",
    category: "ai-ml",
    iconColor: "#5170FF",
  },
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
    nestjs: React.createElement(NestJSIcon, { width: 32, height: 32 }),
    express: React.createElement(ExpressIcon, { width: 32, height: 32 }),
    postgresql: React.createElement(PostgreSQLIcon, { width: 32, height: 32 }),
    mongodb: React.createElement(MongoDBIcon, { width: 32, height: 32 }),
    docker: React.createElement(DockerIcon, { width: 32, height: 32 }),
    aws: React.createElement(AWSIcon, { width: 32, height: 32 }),
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

