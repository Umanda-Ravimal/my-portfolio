"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";
import webcvrImage from "@/assets/images/webcvr.webp";
import teelanSaloonImage from "@/assets/images/teelan-saloon-main.webp";
import aiDevImage from "@/assets/images/aiDev.png";
import Button from "@/components/ui/Button";

// Image mapping - exported for use in ProjectDetail
export const projectImages: Record<string, any> = {
  webcvr: webcvrImage,
  "teelan-saloon": teelanSaloonImage,
  aiDev: aiDevImage,
  // Add more images as needed
};

interface ProjectsProps {
  onProjectClick?: (project: Project) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBack} />;
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-text dark:text-text">
        <p>No projects available.</p>
      </div>
    );
  }

  return (
    <div className="flex grid grid-cols-2 gap-3 md:gap-4 h-full w-3/4">
      {projects.slice(0, 4).map((project) => {
        const imageSrc = project.imageKey ? projectImages[project.imageKey] : null;

        return (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="relative group h-full flex flex-col border-2 border-primary rounded-lg overflow-hidden"
          >
            {/* Project Image Container with Blue Banner Overlay */}
            <div className="relative w-full h-full bg-black flex-shrink-0">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <p className="text-gray-500 text-sm">No image available</p>
                </div>
              )}

              {/* Blue Banner Label - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 sm:px-3 sm:py-2 group-hover:opacity-0"
                style={{
                  background: "linear-gradient(90deg, rgba(81, 112, 255, 0.9), rgba(0, 4, 61, 0.9))",
                }}>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-heading dark:text-heading text-center">
                  {project.title}
                </h3>
              </div>

              {/* View More Button - Show on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                  variant="primary"
                  className="bg-primary text-background hover:opacity-90 cursor-pointer"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
