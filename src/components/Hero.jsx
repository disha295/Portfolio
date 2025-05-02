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
    runFastFontCycle(); // run once initially

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden cursor-pointer bg-black"
      onClick={runFastFontCycle}
    >
      {/* 🎥 Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/Hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* 🌫 Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-10" />

      {/* 📝 Text at Bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center text-center px-4">
        <h1
          className={`${fonts[fontIndex]} text-[clamp(2.5rem,7vw,10rem)] text-white tracking-tight leading-none whitespace-nowrap`}
        >
          Disha Vishal Shetiya
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg font-robert-regular max-w-2xl">
          Machine learning engineer crafting intelligent pipelines for scalable
          AI solutions.
        </p>

        <Button
          id="product-button"
          title="MY CAREER IN ONE PAGE ↗"
          href="/doc/DishaShetiya.pdf"
          containerClass="md:flex hidden items-center justify-center gap-1 mt-6"
        />
      </div>
    </section>
  );
};

export default Hero;
