import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SideNavigation from "@/components/layout/SideNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umanda Ravimal",
  description: "Full-stack software engineer with experience developing scalable web applications. Focused on clean, maintainable code and performance, with hands-on experience in cloud deployment. Actively exploring AI to build more intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex flex-col '>
          <Navbar />
          <main className='flex-1 min-h-[85vh] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-36 pb-20 lg:pb-0 overflow-y-auto'>
            {children}
            <SideNavigation />
          </main>
        </div>

      </body>
    </html>
  );
}

