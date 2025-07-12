import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FaLaptop } from 'react-icons/fa';

import { Project } from '@/types';
import { getRandomColor } from '@/utils/StringUtils';
import Link from 'next/link';

type ProjectCardProps = {
  data: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { image, name, description, source_code_link, live_url, category, tags, id } = data;
  const externalLinks = source_code_link || live_url;
  return (
    <div className="bg-primary-blue/95 p-5 rounded-2xl sm:w-[360px] w-full min-h-[450px] flex flex-col gap-2 relative">
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-fill rounded-md"
          sizes="(max-width: 1024px) 100vw, 320px"
        />
      </div>

      {externalLinks && (
        <div className="absolute inset-0 flex justify-end m-3 gap-2">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="bg-slate-300 w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <BsGithub size={30} className="text-white" />
            </div>
          )}
          {live_url && (
            <div
              onClick={() => window.open(live_url, '_blank')}
              className="bg-slate-300 w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <FaLaptop size={30} className="text-white" />
            </div>
          )}
        </div>
      )}

      <div className="mt-2">
        <h3 className="text-white font-bold text-2xl line-clamp-1 capitalize">{name}</h3>
        <p className="mt-2 text-stone-100 text-sm line-clamp-2">{description}</p>
      </div>

      <div className={'flex flex-wrap gap-2'}>
        {category.map(cat => (
          <span
            key={cat}
            className="rounded-[10px] px-[5px] py-[2px] text-white"
            style={{ backgroundColor: getRandomColor(cat, 'bg') }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <p key={tag} className='text-sm'
            style={{ color: getRandomColor(tag, 'text') }}
          >
            #{tag}
          </p>
        ))}
      </div>
      <Link href={`/projects/${id}`} target='_blank' className="text-blue-600 hover:text-blue-400 text-sm font-medium absolute bottom-3 right-4">
        See More →
      </Link>
    </div>
  );
};

export default ProjectCard;
