import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const repeaterRef = useRef(null);

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

  const setupRecurringCycle = () => {
    runFastFontCycle();
    repeaterRef.current = setInterval(runFastFontCycle, 10500);
  };

  const stopRecurringCycle = () => {
    clearInterval(repeaterRef.current);
  };

  useEffect(() => {
    runFastFontCycle(); // fire once initially

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onEnter: setupRecurringCycle,
        onEnterBack: setupRecurringCycle,
        onLeave: stopRecurringCycle,
        onLeaveBack: stopRecurringCycle,
      },
    });

    tl.to(overlayRef.current, {
      opacity: 0.6,
      backdropFilter: "blur(6px)",
      duration: 1.2,
      ease: "power2.out",
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
      "-=0.8"
    );

    tl.to(
      videoRef.current,
      {
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
      },
      0
    );

    ScrollTrigger.refresh();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      clearInterval(repeaterRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden cursor-pointer bg-black"
      onClick={runFastFontCycle}
    >
      {/* 🎥 Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={videoRef} className="w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/videos/Hero1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* 🌫 Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-10 opacity-0 backdrop-blur-0 transition-all duration-1000"
      />

      {/* 📝 Text */}
      <div
        ref={textRef}
        className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 opacity-0
        [will-change:opacity,transform] [backface-visibility:hidden] [transform-style:preserve-3d]"
      >
        <h1
          className={`${fonts[fontIndex]} text-[clamp(2.5rem,7vw,10rem)] text-white tracking-tight leading-none whitespace-nowrap`}
        >
          Disha Vishal Shetiya
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg font-robert-regular max-w-xl">
          Machine learning engineer crafting intelligent pipelines for scalable
          AI solutions.
        </p>
        <a
          href="/doc/DishaShetiya.pdf"
          className="text-sm font-medium text-white mt-3 hero-hover-btn"
          target="_blank"
          rel="noreferrer"
        >
          My Career in One Page ↗
        </a>
      </div>
    </section>
  );
};

export default Hero;
