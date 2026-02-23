import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import KatheryneDialog from '../ui/KatheryneDialog';
import { WELCOME_GIF } from '../../constants/images';

const WelcomeScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const { name } = location.state || { name: 'Traveler' };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={WELCOME_GIF} alt="Welcome" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-genshin-gold/80 text-xl tracking-widest mb-2">
            AD ASTRA ABYSSOSQUE,
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-genshin-gold mb-12">
            TRAVELLER {name}
          </h1>
          
          <button
            onClick={() => setShowDialog(true)}
            className="btn-outline text-lg px-12 py-4"
          >
            ENTER TEYVAT
          </button>
        </div>
      </div>

      {/* Katheryne Dialog */}
      <KatheryneDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        message={`Ad astra abyssosque! Welcome to the guild, Traveller ${name}. Your adventure starts now!`}
        onConfirm={() => navigate('/profile', { state: location.state })}
        confirmText="ENTER TEYVAT"
      />
    </div>
  );
};

export default WelcomeScreen;