import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./components/work.jsx";
import About from "./components/About.jsx";
import Intro from "./components/intro.jsx";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Intro />
    <Projects />
    <Footer />
  </>
);

const App = () => {
  const location = useLocation();

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/work"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Navbar />
                <Work />
                <Footer />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Navbar />
                <About />
                <Footer />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;
