import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="h-40 w-44">
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover rounded"
        />
      )}
    </div>
  );
};

export default LazyImage;
