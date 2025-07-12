'use client';

import AlertCard from "@/components/AlertCard";
import Footer from "@/components/project/Footer";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  return (
    <>
      {showAlert && (
        <div className="p-2">
          <AlertCard onClose={() => setShowAlert(false)}>
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
        </div>
      )}
      <div className="max-w-7xl mx-auto p-8">
        {children}
      </div>
      <Footer />
    </>
  );
}