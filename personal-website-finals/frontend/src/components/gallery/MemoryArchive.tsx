import React from 'react';
import GalleryCarousel from './GalleryCarousel';
import {
  GALLERY_BG_GIF,
  GALLERY_FRIENDS,
  GALLERY_GAMES,
  GALLERY_BIRTHDAY,
  GALLERY_TRAVELS,
} from '../../constants/images';

const MemoryArchive: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <img src={GALLERY_BG_GIF} alt="Gallery Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <h1 className="text-3xl text-genshin-accent font-bold text-center mb-12 tracking-wider">
          MEMORY ARCHIVE
        </h1>

        <div className="space-y-16">
          <GalleryCarousel title="FRIENDS" images={GALLERY_FRIENDS} />
          <GalleryCarousel title="GAMES" images={GALLERY_GAMES} />
          <GalleryCarousel title="BIRTHDAY" images={GALLERY_BIRTHDAY} />
          <GalleryCarousel title="TRAVELS" images={GALLERY_TRAVELS} />
        </div>
      </div>
    </div>
  );
};

export default MemoryArchive;  // ← THIS LINE IS CRITICAL!