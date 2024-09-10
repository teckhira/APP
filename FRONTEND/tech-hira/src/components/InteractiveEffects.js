// src/components/InteractiveEffects.js
import { useEffect } from 'react';
import './style/InteractiveEffects.css';

const InteractiveEffects = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const sections = document.querySelectorAll('.stat-item');

      sections.forEach(section => {
        const { left, top, width, height } = section.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        
        if (section.matches(':hover')) {
          const rotateX = ((deltaY / height) * 10).toFixed(2);
          const rotateY = ((-deltaX / width) * 10).toFixed(2);
          section.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          section.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default InteractiveEffects;
