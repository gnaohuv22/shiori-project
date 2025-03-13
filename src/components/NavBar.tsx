"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookmarkCloverImage from './BookmarkCloverImage';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <BookmarkCloverImage className="text-primary" size={28} animate={true} />
          <span className="font-bold text-xl">Shiori 祉栞</span>
        </motion.div>
        
        <nav>
          <ul className="flex gap-6">
            {['Trang chủ', 'Chuyên mục', 'Về tớ'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={`#${item === 'Trang chủ' ? 'hero' : item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
