import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'ColPali Vector Search',
    description: 'Production-ready vector search engine with advanced hybrid retrieval (BM25 + dense). Outperformed baseline RAG with +42.57% NDCG@5. Fully containerized & deployed in production.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Qdrant', 'Docker', 'GitLab CI/CD'],
    date: '2024',
    links: [],
    images: [
      {
        src: '/colpali1.png',
        alt: 'Query result with source attribution',
      },
      {
        src: '/colpali2.png',
        alt: 'Pipeline architecture',
      },
    ],
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
    <div>
      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
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
    title: 'Synto',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Fun Tool',
    title: 'Rrate',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Rrate' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Defai',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Defai' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Fitgear',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Fitgear' }} />,
  },
  {
    category: 'Business Intelligence',
    title: 'Datai',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Datai' }} />,
  },
  {
    category: '42 Project',
    title: '3d Pong Game',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  },
  {
    category: '42 Project',
    title: 'Minishell',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Minishell' }} />,
  },
  {
    category: 'Automation',
    title: 'YouBot',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'YouBot' }} />,
  },
  {
    category: 'Web Development',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
];
