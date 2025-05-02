import React, { useState, useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const images = [
    "/img/Disha1.jpeg",
    "/img/Disha2.jpeg",
    "/img/Disha4.jpeg",
    "/img/Disha5.jpeg",
    "/img/Disha6.jpeg",
    "/img/Disha7.jpeg",
    "/img/Disha8.jpeg",
  ];

  const [centerIndex, setCenterIndex] = useState(0);

  const rotate = (direction) => {
    setCenterIndex(
      (prev) => (prev + direction + images.length) % images.length
    );
  };

  const getStyle = (offset) => {
    const angle = offset * 6;
    const x = offset * 320;
    const y = Math.pow(offset, 2) * 10;
    const scale = offset === 0 ? 1.1 : 1;
    const zIndex = 10 - Math.abs(offset);
    const grayscale = offset === 0 ? "none" : "grayscale(100%)";

    return {
      transform: `translate(${x}px, ${y}px) rotate(${angle}deg) scale(${scale})`,
      zIndex,
      filter: grayscale,
      transition: "all 0.5s ease",
      transformOrigin: "bottom center",
    };
  };

  const visibleIndexes = [-1, 0, 1].map(
    (offset) => (centerIndex + offset + images.length) % images.length
  );

  return (
    <div className="min-h-screen bg-white pt-24 text-center overflow-hidden">
      <h1 className="text-4xl font-Stardom-Regular font-semibold mb-16">
        About Me
      </h1>

      {/* Rotating Image Carousel */}
      <div className="relative flex justify-center items-center h-[500px]">
        {visibleIndexes.map((imgIndex, i) => {
          const offset = i - 1;
          return (
            <img
              key={imgIndex}
              src={images[imgIndex]}
              alt={`img-${imgIndex}`}
              onClick={() => rotate(offset)}
              className="absolute w-64 h-96 object-cover rounded-2xl shadow-xl cursor-pointer"
              style={getStyle(offset)}
            />
          );
        })}
      </div>

      {/* Text Section */}
      <section className="max-w-3xl mx-auto px-6 mt-20 text-left leading-relaxed text-gray-700 font-robert-medium">
        <h2 className="text-7xl font-Pencerio-Hairline font-bold mb-6 text-center">
          Hi, I'm Disha!
        </h2>
        <p className="mb-6">
          I’m a Machine Learning Engineer based in Chicago, focused on
          engineering intelligent systems that scale.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2 text-pink-800">
          Beyond the Code
        </h3>
        <p className="mb-6">
          Before I ever wrote a line of code, I was drawing with Turtle graphics
          and animating with Adobe Flash; turning pixels into motion and
          curiosity into joy. That spark turned into a deep fascination for how
          systems work, how data moves, and how technology can make things feel
          like magic when done right. <br />I value beauty in many forms; on
          mountain trails, in a perfectly brewed cup of coffee, in the quiet
          gestures of people who care. When I’m not solving problems, I’m
          probably cuddling with my dog like its a full-time job, re-watching
          Harry Potter, or planning my next adventure. I believe the best
          breakthroughs come not just from grinding at the terminal, but from
          living curiously and loving deeply.
          <br />
          And yes, maybe, just maybe, I’ll make it to Forbes 30 under 30.
          <br />
          Dreaming big? After all this time? <br />
          Always.
        </p>

        <h3 className="text-xl font-semibold mt-16 mb-6 text-pink-800">
          Professional Background
        </h3>

        <div className="space-y-6">
          {/* Experience Item */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Left: Role and Bullet Points */}
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Data Analyst</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 mt-1">
                <li>Designed Tableau and QuickSight dashboards</li>
                <li>Automated SQL & Python pipelines to scale analytics</li>
              </ul>
            </div>

            {/* Right: Company and Dates */}
            <div className="w-full md:w-60 text-left md:text-right mt-2 md:mt-0">
              <p className="font-semibold text-gray-800">Innovise Technology</p>
              <p className="text-sm text-gray-500">2025 – Present</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="flex-1">
              <p className="font-semibold text-gray-900">
                Machine Learning Engineer
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-700 mt-1 ">
                <li>Fine-tuned LLaMA3 & GPT models with TensorFlow</li>
                <li>Deployed RAG pipelines using LangChain + ChromaDB</li>
              </ul>
            </div>
            <div className="w-full md:w-60 text-left md:text-right mt-2 md:mt-0">
              <p className="font-semibold text-gray-800">
                University of Illinois
              </p>
              <p className="text-sm text-gray-500">2024 – 2025</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="flex-1">
              <p className="font-semibold text-gray-900">SDE Intern</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 mt-1">
                <li>Developed REST APIs and optimized MySQL schemas</li>
                <li>Implemented Jenkins CI/CD and Postman testing</li>
              </ul>
            </div>
            <div className="w-full md:w-60 text-left md:text-right mt-2 md:mt-0">
              <p className="font-semibold text-gray-800">
                Ness Digital Engineering
              </p>
              <p className="text-sm text-gray-500">2021 – 2022</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12 mb-12">
          📍 Chicago, IL | 📞 217-718-0713 | ✉️{" "}
          <a
            href="mailto:dishetiya@gmail.com"
            className="text-pink-700 hover:underline"
          >
            dishetiya@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
