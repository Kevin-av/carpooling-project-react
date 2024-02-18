import React from 'react';

const ImgComponent: React.FC<{ src: string; alt: string; description: string }> = ({ src, alt, description }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default ImgComponent;