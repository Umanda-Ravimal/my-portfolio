'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkedInIcon, GitHubIcon, GmailIcon } from "@icons";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  
  // Find the current page label or default to "Portfolio"
  const currentPage = NAV_LINKS.find(link => link.href === pathname)?.label || "Portfolio";
  
  return (
    <nav className="w-full bg-background">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {currentPage}
          </Link>
          <div className="flex gap-4">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon
                width={24}
                height={24}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              />
            </a>

            

            {/* Gmail Icon */}
            <a
              href="mailto:your.email@gmail.com"
              className="p-2"
              aria-label="Email"
            >
              <GmailIcon
                width={24}
                height={30}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
              aria-label="GitHub"
            >
              <GitHubIcon
                width={24}
                height={24}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

