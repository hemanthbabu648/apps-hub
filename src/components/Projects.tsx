import React from 'react';

import ProjectCard from './ProjectCard';

import { useGetProjectsByCategoty } from '@/hooks/projects';
import { CATEGORYENUM } from '@/types';

type ProjectsProps = {
  selectedCategory: CATEGORYENUM;
};

const Projects: React.FC<ProjectsProps> = ({ selectedCategory }) => {
  const projectsBySelectedCategory = useGetProjectsByCategoty(selectedCategory);

  return (
    <div className="flex gap-3 flex-wrap justify-evenly">
      {projectsBySelectedCategory.map(project => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
};

export default Projects;
