// app/projects/[id]/page.tsx
import Link from 'next/link';
import { useProjects } from '@/hooks/useProjects';

interface PageProps {
  params: { id: string };
  // If you don’t use searchParams, you can leave it off entirely.
}

export default function ProjectDetail({ params }: PageProps) {
  const { id } = params;
  const projects = useProjects();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Project not found</h1>
          <Link href="/projects" className="text-blue-600 underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
        {/* Title & Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.details}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
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

        {/* PDF Embed for Management */}
        {project.pdfLink && project.type === 'management' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Case Study PDF
            </h3>
            <div className="w-full h-[500px] border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
              <object
                data={project.pdfLink}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p className="p-4 text-center text-gray-600 dark:text-gray-400">
                  Your browser doesn’t support PDFs.{' '}
                  <a
                    href={project.pdfLink}
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    Download the PDF
                  </a>
                </p>
              </object>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
