import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { AVATARS, VISION_COLORS } from '../../types';

interface FriendDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

const FriendDialog: React.FC<FriendDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    vision: 'Anemo',
    avatar_url: AVATARS[0],
    status: '',
  });
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        vision: initialData.vision || 'Anemo',
        avatar_url: initialData.avatar_url || AVATARS[0],
        status: initialData.status || '',
      });
    } else {
      setFormData({
        name: '',
        vision: 'Anemo',
        avatar_url: AVATARS[0],
        status: '',
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-genshin-panel border-2 border-genshin-accent rounded-xl p-6">
          <Dialog.Title className="text-xl font-bold text-genshin-accent mb-4">
            {initialData ? 'EDIT COMPANION' : 'ADD COMPANION'}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Avatar Selection */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-genshin-accent overflow-hidden mb-2 cursor-pointer"
                   onClick={() => setShowAvatarPicker(true)}>
                <img src={formData.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <button
                type="button"
                onClick={() => setShowAvatarPicker(true)}
                className="text-genshin-accent underline text-sm"
              >
                CHOOSE AVATAR
              </button>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                required
              />
            </div>

            {/* Vision Field */}
            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Vision</label>
              <select
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="input-field"
                style={{ color: VISION_COLORS[formData.vision as keyof typeof VISION_COLORS] }}
              >
                {Object.keys(VISION_COLORS).map((vision) => (
                  <option key={vision} value={vision}>
                    {vision}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Field */}
            <div>
              <label className="block text-genshin-accent mb-1 text-sm">Status</label>
              <input
                type="text"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="input-field"
                placeholder="e.g., Exploring Liyue"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn-outline"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                SAVE
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90">
          <div className="bg-genshin-panel rounded-xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-genshin-accent mb-4">Choose Avatar</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {AVATARS.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFormData({ ...formData, avatar_url: avatar });
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
    </Dialog>
  );
};

export default FriendDialog;