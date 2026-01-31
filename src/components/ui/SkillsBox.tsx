"use client";

import { ReactNode } from "react";

export interface SkillWithIcon {
  name: string;
  icon?: ReactNode;
  iconColor?: string;
}

interface SkillsBoxProps {
  title: string;
  skills: SkillWithIcon[];
}

export default function SkillsBox({
  title,
  skills,
}: SkillsBoxProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div
      className="border border-primary rounded-lg p-4"
      style={{
        background: "linear-gradient(90deg, rgba(81, 112, 255, 0.6), rgba(0, 4, 61, 0.6))",
      }}
    >
      <h3 className="text-lg font-semibold text-heading dark:text-heading mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative w-14 h-14 rounded-lg bg-black dark:bg-black border border-gray-800 dark:border-gray-800 flex items-center justify-center hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer"
            title={skill.name}
          >
            {skill.icon ? (
              <div className="w-full h-full flex items-center justify-center">
                {skill.icon}
              </div>
            ) : (
              <span
                className="text-md font-md font-bold"
                style={{ color: skill.iconColor || "#5170ff" }}
              >
                {skill.name.toUpperCase()}
              </span>
            )}
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 border border-primary transform -translate-x-1/2 mb-2 px-2 py-1 bg-black dark:bg-background text-white dark:text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

