"use client";

import React, { useEffect, useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function throttle<T extends (e: MouseEvent) => void>(func: T, limit: number): (e: MouseEvent) => void {
  let inThrottle: boolean;
  return function(this: unknown, e: MouseEvent) {
    if (!inThrottle) {
      func.apply(this, [e]);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Check if cursor is over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.hasAttribute('role') ||
        target.getAttribute('tabindex') === '0' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.tagName.toLowerCase() === 'select';
      
      setIsPointer(isClickable);
    });
  }, [isVisible]);

  useEffect(() => {
    const throttledMouseMove = throttle(handleMouseMove, 1);
    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      window.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [handleMouseMove]);
  
  // Don't render custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed w-5 h-5 rounded-full bg-primary/40 backdrop-blur-sm z-[9999] pointer-events-none mix-blend-difference will-change-transform"
          initial={{ opacity: 0.5, scale: 1.5 }}
          animate={{ 
            opacity: isPointer ? 0.7 : 0.5,
            scale: isPointer ? 1.6 : 1.2,
            x: position.x - 10,
            y: position.y - 10
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            type: "tween",
            duration: 0.015,
            ease: "linear",
            opacity: { duration: 0.1 }
          }}
        />
      )}
    </AnimatePresence>
  );
}

export default memo(CustomCursor);
