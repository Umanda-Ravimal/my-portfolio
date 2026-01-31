import Image from "next/image";
import backdropImage from "@/assets/images/backdrop.png";
import myHomeImage from "@/assets/images/myHomeImage.png";

export default function Home() {
  return (
    <div className="flex min-h-[85vh] bg-white font-sans dark:bg-black">
      {/* Left side - Content */}
      <main className="flex-1 flex flex-col min-h-[85vh] justify-center bg-white dark:bg-black">
        <div className="flex flex-col gap-2 sm:gap-1">
          {/* Hi, my name is */}
          <p className="text-lg sm:text-xl text-primary dark:text-primary font-mono">
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-heading dark:text-heading">
            Umanda Ravimal.
          </h1>
          
          {/* Tagline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary dark:text-secondary">
            I build things for the web.
          </h2>
          
          {/* Description */}
          <p className=" text-base sm:text-lg leading-relaxed text-text dark:text-text mt-4">
            Full-stack software engineer with experience developing scalable web applications. 
            Focused on clean, maintainable code and performance, with hands-on experience in cloud deployment. 
            Actively exploring AI to build more intelligent systems.
          </p>
        </div>
      </main>

      {/* Right side - Backdrop Image with Home Image on top */}
      <div className="hidden lg:block w-2/5 min-h-[85vh] relative overflow-hidden bg-black">
        {/* Backdrop Image - Background layer */}
        <Image
          src={backdropImage}
          alt="Backdrop"
          // fill
          className="object-cover object-center top-13 absolute"
          priority
          style={{ height:'85%' }}
        />
        {/* Home Image - Foreground layer */}
        <Image
          src={myHomeImage}
          alt="Home"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  );
}

