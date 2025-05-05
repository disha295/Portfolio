import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({
  year,
  title,
  role,
  description,
  image,
  link,
  lottie,
  variant = "standard",
}) => {
  const lottieRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      onEnter: () => lottieRef.current.play(),
      once: true, // optional
    });
  }, []);

  return (
    <div ref={containerRef} className="project-section px-6 md:px-12 py-12">
      <span className="text-sm font-medium text-pink-800">{year}</span>
      <div className="mt-1">
        <h3 className=" md:text-3xl font-medium text-gray-900">
          <span className="text-black">
            <strong>{title}</strong>
          </span>
          <br />
          <span className="text-sm">{role}</span>
        </h3>
      </div>
      <p className="text-black mt-3 max-w-4xl text-base">{description}</p>

      {/* Media Container with Button */}
      <div
        className={`relative mt-6 border border-gray-200 rounded-xl group w-full ${
          variant === "featured"
            ? "min-h-[500px] md:min-h-[650px]"
            : "min-h-[300px] md:min-h-[300px]"
        }`}
      >
        <div className="absolute inset-0 w-full h-full">
          {lottie ? (
            <Lottie
              animationData={lottie}
              lottieRef={lottieRef}
              loop={true}
              autoplay={false}
              className="w-full h-full object-contain"
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-gray-400">Media unavailable</div>
          )}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 left-4 bg-pink-800 text-white text-xs font-semibold rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300 shadow-md hover:bg-pink-700"
        >
          VISIT SITE →
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
