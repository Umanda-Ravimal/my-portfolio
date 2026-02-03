"use client";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function Tabs({
  items,
  activeTab,
  onTabChange,
  className = "",
}: TabsProps) {
  return (
    <div className={`flex items-center justify-around gap-1 p-1 sm:gap-3 ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`px-2 md:px-4 py-2 rounded-full text-xs sm:text-sm md:text-lg font-bold transition-all cursor-pointer ${
            activeTab === item.id
              ? "bg-primary text-background dark:text-background"
              : "bg-transparent text-primary dark:text-primary hover:border-primary/50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

