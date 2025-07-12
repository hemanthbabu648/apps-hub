'use client';

import React, { useState } from 'react';

import AlertCard from '@/components/AlertCard';
import MobileTabs from '@/components/MobileTabs';
import Projects from '@/components/Projects';
import Sidebar from '@/components/Sidebar';
import { CATEGORYENUM } from '@/types';
import { Button } from '@mantine/core';
import Link from 'next/link';

function Home() {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORYENUM>(CATEGORYENUM.WED_DEVELOPMENT);

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <aside className="hidden md:block w-64">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </aside>
      <nav className="fixed bottom-0 left-0 right-0 bg-primary-dark text-white md:hidden h-20 flex z-40">
        <MobileTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </nav>

      <main className="flex-grow bg-slate-200 text-primary-blue overflow-y-scroll p-2 h-screen mb-20 sm:mb-0">
        {showAlert && <AlertCard onClose={() => setShowAlert(false)} >
          <>
            <p className="text-base text-yellow-900">
              Explore a diverse portfolio of projects I&apos;ve crafted—ranging from robust web applications
              and intuitive mobile solutions to scalable e-commerce platforms and custom design systems.
              Each project demonstrates my commitment to clean code, modern technologies, and delivering
              real-world impact. Dive in to see how I approach challenges, solve problems creatively, and
              bring ideas to life through technology.
            </p>
          </>
          <div className='mt-4 flex justify-center gap-4 items-center'>
            <Button>
              <Link href="https://hemanthbabu648.com" target="_blank" rel="noopener noreferrer">
                Visit My Work
              </Link>
            </Button>
            <Button>
              <Link href="https://blogs.hemanthbabu648.com" target="_blank" rel="noopener noreferrer">
                Explore Blogs
              </Link>
            </Button>
          </div>
        </AlertCard>
        }
        {/* Showing All Projects by Selected Category */}
        <Projects selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}

export default Home;
