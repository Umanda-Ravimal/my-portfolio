"use client";

import { education } from "@/data/education";

export default function Education() {
  if (!education || education.length === 0) {
    return (
      <div className="text-text dark:text-text">
        <p>No education information available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div key={edu.id} className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-heading dark:text-heading">
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base text-secondary dark:text-secondary">
              {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ""}
            </p>
          </div>
          <p className="text-lg text-primary dark:text-primary font-medium">
            {edu.institution}
            {edu.location && `, ${edu.location}`}
          </p>
          {edu.description && edu.description.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-text dark:text-text">
              {edu.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          )}
          {edu.achievements && edu.achievements.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-semibold text-secondary dark:text-secondary mb-1">
                Achievements:
              </p>
              <ul className="list-disc list-inside space-y-1 text-text dark:text-text">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

