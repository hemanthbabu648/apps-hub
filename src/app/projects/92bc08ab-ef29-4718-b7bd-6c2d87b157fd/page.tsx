import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';
import Preview from '@/components/project/Preview';
import uuids from '@/constants/uuids';

const goal = [
  'Present myself as a developer through clean design and snappy interactions.',
  'Make it easy for people to browse my projects, blogs, and skills.',
  'Ensure great performance, SEO, and a smooth mobile experience.',
  'Create a foundation I can keep improving as I grow professionally.',
];

const features = [
  '🏠 Home - Hero section with dynamic intro text.',
  '👨‍💻 Projects - Highlighted list of featured projects.',
  '🧠 Skills - Categorized skills (Frontend, Tools, Languages, etc.).',
  '📓 Blogs - Plan to support Markdown/MDX blog using static site generation.',
  '📬 Contact - Simple and functional contact form (email or emailjs).',
  '👨‍💻 Social Media- Social media links (GitHub, LinkedIn, etc.).'
];

const special = [
  '🔄 Lightweight and fully static — perfect for performance and SEO.',
  '✨ Smooth animations using Framer Motion.',
  '🎨 Custom design — no templates, fully tailored to my style.',
  '📱 Responsive across all devices.',
  'Fade-ins, slide-ups on scroll, and hover effects for buttons.',
  'Interactive hover effects on project cards'
];


function ProjectPage() {
  const projectId = uuids[2];
  const project = useGetProject(projectId);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-12 border border-gray-200 text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <ProjectLayout project={project}>
      <div className='flex flex-col gap-4'>
        <p className='text-base font-normal text-primary-blue-500'>
          In today&apos;s digital world, having a personal website is no longer optional — it&apos;s your online business card, resume, and portfolio all in one. Fully responsive personal portfolio designed to showcase my projects, skills, and professional experience.
          I&apos;ll walk you through why I built it, what I used, and how I made it come to life.
        </p>
        {project.live_url && (
          <Preview url={project.live_url} />
        )}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">✨ The Goal</h2>
          <p className='mb-1 text-base'>I didn&apos;t want just another resume site. My goals were clear:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {goal.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section >
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🔍 Pages & Features</h2>
          <p className='mb-1 text-base'>Here’s what the portfolio currently includes:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">⚙️ What Makes It Special?</h2>
          <p className='mb-1 text-base'>If you&apos;ve ever played Tic Tac Toe before, you already know the rules. But here&apos;s a quick refresher:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {special.map((item, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{item}</li>
            ))}
          </ul>
        </section>
      </div>

    </ProjectLayout>
  );
}

export default ProjectPage;