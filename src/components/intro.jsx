import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcons from "../components/TechIcons";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left Column: Text */}
        <div ref={textRef} className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-4 tracking-tight leading-tight">
            In a nutshell...
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            As a machine learning engineer, I integrate data science with
            thoughtful design to create intelligent, impactful systems. My work
            is driven by curiosity and the challenge of turning raw ideas into
            polished products.
          </p>
          <Link to="/about" className="text-sm font-medium intro-hover-btn">
            Me behind the code →
          </Link>
        </div>

        {/* Right Column: Tech Icons */}
        <div ref={techRef} className="w-full md:w-1/2">
          <TechIcons />
        </div>
      </div>
    </section>
  );
};

export default Intro;
