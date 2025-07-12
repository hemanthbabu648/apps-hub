import { CATEGORYENUM, Project } from '@/types'
import Image from 'next/image'
import React from 'react'

type HeaderCardProps = {
  projectName: string;
  description: string;
  projectImage: string;
  cateogory: CATEGORYENUM[]
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  projectImage,
  projectName,
  description,
  cateogory

}) => {
  return (
    <header className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-gradient-to-br from-primary-light-blue via-light-100 to-primary-blue-200 rounded-2xl shadow-xl border border-primary-blue-200 p-2">
      <div className="relative w-24 h-24 md:w-36 md:h-36">
        <Image src={projectImage} alt={projectName} fill className="rounded-2xl shadow-lg object-cover border-4 border-primary-blue-200" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-2 tracking-tight">{projectName}</h1>
        <div className="flex flex-wrap gap-2 mb-2">
          {cateogory?.map((cat: string) => (
            <span key={cat} className="inline-block bg-primary-light-blue-200 text-primary-blue-500 text-xs px-3 py-1 rounded-full font-medium shadow">
              {cat}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-2">{description}</p>
      </div>
    </header>
  )
}

export default HeaderCard