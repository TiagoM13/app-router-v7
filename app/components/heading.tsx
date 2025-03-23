import React from 'react';

export const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="text-2xl font-semibold mb-4 text-black/80">{children}</h1>;
}
