import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import allProjects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const topProjects = allProjects.slice(0, 3); // Always get top 3

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
            toggleActions: "play none reverse none",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-white overflow-visible">
      <div className="bg-[#dfdff0] rounded-t-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-800 text-center sm:text-left">
          Featured Work
        </h2>
        <div className="space-y-12">
          {topProjects.map((proj, index) => (
            <div
              key={index}
              className={`project-section px-2 sm:px-4 md:px-6 lg:px-12 
                ${index === topProjects.length - 1 ? "mb-0 pb-4" : ""}`}
              style={{ willChange: "transform, opacity", overflow: "visible" }}
            >
              <ProjectItem {...proj} variant="featured" />
              {index === topProjects.length - 1 && (
                <div className="mt-6 text-left sm:text-left ">
                  <Link
                    to="/work"
                    className="text-left sm:text-lg work-hover-btn"
                  >
                    More Work →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
