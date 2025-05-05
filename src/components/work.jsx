import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItem from "./ProjectItem";
import allProjects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Fix scroll reset after render
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    const sections = gsap.utils.toArray(".project-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { scale: 0.95, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            once: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-Stardom-Regular font-semibold mb-16 text-center font-sans">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {allProjects.map((proj, index) => (
            <div
              key={index}
              className="project-section min-h-[500px] md:min-h-[600px] px-6  transition duration-300 transform rounded-xl"
            >
              <ProjectItem {...proj} variant="standard" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
