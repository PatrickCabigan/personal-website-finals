import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATARS, VISION_COLORS } from '../../types';
import KatheryneDialog from '../ui/KatheryneDialog';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'John Patrick Cabigan',
    email: 'jpcabigan@adventurer.com',
    section: 'Section IT242 • Traveler',
    bio: "5'10 ft tall manga collector and airplane enthusiast.",
    vision: 'Anemo',
    avatar: AVATARS[0],
  });
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/welcome', { state: formData });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://i02.appmifile.com/798_bbs_en/20/03/2022/d6c6303787.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg bg-black/90 border-2 border-genshin-accent p-8">
          <h1 className="text-2xl text-center tracking-widest font-bold mb-8 text-genshin-gold">
            CHARACTER SELECTION
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Selection */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-genshin-accent overflow-hidden mb-2">
                <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <button
                type="button"
                onClick={() => setShowAvatarPicker(true)}
                className="text-genshin-accent underline text-sm"
              >
                SWITCH AVATAR
              </button>
            </div>

            {/* Form Fields */}
            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Contact Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Rank / Section</label>
              <input
                type="text"
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Biography</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="input-field"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Vision</label>
              <select
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="input-field"
                style={{ color: VISION_COLORS[formData.vision as keyof typeof VISION_COLORS] }}
              >
                {Object.keys(VISION_COLORS).map((vision) => (
                  <option key={vision} value={vision} style={{ color: VISION_COLORS[vision as keyof typeof VISION_COLORS] }}>
                    {vision}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary w-full mt-8">
              BEGIN ADVENTURE
            </button>
          </form>
        </div>
      </div>

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-genshin-panel rounded-xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-genshin-accent mb-4">Choose Your Avatar</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {AVATARS.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFormData({ ...formData, avatar });
                    setShowAvatarPicker(false);
                  }}
                  className="aspect-square rounded-full overflow-hidden border-2 border-transparent hover:border-genshin-accent transition"
                >
                  <img src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAvatarPicker(false)}
              className="mt-4 px-4 py-2 bg-genshin-accent text-black rounded hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;