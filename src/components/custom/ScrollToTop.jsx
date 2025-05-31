import React, { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    const ScrollToTop = () => {
      const { pathname } = useLocation();

      useEffect(() => {
        // Scroll to top, or to hash if present
        if (window.location.hash) {
          const element = document.getElementById(window.location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, [pathname]);

      return null;
    };

    export default ScrollToTop;