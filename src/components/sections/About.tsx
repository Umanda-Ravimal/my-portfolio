"use client";

import { useState, useEffect } from "react";
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

  const aiMlSkills: SkillWithIcon[] = skills
    .filter((skill) => skill.category === "ai-ml")
    .map((skill) => ({
      name: skill.name,
      icon: skill.icon,
      iconColor: skill.iconColor,
    }));

  // Prepare skill sections array
  const skillSections = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "AI & ML", skills: aiMlSkills },
  ].filter((section) => section.skills.length > 0);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (skillSections.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % skillSections.length
        );
        setIsTransitioning(false);
      }, 300); // Half of transition duration for smooth fade
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [skillSections.length, isPaused]);

  return (
    <div className="space-y-6">
      {/* Profile Description */}
      <p className="text-base sm:text-lg leading-relaxed text-text dark:text-text">
        Full-stack software engineer with 2 years of hands-on experience building scalable web apps using React, Next.js, NestJS, and AWS. Passionate about clean code, performance optimization, and integrating AI like TensorFlow for intelligent systems—from CNNs to NLP. Eager to solve complex problems and drive innovative projects in dynamic teams.
      </p>

      {/* Skills Carousel */}
      <div className="relative min-h-[200px]">
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % skillSections.length);
            }, 500); // 0.5 second delay
          }}
        >
          {skillSections.length > 0 && (
            <SkillsBox
              title={skillSections[currentIndex].title}
              skills={skillSections[currentIndex].skills}
            />
          )}
        </div>

        {/* Navigation Dots */}
        {skillSections.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {skillSections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-primary/50"
                }`}
                aria-label={`Go to ${skillSections[index].title} section`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

