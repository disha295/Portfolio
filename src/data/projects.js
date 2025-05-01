import SceneAnimation from "../assets/Scene.json";
import Reco from "../assets/Showreel_-Web-gallery-[remix].json";

const allProjects = [
  {
    year: "2025",
    title: "HeartTrend: Data-Driven Health Trends and Lifestyle Nudges",
    role: "Personal Project",
    description:
      "HeartTrend is a personal health analytics dashboard that visualizes long-term Apple Health data like HR, HRV, and ECGs. It translates raw signals into reflective insights and personalized lifestyle nudges for better well-being.",
    lottie: SceneAnimation,
    link: "https://disha295.github.io/",
  },
  {
    year: "2025",
    title: "Recommendation System",
    role: "AI Product Development",
    description:
      "Engineered a full-stack AI-powered recommendation system featuring scalable ML deployment. Leveraged LLaMA3, FAISS, ChromaDB, and LangChain to build a retrieval-augmented product engine. Developed a FastAPI backend with a React frontend to deliver intelligent, personalized suggestions through a seamless and performant user experience.",
    lottie: Reco,
    link: "https://github.com/disha295/Recommendation_system",
  },

  {
    year: "2024",
    title: "AI Chatbot for HR Automation",
    role: "Research Project",
    description:
      "Developed an AI-driven HR chatbot by fine-tuning LLaMA 3 and GPT-3.5 models in Python/TensorFlow to automate HR query resolution. Architected Retrieval-Augmented Generation (RAG) pipelines using ChromaDB and LangChain, improving chatbot response speed by 76% and boosting accuracy by 65% across distributed systems, enabling real-time, scalable HR support.",
    image: "/img/Chat.png",
    link: "https://github.com/disha295/AI-Chatbot-For-HR",
  },
  // Add more projects below if needed
];

export default allProjects;
