import React from 'react';

interface CloverIconProps {
  className?: string;
  size?: number;
}

export default function CloverIcon({ className = "", size = 24 }: CloverIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
    >
      <path d="M12,2C9.24,2 7,4.24 7,7C7,8.86 8.11,10.43 9.71,11.21C8.5,12.18 7,12.83 5.33,12.83C4.66,12.83 4,12.72 3.38,12.5C3.38,15.35 5.5,17.66 8.24,17.66C9.89,17.66 11.39,16.86 12.31,15.62C13.33,17.12 15,18 17,18C19.76,18 22,15.76 22,13C22,11.14 20.89,9.57 19.29,8.79C20.5,7.82 22,7.17 23.67,7.17C24.34,7.17 25,7.28 25.62,7.5C25.62,4.65 23.5,2.34 20.76,2.34C19.11,2.34 17.61,3.14 16.69,4.38C15.67,2.88 14,2 12,2Z" />
    </svg>
  );
}
