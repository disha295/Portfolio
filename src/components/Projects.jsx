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
      <div className="bg-[#dfdff0] rounded-t-3xl px-6 md:px-12 py-10">
        <h2 className="text-4xl font-bold mb-4 text-pink-800 px-8 mt-4">
          Featured Work
        </h2>
        {topProjects.map((proj, index) => (
          <div
            key={index}
            className={`project-section min-h-screen px-6 md:px-16 relative z-0 ${
              index === topProjects.length - 1 ? "mb-0 pb-4" : ""
            }`}
            style={{ willChange: "transform, opacity", overflow: "visible" }}
          >
            <ProjectItem {...proj} />
            {index === topProjects.length - 1 && (
              <Link to="/work" className="sm:text-lg work-hover-btn">
                More Work →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
