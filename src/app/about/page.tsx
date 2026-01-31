"use client";

import { useState } from "react";
import Image from "next/image";
import backdropImage from "@/assets/images/backdrop.png";
import myAboutImage from "@/assets/images/myAboutImage.png";
import AboutSection from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Tabs, { TabItem } from "@/components/ui/Tabs";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const tabItems: TabItem[] = [
    {
      id: "about",
      label: "About me",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "experience",
      label: "Experience",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="flex min-h-[85vh] bg-white font-sans dark:bg-black">
      {/* Left side - Backdrop Image with Home Image on top */}
      <div className="hidden lg:block w-2/5 min-h-[85vh] relative overflow-hidden bg-black">
        {/* Backdrop Image - Background layer */}
        <Image
          src={backdropImage}
          alt="Backdrop"
          className="object-cover object-center top-13 absolute"
          priority
          style={{ height: '85%' }}
        />
        {/* Home Image - Foreground layer */}
        <Image
          src={myAboutImage}
          alt="About"
          className="object-contain object-center z-1 absolute"
          priority
          style={{ height:'100%', left:'40px' }}
        />
      </div>

      {/* Right side - Content */}
      <main className="flex-1 w-2/5 flex flex-col min-h-[85vh] bg-white dark:bg-black">
        <div className="flex-1 flex flex-col px-4 sm:px-6 py-6 sm:py-8 ">
          {/* Tab Navigation */}
          <div className="flex justify-center pr-24">
            <Tabs
              items={tabItems}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="w-max border-2 border-primary rounded-full mb-6"
            />
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex flex-col mt-8 pr-24">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

