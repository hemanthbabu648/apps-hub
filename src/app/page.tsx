'use client';

import React, { useState } from 'react';

import AlertCard from '@/components/AlertCard';
import MobileTabs from '@/components/MobileTabs';
import Projects from '@/components/Projects';
import Sidebar from '@/components/Sidebar';
import { CATEGORYENUM } from '@/types';

function Home() {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORYENUM>(CATEGORYENUM.PORTFOLIO);

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <aside className="hidden md:block w-64">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </aside>
      <nav className="fixed bottom-0 left-0 right-0 bg-primary-dark text-white md:hidden h-20 flex z-40">
        <MobileTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </nav>

      <main className="flex-grow bg-slate-200 text-primary-blue overflow-y-scroll p-2 h-screen mb-20 sm:mb-0">
        {showAlert && <AlertCard onClose={() => setShowAlert(false)} />}
        {/* Showing All Projects by Selected Category */}
        <Projects selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}

export default Home;
