import SceneAnimation from "../assets/Scene.json";
import Reco from "../assets/Showreel_-Web-gallery-[remix].json";

const allProjects = [
  {
    year: "2025",
    title: "Brilliant Builders (Angstrom), presented at Chicago Build Expo",
    role: "Featured Work",
    description:
      "Document-intelligence RAG over 25+ RFPs on self-hosted Llama 3 and FAISS, inference on NVIDIA DGX Spark; 54-class construction safety detection (RetinaNet); real-time SLAM on Jetson Nano.",
    link: "https://brilliantbuilder.io",
  },
  {
    year: "2025",
    title: "HeartTrend",
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
      // TODO: add measured results here once the labeled evaluation is complete (hit@k, MRR, LLM-judge vs human agreement). Do not add numbers until they are measured.
      "RAG chatbot over UIS HR FAQ and web content (Streamlit, LangChain, ChromaDB, Llama 3 via Ollama). Building a labeled evaluation (hit@k, MRR, LLM-judge vs human agreement) to measure and improve retrieval.",
    image: "/img/Chat.png",
    link: "https://github.com/disha295/AI-Chatbot-For-HR",
  },
  // Add more projects below if needed
];

export default allProjects;
