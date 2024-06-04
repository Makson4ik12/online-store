import { useState, useEffect } from 'react';

export const screenSizes = { 
    desktop: {width: 1300, name: "DESKTOP"},
    bigTablet: {width: 1000, name: "BIG_TABLET"}, 
    smallTablet: {width: 768, name: "SMALL_TABLET"}, 
    bigMobile: {width: 480, name: "BIG_MOBILE"}, 
    smallMobile: {width: 320, name: "SMALL_MOBILE"} 
};

export default function HandleResponsiveView(): {width: number, name: string} {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth >= screenSizes.desktop.width) {
    return screenSizes.desktop;
  } else if ((windowWidth < screenSizes.desktop.width) && (windowWidth >= screenSizes.bigTablet.width)) {
    return screenSizes.bigTablet;
  } else if ((windowWidth < screenSizes.bigTablet.width) && (windowWidth >= screenSizes.smallTablet.width)) {
    return screenSizes.smallTablet;
  } else if ((windowWidth < screenSizes.smallTablet.width) && (windowWidth >= screenSizes.bigMobile.width)) {
    return screenSizes.bigMobile;
  } else {
    return screenSizes.smallMobile;
  }
}