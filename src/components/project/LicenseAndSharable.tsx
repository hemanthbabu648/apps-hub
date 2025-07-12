import React from 'react'
import { IoShareSocialOutline } from 'react-icons/io5';

type LicenseAndSharableProps = {
  projectSourceCode: string | undefined;
  projectURL: string | undefined;
  projectName: string;
}

const LicenseAndSharable: React.FC<LicenseAndSharableProps> = ({
  projectSourceCode,
  projectURL,
  projectName
}) => {
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-primary-blue-500">License</h2>
        <span className="inline-block bg-primary-light-blue-200 text-primary-blue-500 px-3 py-1 rounded-full font-medium shadow">MIT</span>
      </section>

      <div className="flex gap-4 mt-8 mb-8">
        {projectSourceCode && (
          <a
            href={projectSourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-blue-500 hover:bg-primary-blue-400 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
          >
            Source Code
          </a>
        )}
        {projectURL && (
          <a
            href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-light-blue hover:bg-primary-light-blue-200 text-primary-blue-500 px-5 py-2 rounded-lg font-semibold shadow transition"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Share Button */}
      <div className="flex justify-end">
        <button
          className="bg-primary-dark hover:bg-primary-blue-500 text-white px-5 py-2 rounded-lg font-semibold shadow transition flex items-center gap-2"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: projectName,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }
          }}
        >
          <IoShareSocialOutline />
          Share
        </button>
      </div>
    </div>
  )
}

export default LicenseAndSharable