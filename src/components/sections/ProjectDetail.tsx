"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { projectImages } from "@/components/sections/Projects";
import {
    ReactIcon,
    TypeScriptIcon,
    NextJSIcon,
    MaterialUIIcon,
    NestJSIcon,
    PostgreSQLIcon,
    DockerIcon,
    AWSIcon,
    TensorFlowIcon,
    TailwindIcon,
    ZustandIcon,
    MongoDBIcon,
    PyTorchIcon,
} from "@/assets/icons";

// Technology icon mapping
const techIconMap: Record<string, React.ComponentType<any>> = {
    React: ReactIcon,
    "Next.js": NextJSIcon,
    TypeScript: TypeScriptIcon,
    "Material-UI": MaterialUIIcon,
    "Material UI": MaterialUIIcon,
    MongoDB: MongoDBIcon,
    NestJS: NestJSIcon,
    Zustand: ZustandIcon,
    PyTorch: PyTorchIcon,
    Prisma: PostgreSQLIcon, // Using PostgreSQL icon as placeholder for Prisma
    Docker: DockerIcon,
    AWS: AWSIcon,
    TensorFlow: TensorFlowIcon,
    "Tailwind CSS": TailwindIcon,
    Python: () => null, // No icon available
    "Computer Vision": () => null,
    OpenCV: () => null,
};

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
    const imageSrc = project.imageKey ? projectImages[project.imageKey] : null;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isAutoScrollingRef = useRef<boolean>(false);
    const lastScrollTopRef = useRef<number>(0);
    const [iconSize, setIconSize] = useState(24);

    useEffect(() => {
        const updateIconSize = () => {
            if (window.innerWidth < 640) {
                setIconSize(16); // Mobile
            } else if (window.innerWidth < 768) {
                setIconSize(20); // Small
            } else {
                setIconSize(24); // Desktop
            }
        };

        updateIconSize();
        window.addEventListener('resize', updateIconSize);
        return () => window.removeEventListener('resize', updateIconSize);
    }, []);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const delay = 2000; // Wait 2 seconds before starting scroll
            
            const startScroll = () => {
                const startPosition = container.scrollTop;
                const targetPosition = container.scrollHeight - container.clientHeight;
                const distance = targetPosition - startPosition;
                const duration = 10000; // 10 seconds for slow scroll
                let startTime: number | null = null;
                isAutoScrollingRef.current = true;
                lastScrollTopRef.current = startPosition;

                const animateScroll = (currentTime: number) => {
                    // Check if user has manually scrolled
                    if (!isAutoScrollingRef.current) {
                        return;
                    }

                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Easing function for smooth deceleration
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    
                    const newScrollTop = startPosition + distance * easeOutCubic;
                    container.scrollTop = newScrollTop;
                    lastScrollTopRef.current = newScrollTop;

                    if (progress < 1 && isAutoScrollingRef.current) {
                        animationFrameRef.current = requestAnimationFrame(animateScroll);
                    } else {
                        isAutoScrollingRef.current = false;
                    }
                };

                animationFrameRef.current = requestAnimationFrame(animateScroll);
            };

            // Handle user scroll - stop auto-scroll if user manually scrolls
            const handleScroll = () => {
                if (isAutoScrollingRef.current) {
                    const currentScrollTop = container.scrollTop;
                    const expectedScrollTop = lastScrollTopRef.current;
                    
                    // If scroll position differs significantly from expected, user is scrolling
                    if (Math.abs(currentScrollTop - expectedScrollTop) > 5) {
                        isAutoScrollingRef.current = false;
                        if (animationFrameRef.current !== null) {
                            cancelAnimationFrame(animationFrameRef.current);
                            animationFrameRef.current = null;
                        }
                    }
                }
                lastScrollTopRef.current = container.scrollTop;
            };

            container.addEventListener('scroll', handleScroll);
            const timeoutId = setTimeout(startScroll, delay);
            
            return () => {
                clearTimeout(timeoutId);
                container.removeEventListener('scroll', handleScroll);
                if (animationFrameRef.current !== null) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, []);

    return (
        <div className="h-full w-full flex flex-col text-white">
            {/* Project Title */}
            <div className="mb-6 sm:mb-8 md:mb-12 flex-shrink-0">
                <button
                    onClick={onBack}
                    className="text-primary hover:text-primary/80 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm font-medium transition-colors"
                >
                    ← Back to Projects
                </button>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-heading dark:text-heading text-center">
                    {project.title}
                </h1>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 min-h-0 overflow-y-auto">
                {/* Left Side - Project Image */}
                <div className="flex w-full md:w-1/2 flex-col gap-4 flex-shrink-0">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-2/3 border border-primary bg-black rounded-lg overflow-hidden"
                        style={{
                            boxShadow: "0 0 30px rgba(81, 112, 255, 0.5)",
                        }}
                    >
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={project.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-900">
                                <p className="text-gray-500 text-xs sm:text-sm">No image available</p>
                            </div>
                        )}
                    </div>

                    {/* Tech Stack Section */}
                    <div
                        className="rounded-lg p-3 sm:p-4 border border-primary"
                        style={{
                            background: "linear-gradient(90deg, rgba(81, 112, 255, 0.6), rgba(0, 4, 61, 0.6))",
                        }}
                    >
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-heading dark:text-heading mb-2 sm:mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => {
                                const IconComponent = techIconMap[tech];
                                return (
                                    <div
                                        key={tech}
                                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-black border border-gray-800 flex items-center justify-center hover:border-primary/50 transition-all"
                                        title={tech}
                                    >
                                        {IconComponent ? (
                                            <IconComponent width={iconSize} height={iconSize} />
                                        ) : (
                                            <span className="text-[10px] sm:text-xs font-bold text-primary">
                                                {tech.substring(0, 4).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Side - Project Description */}
                <div className="flex w-full md:w-1/2 flex-col">
                    <div 
                        ref={scrollContainerRef}
                        className="flex-1 overflow-y-auto pr-2 scrollbar-hide"
                    >
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text dark:text-text whitespace-pre-line">
                            {project.detailedDescription || project.description}
                        </p>
                    </div>

                    {/* Links */}
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-4 mt-6 flex-shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                          >
                            View on GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
}

