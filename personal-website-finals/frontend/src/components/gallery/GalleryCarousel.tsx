import React, { useState, useEffect, useRef } from 'react';

interface GalleryCarouselProps {
  title: string;
  images: string[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length]);

  return (
    <div>
      <h2 className="text-2xl text-genshin-accent font-bold text-center mb-6">{title}</h2>
      
      <div className="relative h-96 max-w-4xl mx-auto">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          
          return (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-transparent hover:border-genshin-accent transition-all">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-genshin-accent'
                : 'w-2 bg-genshin-gold/30 hover:bg-genshin-gold/50'
            }`}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;