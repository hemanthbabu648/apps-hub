import clsx from 'clsx'
import React from 'react'

type PreviewProps = {
  url: string
  className?: string
}

const Preview: React.FC<PreviewProps> = ({
  url,
  className
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-primary-blue-500">Live Preview</h2>
      <div className="border-2 border-primary-blue-200 rounded-xl overflow-hidden shadow-lg bg-light-100">
        <iframe
          src={url}
          title="Live Demo Preview"
          className={clsx("w-full h-[500px] bg-light-200", className)}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  )
}

export default Preview