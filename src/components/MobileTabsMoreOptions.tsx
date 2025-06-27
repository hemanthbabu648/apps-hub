import { Menu } from '@mantine/core';
import React, { useState } from 'react';
import { PiDotsNineBold } from 'react-icons/pi';

import { allCategories } from '@/constants/categories';
import { CATEGORYENUM } from '@/types';

type MobileTabsMoreOptionsProps = {
  selectedCategory: CATEGORYENUM;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CATEGORYENUM>>;
};

const MobileTabsMoreOptions: React.FC<MobileTabsMoreOptionsProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [openMoreOptions, setOpenMoreOptions] = useState<boolean>(false);
  return (
    <Menu
      shadow="md"
      width={275}
      opened={openMoreOptions}
      onOpen={() => setOpenMoreOptions(true)}
      onClose={() => setOpenMoreOptions(false)}
      closeOnItemClick={false}
    >
      <Menu.Target>
        <div
          className="flex-1 flex flex-col text-center py-2 justify-center items-center text-beige-500 cursor-pointer"
          onClick={() => setOpenMoreOptions(true)}
        >
          <PiDotsNineBold className="w-6 h-6" />
          More
        </div>
      </Menu.Target>
      <Menu.Dropdown
        className="!bg-primary-dark !border !border-slate-100 -mt-1"
        aria-hidden="false"
      >
        <Menu.Label>
          <span className="text-white text-base font-bold">Categories</span>
        </Menu.Label>
        {allCategories.slice(3, allCategories.length).map(cat => {
          const Icon = cat.icon;
          const active = selectedCategory === cat.title;
          return (
            <Menu.Item
              key={cat.title}
              styles={{
                item: {
                  backgroundColor: active ? '#758694' : '#070F2B',
                  color: '#fff',
                },
              }}
              leftSection={<Icon className="w-5 h-5" />}
              onClick={() => {
                setSelectedCategory(cat.title);
                setOpenMoreOptions(false);
              }}
            >
              {cat.title}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default MobileTabsMoreOptions;
