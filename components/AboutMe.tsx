import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-5xl mx-auto text-center md:text-left md:flex md:items-center md:gap-12">
        
        {/* ✅ LEFT: Intro Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Teerth Satwara</span>, a graduate student 
            in <span className="font-semibold">Engineering Management at Johns Hopkins University</span> 
            with a foundation in Computer Science. I bridge the gap between technical development 
            and strategic product vision — from <strong>building AI-powered tools</strong> and 
            <strong> full-stack dashboards</strong> to <strong>consulting for research labs</strong> 
            and <strong>international organizations</strong>.  
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My passion lies in creating <em>human-centered software solutions</em> that are 
            data-driven and impactful. Whether it’s <strong>designing dashboards, building APIs, 
            or shaping product strategy</strong>, I thrive on projects that solve real-world 
            problems.
          </p>

          {/* ✅ Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/teerthsatwara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/teerthsatwara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* ✅ RIGHT: Optional Photo or Graphic */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <a
          href="/projects"
          className="px-6 py-3 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 dark:hover:bg-gray-300"
        >
          Explore My Work
        </a>
        </div>
      </div>
    </section>
  );
}
