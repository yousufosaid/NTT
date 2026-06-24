import React, { useState } from "react";

const SafeImage = ({ src, alt, className, seed, loading = "lazy" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (!failed && seed) {
      setFailed(true);
      setImgSrc(`https://picsum.photos/seed/${seed}/800/600`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
};

export default SafeImage;
