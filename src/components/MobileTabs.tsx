import clsx from 'clsx';
import React from 'react';

import MobileTabsMoreOptions from './MobileTabsMoreOptions';

import { allCategories } from '@/constants/categories';
import { CATEGORYENUM } from '@/types';

type MobileTabsProps = {
  selectedCategory: CATEGORYENUM;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CATEGORYENUM>>;
};

const MobileTabs: React.FC<MobileTabsProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-full flex justify-between items-center gap-1 px-1">
      {allCategories.slice(0, 3).map(tab => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.title}
            className={clsx(
              'flex flex-1 flex-col gap-1 text-center py-2 justify-center items-center cursor-pointer',
              selectedCategory !== tab.title ? 'text-light-100' : 'text-primary-light-blue-200'
            )}
            onClick={() => setSelectedCategory(tab.title)}
          >
            <Icon className="w-5 h-5" />
            {tab.title}
          </button>
        );
      })}
      <MobileTabsMoreOptions
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default MobileTabs;
