'use client';

import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';

const features = [
  'Classic 3x3 Tic Tac Toe gameplay',
  'Responsive and modern UI',
  'Winner detection and display',
  'Reset button to start a new game',
  'Component-based architecture',
  'SCSS styling for easy customization',
  'Instant feedback on moves',
  'Easy to deploy and maintain',
];
const usage = [
  'Learning React basics',
  'Practicing component-based UI design',
  'Demonstrating simple game logic in the browser',
  'Showcasing modern frontend tooling',
];
const gameLogic = 'Winner calculation is handled by calculateWinner in src/helpers.jsx.';

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
      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-primary-blue-500">Features</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {features.map((feature, idx) => (
            <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
          ))}
        </ul>
      </section>

      {/* Usage Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-primary-blue-500">Usage</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {usage.map((item, idx) => (
            <li key={idx} className="marker:text-primary-blue-300">{item}</li>
          ))}
        </ul>
      </section>

      {/* Game Logic Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-primary-blue-500">Game Logic</h2>
        <p className="text-gray-700 text-base leading-relaxed">{gameLogic}</p>
      </section>
    </ProjectLayout>
  );
}

export default ProjectPage;