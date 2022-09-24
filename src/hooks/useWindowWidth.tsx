import { useEffect, useState } from 'preact/hooks';

export const useWindowWidth = () => {
  const initialWindowWidth =
    typeof window !== 'undefined' ? window.innerWidth : undefined;
  const [width, setWidth]: any = useState(initialWindowWidth);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  return {
    smDown: width < 640,
    mdDown: width < 768,
    lgDown: width < 1024,
    xlDown: width < 1280,
    twoXlDown: width < 1536,
    smUp: width >= 640,
    mdUp: width >= 768,
    lgUp: width >= 1024,
    xlUp: width >= 1280,
    twoXlUp: width >= 1530,
  };
};
