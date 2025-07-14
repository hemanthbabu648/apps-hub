import { useGetProject } from '@/hooks/projects';
import React from 'react';
import ProjectLayout from '@/components/project/ProjectLayout';
import Preview from '@/components/project/Preview';
import uuids from '@/constants/uuids';

const goal = [
  '🧾 Track income and expenses',
  '📊 Visualize your financial activity',
  '🧮 Categorize transactions',
  '🔐 Securely store data using Supabase',
  '🔄 Access your data anytime, from any device',
];

const features = [
  '📥 Add income and expense entries',
  '🗃️ Filter by category, type, or date',
  '📈 Track your balance and spending patterns',
  '🧾 View recent transactions in a clean table',
  '🛡️ Authenticated user sessions (via Supabase)',
  '📲 Responsive UI for mobile and desktop'
];

const featurePlans = [
  '📲 Mobile App (Google Play Store, App Store)',
  '💳 Add recurring expenses & EMI tracking',
  '🧮 Monthly budget planner',
  '🟢 Graphs and visual insights',
  '🔗 Connect to bank APIs for automated syncing (long-term)',
  '☁️ User dashboard with cloud backup & export options'
];


function ProjectPage() {
  const projectId = uuids[6];
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
          Managing your personal finances is hard — but building a system to manage it? That’s a whole other challenge. I recently created a full-stack Personal Finance Tracker that helps users monitor their income, expenses, and overall financial health — all in one clean dashboard.
        </p>
        <p className='text-base font-normal text-primary-blue-500'>
          This project was more than a CRUD app — it pushed me to integrate modern tools like Supabase, Express, and React, while delivering a responsive and intuitive user interface.
        </p>
        {project.live_url && (
          <Preview url={project.live_url} />
        )}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">📱 What is the Personal Finance Tracker?</h2>
          <p className='mb-1 text-base'>A responsive, user-friendly web app that allows you to:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {goal.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section >
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">📦 Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">📈 Future Plans</h2>
          <p className='mb-1 text-base'>Here’s what I&apos;m planning next:</p>
          <ul className="list-disc pl-6 text-gray-700">
            {featurePlans.map((item, idx) => (
              <li key={idx} className="marker:text-primary-blue-300">{item}</li>
            ))}
          </ul>
        </section>
      </div>

    </ProjectLayout>
  );
}

export default ProjectPage;