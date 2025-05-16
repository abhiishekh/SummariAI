// components/VideoComponent.tsx
import React from 'react';

type VideoComponentProps = {
  video: string; // e.g., "/videos/demo.mp4" or external link
};

const VideoComponent: React.FC<VideoComponentProps> = ({ video }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
