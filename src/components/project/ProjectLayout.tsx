import { Project } from '@/types'
import React from 'react'
import HeaderCard from './HeaderCard';
import Preview from './Preview';
import LicenseAndSharable from './LicenseAndSharable';

type ProjectLayoutProps = {
  project: Project;
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project, children }) => {
  return (
    <>
      <HeaderCard projectName={project.name}
        projectImage={project.image}
        description={project.description}
        cateogory={project.category}
      />
      {project.live_url && (
        <Preview url={project.live_url} />
      )}
      <div>
        {children}
      </div>
      <LicenseAndSharable
        projectName={project.name}
        projectSourceCode={project.source_code_link}
        projectURL={project.live_url}
      />
    </>
  )
}

export default ProjectLayout