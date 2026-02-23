import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-genshin-accent/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-genshin-gold/60">
            © 2026 • John Patrick Cabigan • All Rights Reserved
          </div>

          {/* Center - Vision elements */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-vision-anemo animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-vision-geo animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-vision-electro animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="w-2 h-2 rounded-full bg-vision-dendro animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="w-2 h-2 rounded-full bg-vision-hydro animate-pulse" style={{ animationDelay: '0.8s' }} />
            <div className="w-2 h-2 rounded-full bg-vision-pyro animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="w-2 h-2 rounded-full bg-vision-cryo animate-pulse" style={{ animationDelay: '1.2s' }} />
          </div>

          {/* Right side - Quote */}
          <div className="text-sm text-genshin-gold/60 italic">
            "Ad astra abyssosque, traveler."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;