import {
  FaUserTie,
  FaMobileAlt,
  FaGamepad,
  FaChartLine,
  FaMoneyBillWave,
  FaGraduationCap,
  FaSeedling,
  FaBlogger,
  FaPlane,
  FaHeartbeat,
  FaShoppingCart,
  FaUsers,
  FaRobot,
  FaMicrochip,
  FaCube,
  FaTasks,
  FaServer,
  FaCodeBranch,
  FaLaptop,
} from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

import { Category, CATEGORYENUM } from '@/types';

// Type-safe mapping: ensures all Category values are present
const allCategoriesMap: {
  [K in CATEGORYENUM]: Omit<Category, 'title'> & { title: K };
} = {
  [CATEGORYENUM.PORTFOLIO]: {
    description: 'Projects related to web development using various technologies.',
    icon: FaUserTie,
    title: CATEGORYENUM.PORTFOLIO,
  },
  [CATEGORYENUM.FINANCE]: {
    description: 'Projects related to financial tools, dashboards, and budgeting apps.',
    icon: FaMoneyBillWave,
    title: CATEGORYENUM.FINANCE,
  },
  [CATEGORYENUM.EDUCATION]: {
    description: 'Projects focused on e-learning platforms, quizzes, and student management.',
    icon: FaGraduationCap,
    title: CATEGORYENUM.EDUCATION,
  },
  [CATEGORYENUM.AGRICULTURE]: {
    description: 'Projects involving farming tech, crop prediction, and agri-market tools.',
    icon: FaSeedling,
    title: CATEGORYENUM.AGRICULTURE,
  },
  [CATEGORYENUM.WED_DEVELOPMENT]: {
    description: 'Projects related to web development using various technologies.',
    icon: FaLaptop,
    title: CATEGORYENUM.WED_DEVELOPMENT,
  },
  [CATEGORYENUM.MOBILE_DEVELOPMENT]: {
    description: 'Projects focused on mobile application development.',
    icon: FaMobileAlt,
    title: CATEGORYENUM.MOBILE_DEVELOPMENT,
  },
  [CATEGORYENUM.GAME_DEVELOPMENT]: {
    description: 'Projects related to game design and development.',
    icon: FaGamepad,
    title: CATEGORYENUM.GAME_DEVELOPMENT,
  },
  [CATEGORYENUM.DATA_SCIENCE]: {
    description: 'Projects involving data analysis and machine learning.',
    icon: FaChartLine,
    title: CATEGORYENUM.DATA_SCIENCE,
  },

  [CATEGORYENUM.BLOGS]: {
    description: 'Articles and posts sharing knowledge, tutorials, and personal experiences.',
    icon: FaBlogger,
    title: CATEGORYENUM.BLOGS,
  },
  [CATEGORYENUM.TRAVEL]: {
    description: 'Projects related to trip planning, booking systems, and location discovery.',
    icon: FaPlane,
    title: CATEGORYENUM.TRAVEL,
  },
  [CATEGORYENUM.HEALTHCARE]: {
    description: 'Projects involving medical data, appointment systems, or health tracking.',
    icon: FaHeartbeat,
    title: CATEGORYENUM.HEALTHCARE,
  },
  [CATEGORYENUM.E_COMMERCE]: {
    description: 'Projects including shopping platforms, product management, and payments.',
    icon: FaShoppingCart,
    title: CATEGORYENUM.E_COMMERCE,
  },
  [CATEGORYENUM.SOCIAL_MEDIA]: {
    description: 'Projects involving user interaction, real-time updates, and feeds.',
    icon: FaUsers,
    title: CATEGORYENUM.SOCIAL_MEDIA,
  },
  [CATEGORYENUM.AI_ML]: {
    description: 'Projects based on artificial intelligence and machine learning models.',
    icon: FaRobot,
    title: CATEGORYENUM.AI_ML,
  },
  [CATEGORYENUM.IOT]: {
    description: 'Projects involving hardware-software integration and sensor data.',
    icon: FaMicrochip,
    title: CATEGORYENUM.IOT,
  },
  [CATEGORYENUM.BLOCKCHAIN]: {
    description: 'Projects dealing with decentralized applications and smart contracts.',
    icon: FaCube,
    title: CATEGORYENUM.BLOCKCHAIN,
  },
  [CATEGORYENUM.PRODUCTIVITY]: {
    description: 'Tools like to-do lists, calendars, note apps, and time trackers.',
    icon: FaTasks,
    title: CATEGORYENUM.PRODUCTIVITY,
  },
  [CATEGORYENUM.DESIGN_SYSTEMS]: {
    description: 'Projects around reusable UI components and design libraries.',
    icon: MdDesignServices,
    title: CATEGORYENUM.DESIGN_SYSTEMS,
  },
  [CATEGORYENUM.DEVOPS]: {
    description: 'Projects related to CI/CD, automation, and infrastructure tools.',
    icon: FaServer,
    title: CATEGORYENUM.DEVOPS,
  },
  [CATEGORYENUM.OPEN_SOURCE]: {
    description: 'Community-driven and publicly available tools or libraries.',
    icon: FaCodeBranch,
    title: CATEGORYENUM.OPEN_SOURCE,
  },
};

export const allCategories: Category[] = Object.values(allCategoriesMap);
