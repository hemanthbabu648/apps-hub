import { allProjects } from '../constants/projects';
import { CATEGORYENUM } from '../types';

export const useGetAllProjects = () => {
  return allProjects;
};

export const useGetProjectsByCategoty = (category: CATEGORYENUM) => {
  const projects = useGetAllProjects();

  return projects.filter(project => project.category.includes(category));
};

export const useGetProject = (projectID: string) => {
  const projects = useGetAllProjects();

  const filteredPro = projects.filter(project => project.id === projectID)[0];
  return filteredPro;
};
