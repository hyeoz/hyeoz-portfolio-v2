import { useEffect, useState } from 'react';

const useIsResized = () => {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setIsResized(true));

    return () => window.removeEventListener('resize', () => setIsResized(true));
  }, []);

  return isResized;
};

export default useIsResized;
