"use client";

import { ReactNode } from "react";

interface BlobProps {
  children?: ReactNode;
  className?: string;
  blobColor?: string;
  blobSize?: string;
  showFrame?: boolean;
  frameColor?: string;
  showDots?: boolean;
  dotsColor?: string;
  backgroundColor?: string;
}

export default function Blob({
  children,
  className = "",
  blobColor = "#4169E1",
  blobSize = "500px",
  showFrame = true,
  frameColor = "#8A2BE2",
  showDots = true,
  dotsColor = "#FF0000",
  backgroundColor = "black",
}: BlobProps) {
  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${className}`}
    //   style={{ backgroundColor }}
    >

      {/* Blue blob shape */}
      <div
        className="absolute top-1/2 left-[20%] -translate-y-1/2 opacity-90 mix-blend-screen"
        style={{
          width: blobSize,
          height: blobSize,
          backgroundColor: blobColor,
          clipPath:
            "polygon(25% 5%, 75% 5%, 95% 35%, 100% 65%, 75% 95%, 25% 95%, 5% 65%, 5% 35%, 15% 15%, 50% 8%, 85% 20%, 92% 45%, 88% 70%, 70% 88%, 40% 92%, 12% 75%, 3% 50%, 8% 25%)",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

