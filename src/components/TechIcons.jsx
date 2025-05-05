import React, { useRef, useEffect, useState } from "react";
import {
  FaPython,
  FaJava,
  FaDocker,
  FaReact,
  FaNode,
  FaGithub,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiFastapi,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiPostgresql,
  SiMongodb,
  SiJupyter,
  SiGit,
  SiGooglecloud,
  SiPandas,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const techCategories = [
  {
    title: "Languages",
    items: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiCplusplus />, label: "C++" },
      { icon: <FaJava />, label: "Java" },
      { icon: <IoLogoJavascript />, label: "JavaScript" },
      { icon: <FaDatabase />, label: "SQL" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaNode />, label: "Node.js" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <FaDocker />, label: "Docker" },
    ],
  },
  {
    title: "ML & Data Science",
    items: [
      { icon: <SiTensorflow />, label: "TensorFlow" },
      { icon: <SiPytorch />, label: "PyTorch" },
      { icon: <SiScikitlearn />, label: "Scikit-learn" },
      { icon: <SiKeras />, label: "Keras" },
      { icon: <SiJupyter />, label: "Jupyter" },
      { icon: <SiNumpy />, label: "NumPy" },
      { icon: <SiPandas />, label: "Pandas" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaAws />, label: "AWS" },
      { icon: <SiGooglecloud />, label: "GCP" },
    ],
  },
];

const TechIcons = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".card");

    const handleScroll = () => {
      let closestIndex = 0;
      let closestOffset = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        const offset = Math.abs(containerCenter - cardCenter);

        // Allow last card to activate slightly earlier
        const isLastCard = index === cards.length - 1;
        const buffer = isLastCard ? rect.width * 0.4 : 0; // Add left-side tolerance

        if (offset - buffer < closestOffset) {
          closestOffset = offset - buffer;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial trigger

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-auto px-2 sm:px-4 md:px-6 scroll-smooth snap-x snap-mandatory"
    >
      <div className="flex h-[280px] sm:h-[300px] gap-4 md:gap-6 pb-6 px-6">
        {techCategories.map((cat, index) => (
          <div
            key={cat.title}
            data-index={index}
            className={`card snap-center shrink-0 w-[260px] sm:w-[300px] md:w-[340px] h-full rounded-2xl transition-all duration-300 ease-in-out
        ${
          activeIndex === index
            ? "scale-105 z-20 bg-white shadow-xl border border-gray-200"
            : "scale-95 z-10 bg-gray-50 border border-dashed border-gray-300"
        }`}
          >
            <div
              className={`px-4 sm:px-6 py-6 h-full flex flex-col justify-start transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-60"
              }`}
            >
              <h4 className="font-bold text-base sm:text-lg mb-4 text-pink-800 tracking-tight border-b border-gray-200 pb-2">
                {cat.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    <span className="text-[22px] sm:text-[26px]">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
