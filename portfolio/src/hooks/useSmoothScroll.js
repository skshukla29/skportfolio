import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target || isScrolling) return;

      e.preventDefault();
      const href = target.getAttribute('href');
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        isScrolling = true;
        
        // Use a more performant scroll with requestAnimationFrame
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop - 80;
        const distance = targetPosition - startPosition;
        const duration = 800; // Faster scroll
        let start = null;

        const animation = (currentTime) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            isScrolling = false;
          }
        };

        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: true });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};

export default useSmoothScroll;