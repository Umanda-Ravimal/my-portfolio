"use client";

import { experience } from "@/data/experience";

export default function Experience() {
  if (!experience || experience.length === 0) {
    return (
      <div className="text-text dark:text-text">
        <p>No experience information available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {experience.map((exp) => (
        <div key={exp.id} className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-heading dark:text-heading">
              {exp.position}
            </h3>
            <p className="text-sm sm:text-base text-secondary dark:text-secondary">
              {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : "Present"}
            </p>
          </div>
          <p className="text-lg text-primary dark:text-primary font-medium">
            {exp.company}
          </p>
          {exp.description && exp.description.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-text dark:text-text">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          )}
          {exp.technologies && exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary border border-primary/30 dark:border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

