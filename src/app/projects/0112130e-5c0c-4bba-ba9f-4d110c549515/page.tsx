import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';
import Preview from '@/components/project/Preview';
import uuids from '@/constants/uuids';

const goal = [
  '🧭 Simple navigation to explore all my apps quickly',
  '🧩 Component-driven UI to make it scalable.',
  '⚡ Fast performance with Next.js 15 and App Router',
  '📱 Responsive design with a beautiful and modern feel',
];

const features = [
  '🖼️ Grid-based layout for easy browsing of apps',
  '🏷️ Tags showing the tech used per project',
  '🔗 Buttons for live demo and source code',
  '📨 Contact form powered by EmailJS',
  'A fully functional contact form lets users reach out without leaving the site',
  'Auto reply to users with EmailJS',
  '⚙️ Form validation with react-hook-form + zod',
  '👨‍💻 Social Media- Social media links (GitHub, LinkedIn, etc.).'
];

const improvements = [
  'Add filter by tech stack or category',
  'Light/Dark mode support',
];


function ProjectPage() {
  const projectId = uuids[4];
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
          As developers, we build a lot — tools, experiments, full-stack apps, side projects. But often, these projects end up scattered across GitHub or buried under old deployments.
        </p>
        <p className='text-base font-normal text-primary-blue-500'>
          To solve that, I built <b>Apps Hub</b>— a clean, responsive web app to showcase all my live apps in one place. Think of it as a central hub where visitors can explore what I&apos;ve built, click through to demos, and dive into source code.
        </p>
        {project.live_url && (
          <Preview url={project.live_url} />
        )}

        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">✨ What Is Apps Hub?</h2>
          <p className='mb-1 text-base'>A centralized showcase of my applications — with clean design, categorized layout, and instant access to live demos and source code.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">✨ The Goal</h2>
          <p className='mb-1 text-base'>I wanted something more polished than just a list of links. My main goals were:</p>
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
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🔮 Future Improvements</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {improvements.map((item, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{item}</li>
            ))}
          </ul>
        </section>
      </div>

    </ProjectLayout>
  );
}

export default ProjectPage;