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
    <div ref={containerRef} className="project-section w-full">
      <span className="text-sm font-medium text-pink-800">{year}</span>
      <div className="mt-1">
        <h3 className="text-2xl sm:text-3xl font-medium text-black leading-snug">
          <strong>{title}</strong>
          <br />
          <span className="text-sm">{role}</span>
        </h3>
      </div>
      <p className="text-black mt-3 max-w-4xl text-base sm:text-lg leading-relaxed">
        {description}
      </p>

      <div
        className={`relative mt-6 border border-gray-200 rounded-xl group w-full overflow-hidden ${
          variant === "featured"
            ? "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            : "min-h-[250px] sm:min-h-[300px]"
        }`}
      >
        <div className="absolute inset-0 w-full h-full">
          {lottie ? (
            <Lottie
              animationData={lottie}
              lottieRef={lottieRef}
              loop={true}
              autoplay={false}
              className="w-full h-full object-cover sm:object-contain"
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-gray-400 p-4">Media unavailable</div>
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
