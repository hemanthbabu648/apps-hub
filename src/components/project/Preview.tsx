import clsx from 'clsx'
import React from 'react'

type PreviewProps = {
  url?: string
  videoUrl?: string;
  iframeClassName?: string;
  vidoeClassName?: string;
}

const Preview: React.FC<PreviewProps> = ({
  url,
  videoUrl,
  iframeClassName,
  vidoeClassName
}) => {
  return (
    <div className="my-4">
      {url && (<>
        <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">
          Live Preview
        </h2>
        <div className="border-2 border-primary-blue-200 rounded-xl overflow-hidden shadow-lg bg-light-100">
          <iframe
            src={url}
            title="Live Demo Preview"
            className={clsx("w-full h-[500px] bg-light-200", iframeClassName)}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </>
      )}
      {videoUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue-300">
            Video Demo
          </h2>
          <div className="border-2 border-primary-blue-200 rounded-xl overflow-hidden shadow-lg bg-light-100">
            {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
              <iframe
                src={
                  videoUrl.includes('youtube.com')
                    ? videoUrl.replace('watch?v=', 'embed/')
                    : videoUrl.includes('youtu.be')
                      ? `https://www.youtube.com/embed/${videoUrl.split('/').pop()}`
                      : videoUrl
                }
                title="YouTube Video Preview"
                className={clsx("w-full h-[500px] bg-light-200", vidoeClassName)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                className={clsx("w-full h-[500px] bg-light-200", vidoeClassName)}
                title="Video Preview"
              />
            )}
          </div>
        </div>
      )}
    </div>


  )
}

export default Preview