import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Hackathons from './sections/Hackathons';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {loading ? (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f2d] to-[#1a1a2e]">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 rounded-full border-4 border-t-[#1E90FF] border-r-[#39FF14] border-b-[#FF2E8D] border-l-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-[#0f0f2d] flex items-center justify-center">
              <span className="text-white text-xl font-bold">P</span>
            </div>
          </div>
          <p className="text-white mt-4 text-lg">Loading Portfolio...</p>
        </div>
      ) : (
        <>
          <main className="relative z-0 bg-gradient-to-b from-[#0f0f2d] to-[#1a1a2e]">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Hackathons />
            <TechStack />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </main>
        </>
      )}
    </div>
  );
};

export default App;