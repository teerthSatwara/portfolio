
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';

import ThemeToggle from './theme-toggle';

export default function Home() {
  

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Navbar />
      
      <Hero />
      <AboutMe />
      
      <Footer />

    </div>
  );
}
