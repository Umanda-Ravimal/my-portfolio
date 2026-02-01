"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/data/experience";

export default function Experience() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isAutoScrollingRef = useRef<boolean>(false);
  const lastScrollTopRef = useRef<number>(0);

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

  if (!experience || experience.length === 0) {
    return (
      <div className="text-text dark:text-text">
        <p>No experience information available.</p>
      </div>
    );
  }

  return (
    <div 
      ref={scrollContainerRef}
      className="relative pl-10 max-h-[calc(85vh-200px)] overflow-y-auto scrollbar-hide"
    >
      {/* Timeline line */}
      <div 
        className="absolute left-2 top-1 h-[150%] w-0.5"
        style={{
          background: 'linear-gradient(to bottom, var(--primary), transparent)'
        }}
      ></div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Timeline circle */}
            <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-primary dark:bg-primary border-2 border-black dark:border-black"></div>

            <div className="space-y-2">
              <div className="flex">
                <h3 className="w-4/6 text-lg sm:text-xl font-semibold text-heading dark:text-heading">
                  {exp.position}
                </h3>
                <p className="text-right text-sm sm:text-base text-secondary dark:text-secondary">
                  ({exp.startDate} – {exp.endDate || "Present"})
                </p>
              </div>
              <p className="text-base sm:text-lg text-secondary dark:text-secondary font-medium">
                {exp.company}
              </p>
              {exp.description && exp.description.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-text dark:text-text text-sm sm:text-base">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

