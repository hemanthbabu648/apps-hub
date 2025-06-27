import clsx from 'clsx';
import Image from 'next/image';

import LinkButton from './LinkButton';
import NewsLetter from './NewsLetter';

import { allCategories } from '@/constants/categories';
import { BRAND_LOGO, BRAND_NAME } from '@/constants/home';
import { CATEGORYENUM } from '@/types';

type SidebarProps = {
  selectedCategory: CATEGORYENUM;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CATEGORYENUM>>;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <nav className={clsx('w-full flex-none bg-primary-dark text-white')}>
      <div className="h-screen flex flex-col justify-between border-r border-primary-light-blue-200">
        {/* Brand */}
        <div className="flex items-center gap-3 px-2 h-20 border-b border-primary-light-blue-200">
          <div className="relative w-10 h-10">
            <Image src={BRAND_LOGO} fill alt="Brand Logo" className="object-contain" />
          </div>
          <h1 className="text-lg font-bold">{BRAND_NAME}</h1>
        </div>
        {/* Projects by Category */}
        <p className="px-2 my-2 text-lg font-semibold">Categories</p>
        <div className="h-full px-2 overflow-y-scroll scrollbar-hide">
          {allCategories.map(category => (
            <LinkButton
              key={category.title}
              icon={category.icon}
              onClick={() => setSelectedCategory(category.title)}
              active={selectedCategory === category.title}
            >
              {category.title}
            </LinkButton>
          ))}
        </div>
        <NewsLetter />
      </div>
    </nav>
  );
};

export default Sidebar;
