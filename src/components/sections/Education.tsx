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
    <div className="relative pl-10">
      {/* Timeline line */}
      <div 
        className="absolute left-2 top-1 h-[150%] w-0.5"
        style={{
          background: 'linear-gradient(to bottom, var(--primary), transparent)'
        }}
      ></div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative">
            {/* Timeline circle */}
            <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-primary dark:bg-primary border-2 border-black dark:border-black"></div>

            <div className="space-y-2">
              <div className="flex">
                <h3 className="w-4/6 text-lg sm:text-xl font-semibold text-heading dark:text-heading">
                  {edu.degree}
                </h3>
                <p className="text-right text-sm sm:text-base text-secondary dark:text-secondary">
                  ({edu.startDate} – {edu.endDate || "Present"})
                </p>
              </div>
              <p className="text-base sm:text-lg text-secondary dark:text-secondary font-medium">
                {edu.institution}
              </p>
              {edu.achievements && edu.achievements.length > 0 && (
                <p className="text-sm font-semibold sm:text-base text-text dark:text-text">
                  {edu.achievements[0]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

