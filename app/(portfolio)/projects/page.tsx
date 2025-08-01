'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useProjects } from '@/hooks/useProjects';
import Navbar from '@/components/Navbar';

export default function ProjectsPage() {
  const allProjects = useProjects();
  const [category, setCategory] = useState<'management' | 'technical'>('technical');

  const filteredProjects = allProjects.filter((p) =>
    category === 'technical' ? p.type === 'technical' : p.type === 'management'
  );

  return (
    <div>
      <Navbar/>
      <section className="min-h-screen py-12 bg-gray-100 dark:bg-black">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          My Projects
        </h1>

        {/* ✅ Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => setCategory('technical')}
            className={`px-4 py-2 rounded ${
              category === 'technical'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Technical
          </button>
          <button
            onClick={() => setCategory('management')}
            className={`px-4 py-2 rounded ${
              category === 'management'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Management
          </button>
        </div>

        {/* ✅ Project Cards with Tilt */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <motion.div
                className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* ✅ Use cardImage here instead of detailImage */}
                <Image
                  src={project.cardImage}  
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded mb-3 object-cover w-full h-48"
                />
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>

                {/* ✅ CLIPPED DESCRIPTION */}
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description.length > 100
                    ? project.description.slice(0, 100) + '…'
                    : project.description}
                </p>

                {/* ✅ Tech Stack Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
