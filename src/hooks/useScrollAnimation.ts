import { useEffect } from 'react';

function throttle<T extends () => void>(func: T, limit: number): () => void {
  let inThrottle: boolean;
  return function(this: unknown) {
    if (!inThrottle) {
      func.apply(this);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export function useScrollAnimation() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fadeIn');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
          element.classList.add('visible');
        }
      });
    };
    
    const throttledScrollHandler = throttle(handleScrollAnimation, 100);
    
    window.addEventListener('scroll', throttledScrollHandler);
    // Initial check for elements in viewport on load
    handleScrollAnimation();
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);
}

export default useScrollAnimation;
