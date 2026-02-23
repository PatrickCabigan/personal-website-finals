import React, { useState, useEffect, useRef } from 'react';

interface CombatTalentsProps {
  images: string[];
}

const CombatTalents: React.FC<CombatTalentsProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length]);

  return (
    <div className="card">
      <div className="relative h-48 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Talent ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-genshin-accent'
                : 'bg-genshin-gold/30 hover:bg-genshin-gold/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CombatTalents;