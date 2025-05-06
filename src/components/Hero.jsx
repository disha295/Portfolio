import { useEffect, useState, useRef } from "react";
import Button from "./Button";

const fonts = [
  "font-Humble",
  "font-Stardom",
  "font-robertm",
  "font-general",
  "font-allsorts",
  "font-Pencerio",
  "font-Comico",
];

const Hero = () => {
  const [fontIndex, setFontIndex] = useState(0);
  const [videoHeight, setVideoHeight] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const runFastFontCycle = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    intervalRef.current = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 100);
    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 2000);
  };

  useEffect(() => {
    runFastFontCycle();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Resize logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && videoRef.current) {
        setVideoHeight(videoRef.current.offsetHeight);
      } else {
        setVideoHeight(null);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black cursor-pointer"
      onClick={runFastFontCycle}
      onTouchStart={runFastFontCycle}
      style={{
        height: videoHeight ? `${videoHeight}px` : "100vh",
      }}
    >
      {/* Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-auto object-contain lg:h-full lg:object-cover"
          src="/videos/Hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={() => {
            if (window.innerWidth < 1024 && videoRef.current) {
              setVideoHeight(videoRef.current.offsetHeight);
            }
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center sm:text-xs px-4 sm:px-2 pb-6">
        <h1
          className={`${fonts[fontIndex]} text-white text-[clamp(2rem,4vw,3rem)] sm:text-[clamp(1.5rem,5vw,4rem)] tracking-tight leading-snug`}
        >
          Disha Vishal Shetiya
        </h1>
        <p className="mt-2 text-white text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-xs md:max-w-md">
          Machine learning engineer crafting intelligent pipelines for scalable
          AI solutions.
        </p>
        <div className="mt-3 sm:mt-4">
          <Button
            id="product-button"
            title="MY CAREER IN ONE PAGE ↗"
            href="/doc/DishaShetiya.pdf"
            containerClass="flex items-center justify-center gap-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
