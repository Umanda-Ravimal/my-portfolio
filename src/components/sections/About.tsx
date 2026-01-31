"use client";

import { skills } from "@/data/skills";
import SkillsBox, { SkillWithIcon } from "@/components/ui/SkillsBox";

export default function About() {
  const frontendSkills: SkillWithIcon[] = skills
    .filter((skill) => skill.category === "frontend")
    .map((skill) => ({
      name: skill.name,
      icon: skill.icon,
      iconColor: skill.iconColor,
    }));

  const backendSkills: SkillWithIcon[] = skills
    .filter((skill) => skill.category === "backend")
    .map((skill) => ({
      name: skill.name,
      icon: skill.icon,
      iconColor: skill.iconColor,
    }));

  return (
    <div className="space-y-6">
      {/* Profile Description */}
      <p className="text-base sm:text-lg leading-relaxed text-text dark:text-text">
        Full-stack software engineer with 2 years of hands-on experience building scalable web apps using React, Next.js, NestJS, and AWS. Passionate about clean code, performance optimization, and integrating AI like TensorFlow for intelligent systems—from CNNs to NLP. Eager to solve complex problems and drive innovative projects in dynamic teams.
      </p>

      {/* Skills Sections */}
      {frontendSkills.length > 0 && (
        <SkillsBox title="Frontend" skills={frontendSkills}/>
      )}

      {backendSkills.length > 0 && (
        <SkillsBox title="Backend" skills={backendSkills} />
      )}
    </div>
  );
}

