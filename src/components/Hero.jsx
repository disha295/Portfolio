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

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black cursor-pointer"
      onClick={runFastFontCycle}
      onTouchStart={runFastFontCycle}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover object-[center_top] sm:object-center"
          src="/videos/Hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Content */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center text-center px-4 sm:px-6">
        <h1
          className={`${fonts[fontIndex]} text-white text-[clamp(2.25rem,6vw,4.5rem)] tracking-tight leading-tight`}
        >
          Disha Vishal Shetiya
        </h1>

        <p className="mt-3 text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl">
          Machine learning engineer crafting intelligent pipelines for scalable
          AI solutions.
        </p>

        <div className="mt-5">
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
