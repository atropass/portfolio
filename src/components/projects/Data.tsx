import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Duken.ai',
    description:
      'Co-founded an AI-native SaaS platform for e-commerce, acquiring and retaining 37+ active, paying customers by achieving product-market fit. Engineered the core AI feature for automated ad targeting, which increased customer conversion rates by an average of 33% and became a key driver for user acquisition. ',
    techStack: [
      'Python',
      'FastAPI',
      'Golang',
      'Docker',
      'CI/CD',
      'Redis',
      'gRPC',
      'Jenkins',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'GCP',

    ],
    date: '2023 - Present',
    links: [{ name: 'Website', url: 'https://www.dukenapp.kz/' }],
    images: [],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="text-neutral-700 dark:text-neutral-200">
      <p className="mb-6 text-sm md:text-base">
        {projectData.description}
      </p>

      {projectData.techStack && (
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Links</h3>
          <div className="flex flex-wrap gap-4">
            {projectData.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              >
                <Link className="h-4 w-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup Project',
    title: 'Duken.ai',
    src: '/syntopreview.png', // Placeholder image
    content: <ProjectContent project={{ title: 'Duken.ai' }} />,
  },
];
