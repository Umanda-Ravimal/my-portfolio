import Image from "next/image";
import backdropImage from "@/assets/images/backdrop.png";
import myHomeImage from "@/assets/images/myHomeImage.png";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-[85vh] bg-white font-sans dark:bg-black">
      {/* Image Section - Top on mobile only */}
      <div className=" flex justify-center block md:hidden w-full h-[40vh] sm:h-[50vh] relative overflow-hidden bg-black order-1">
        {/* Backdrop Image - Background layer */}
        <Image
          src={backdropImage}
          alt="Backdrop"
          className="object-cover object-center absolute top-8"
          style={{ height: '82%', width:'auto' }}
          priority
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

      {/* Content Section - Below image on mobile, Left on desktop */}
      <main className="flex-1 flex flex-col md:min-h-[40vh] lg:min-h-[85vh] md:justify-center bg-white dark:bg-black px-0 sm:px-4 md:px-6 lg:px-8 xl:px-12 order-2 md:order-1">
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3">
          {/* Hi, my name is */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary dark:text-primary font-mono">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-heading dark:text-heading">
            Umanda Ravimal.
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary dark:text-secondary">
            I build things for the web.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-text dark:text-text mt-2 sm:mt-4 md:mt-6 max-w-2xl">
            Full-stack software engineer with experience developing scalable web applications.
            Focused on clean, maintainable code and performance, with hands-on experience in cloud deployment.
            Actively exploring AI to build more intelligent systems.
          </p>
        </div>
      </main>

      {/* Right side - Backdrop Image with Home Image on top (Medium and above) */}
      <div className="hidden md:block md:w-1/2 lg:w-2/5 xl:w-2/5 min-h-[85vh] relative overflow-hidden bg-black order-2">
        {/* Backdrop Image - Background layer */}
        <Image
          src={backdropImage}
          alt="Backdrop"
          className="object-cover object-center top-13 absolute md:scale-90 lg:scale-90 xl:scale-100"
          priority
          style={{ height: '85%' }}
        />
        {/* Home Image - Foreground layer */}
        <Image
          src={myHomeImage}
          alt="Home"
          fill
          className="object-contain object-center md:scale-90 lg:scale-95 xl:scale-100"
          priority
        />
      </div>
    </div>
  );
}

