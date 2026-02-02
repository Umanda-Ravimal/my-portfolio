"use client";

import ProjectsSection from "@/components/sections/Projects";

export default function Projects() {
  return (
    <div className="h-[85vh] bg-black font-sans overflow-hidden">
      <div className="flex flex-col h-full px-3 sm:px-4 py-3 sm:py-4">
        {/* Projects Content */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
