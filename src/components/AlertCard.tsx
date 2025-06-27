import React from 'react';
import { BsInfoCircle, BsX } from 'react-icons/bs';

type AlertCardProps = {
  onClose(): void;
};

const AlertCard: React.FC<AlertCardProps> = ({ onClose }) => {
  return (
    <div className="mb-6 rounded-md bg-yellow-100 border-l-4 border-yellow-500 p-4 shadow flex flex-col gap-1 relative">
      <button
        className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
        onClick={onClose}
        aria-label="Close alert"
      >
        <BsX size={22} />
      </button>
      <div className="flex items-center gap-2 mb-1">
        <BsInfoCircle className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-semibold text-yellow-800">Project Showcase</h2>
      </div>
      <p className="text-base text-yellow-900">
        Explore a diverse portfolio of projects I’ve crafted—ranging from robust web applications
        and intuitive mobile solutions to scalable e-commerce platforms and custom design systems.
        Each project demonstrates my commitment to clean code, modern technologies, and delivering
        real-world impact. Dive in to see how I approach challenges, solve problems creatively, and
        bring ideas to life through technology.
      </p>
    </div>
  );
};

export default AlertCard;
