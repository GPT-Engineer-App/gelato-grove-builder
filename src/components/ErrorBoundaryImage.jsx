import React, { useState } from 'react';

const ErrorBoundaryImage = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="bg-green-200 text-green-800 p-4 rounded-lg">Image not found</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default ErrorBoundaryImage;
