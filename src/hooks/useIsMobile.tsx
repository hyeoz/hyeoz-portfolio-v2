import { useState, useLayoutEffect } from 'react';

const useIsMobile = () => {
  const [deviceType, setDeviceType] = useState(false);
  let screenWidth = window.innerWidth;
  const updateDeviceType = () => {
    screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      setDeviceType(true);
    } else {
      setDeviceType(false);
    }
  };
  useLayoutEffect(() => {
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, [deviceType]);

  return deviceType;
};

export default useIsMobile;
