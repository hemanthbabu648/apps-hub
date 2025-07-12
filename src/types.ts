import { IconType } from 'react-icons';

export enum CATEGORYENUM {
  PORTFOLIO = 'Portfolio',
  WED_DEVELOPMENT = 'Web Development',
  MOBILE_DEVELOPMENT = 'Mobile Development',
  GAME_DEVELOPMENT = 'Game Development',
  DATA_SCIENCE = 'Data Science',
  FINANCE = 'Finance',
  EDUCATION = 'Education',
  AGRICULTURE = 'Agriculture',
  BLOGS = 'Blogs',
  TRAVEL = 'Travel',
  HEALTHCARE = 'Healthcare',
  E_COMMERCE = 'E-commerce',
  SOCIAL_MEDIA = 'Social Media',
  AI_ML = 'AI & ML',
  IOT = 'IoT',
  BLOCKCHAIN = 'Blockchain',
  PRODUCTIVITY = 'Productivity',
  DESIGN_SYSTEMS = 'Design Systems',
  DEVOPS = 'DevOps',
  OPEN_SOURCE = 'Open Source',
}

export type Category = {
  title: CATEGORYENUM;
  description: string;
  icon: IconType;
};

export type PROJECT_ID_MAPPING = {
  [K in CATEGORYENUM]: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  category: CATEGORYENUM[];
  image: string;
  tags: string[];
  start_date?: string;
  end_date?: string;
  source_code_link?: string;
  live_url?: string;
  position: number;
};
