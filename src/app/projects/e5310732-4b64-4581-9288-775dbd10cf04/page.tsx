'use client';

import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';
import Preview from '@/components/project/Preview';

const why = [
  'Simple rules, yet logic-heavy under the hood.',
  'Easy to build a great user experience.',
  'Perfect to experiment with component structure and styling.',
  'Plus, it was just fun to build!',
];

const features = [
  'A classic 3x3 grid.',
  'Turn-based logic with X and O.',
  'Winner detection — or a draw.',
  'A button to restart the game instantly.',
  'Clean, responsive UI built with SCSS modules.'
];

const usage = [
  'The game starts with Player X.',
  'Players take turns placing their symbol in an empty cell.',
  'The first to align 3 symbols horizontally, vertically, or diagonally wins.',
  "If all cells are filled without a winner, it's a draw.",
  'Hit “Restart” to start over anytime.',
  'You can play with a friend on the same device.'
];


function ProjectPage() {
  const project = useGetProject('e5310732-4b64-4581-9288-775dbd10cf04');

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
          Who doesn&pos;t love a quick game of Tic Tac Toe? It&apos;s a timeless classic — and one of the best beginner-friendly games to build when diving into frontend development. In this post, I&apos;ll walk you through the Tic Tac Toe game I built using React, Vite, and SCSS, hosted live on Vercel.
        </p>
        {project.live_url && (
          <Preview url={project.live_url} />
        )}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">💡 Why I Built This</h2>
          <p className='mb-1 text-base'>As a frontend developer, I wanted to combine clean UI, solid logic, and fast deployment into a fun project. Tic Tac Toe checked all the boxes:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {why.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section >
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🧩 What It Does</h2>
          <p className='mb-1 text-base'>This is a two-player Tic Tac Toe game that you can play in your browser with a friend. Here&pos;s what you can expect:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">🎮 How to Play</h2>
          <p className='mb-1 text-base'>If you&apos;ve ever played Tic Tac Toe before, you already know the rules. But here&apos;s a quick refresher:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {usage.map((item, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{item}</li>
            ))}
          </ul>
        </section>
      </div>

    </ProjectLayout>
  );
}

export default ProjectPage;