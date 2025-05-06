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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black cursor-pointer"
      onClick={runFastFontCycle}
      onTouchStart={runFastFontCycle}
      style={{ height: "100vh" }}
    >
      {/* Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/videos/Hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-4 pb-6">
        <h1
          className={`${fonts[fontIndex]} text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-tight leading-snug`}
        >
          Disha Vishal Shetiya
        </h1>

        <p className="mt-1 text-white text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] max-w-[90%]">
          Machine learning engineer crafting intelligent pipelines for scalable
          AI solutions.
        </p>

        <div className="mt-2">
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
