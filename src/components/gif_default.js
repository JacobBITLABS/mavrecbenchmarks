import React, { useState } from 'react';
import placeholderImage from '../ressources/images/gif_placeholder.jpg';
import actualImage from '../ressources/images/dvd_dataset_lite.gif';


import './gif_default.css'

const ImageComponent = () => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      className="home-video"
      src={loaded ? actualImage : placeholderImage}
      onLoad={handleImageLoad}
      alt="gif"
    />
  );
};

// "homepage": "https://jacobbitlabs.github.io/dvddataset/",

export default ImageComponent;
