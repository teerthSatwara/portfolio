// app/projects/[id]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projects = useProjects();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-600">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 bg-gray-100 dark:bg-gray-900 px-6">
      {/* Image */}
      

      {/* Title & Details */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.details}</p>

      {/* Tech Stack */}
      <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
      <ul className="flex gap-2 mb-6 flex-wrap">
        {project.tech.map((t, i) => (
          <li key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
            {t}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            🌍 Live Project
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-900 transition"
          >
            💻 GitHub
          </a>
        )}
        <Link
          href="/projects"
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 📄 PDF Placeholder (management only) */}
      {project.pdfLink && project.type === 'management' && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Case Study PDF</h3>
          <div className="w-full h-[600px] border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
            <object
              data={project.pdfLink}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Your browser does not support PDFs.{' '}
                <a href={project.pdfLink} className="text-blue-600 underline">
                  Download the PDF
                </a>
              </p>
            </object>
          </div>
        </div>
      )}
    </section>
  );
}
