'use client';

import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';
import Preview from '@/components/project/Preview';
import uuids from '@/constants/uuids';

const why = [
  '🖋️ Markdown-based writing (MDX for flexibility)',
  '🧱 Full control over layout, SEO, styling, and content',
  '⚡ Lightning-fast static performance',
  '💌 A working contact form to connect with readers',
];

const features = [
  '📝 Write posts in .mdx files with frontmatter metadata',
  '🎨 Clean and responsive custom design',
  '📁 Posts are statically generated for fast performance',
  '🔍 SEO-optimized with title, description, and slug-based routing',
  '🔗 Tag support for organizing posts (optional)',
  '💬 Contact form with form validation and EmailJS integration',
  '🧼 Clean codebase using modern React and hooks'
];

const nextFeatures = [
  '🌓 Dark mode toggle',
  '🏷️ Filter blog posts by tag ',
  '🗂️ Archive by month/year',
  '📈 Analytics',
];


function ProjectPage() {
  const projectId = uuids[5];
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
          I&apos;ve always wanted a place where I could write and share my thoughts on tech, showcase tutorials, and document my learning. Instead of using an existing CMS or platform, I decided to build my own: a fully custom blog platform using Next.js, MDX, and a modern React stack.
        </p>
        {project.live_url && (
          <Preview url={project.live_url} />
        )}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🧠 Why Build a Custom Blog?</h2>
          <p className='mb-1 text-base'>Sure, platforms like Medium or Hashnode exist. But they come with limitations — both in terms of customization and ownership. I wanted:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {why.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section >
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">✨ Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🔮 What’s Next?</h2>
          <p className='mb-1 text-base'>Here are some features I’m planning to add:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {nextFeatures.map((item, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{item}</li>
            ))}
          </ul>
        </section>
      </div>

    </ProjectLayout>
  );
}

export default ProjectPage;