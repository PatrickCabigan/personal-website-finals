import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFriends } from '../../hooks/useFriends';
import FriendDialog from './FriendDialog';
import VisionBadge from '../ui/VisionBadge';
import KatheryneDialog from '../ui/KatheryneDialog';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

const FriendsList: React.FC = () => {
  const navigate = useNavigate();
  const { friends, loading, search, setSearch, createFriend, updateFriend, deleteFriend } = useFriends();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFriend, setEditingFriend] = useState<any>(null);
  const [deletingFriend, setDeletingFriend] = useState<any>(null);

  const handleEdit = (friend: any) => {
    setEditingFriend(friend);
    setIsDialogOpen(true);
  };

  const handleDelete = async () => {
    if (deletingFriend) {
      await deleteFriend(deletingFriend.id);
      setDeletingFriend(null);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingFriend(null);
  };

  const handleDialogSubmit = async (data: any) => {
    if (editingFriend) {
      await updateFriend(editingFriend.id, data);
    } else {
      await createFriend(data);
    }
    handleDialogClose();
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <img 
          src="https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/INAZUMA.gif" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-genshin-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-genshin-gold font-bold tracking-wider">TEYVAT COMPANIONS</h1>
            <button
              onClick={() => navigate('/profile')}
              className="text-genshin-gold hover:text-genshin-accent transition"
            >
              ← BACK
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Search and Add Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-genshin-accent" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search companions..."
                className="input-field pl-10"
              />
            </div>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="btn-primary flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              ADD
            </button>
          </div>
        </div>

        {/* Friends Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-genshin-accent"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {friends.map((friend) => (
              <div key={friend.id} className="card hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <img
                    src={friend.avatar_url || 'https://via.placeholder.com/60'}
                    alt={friend.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-genshin-accent"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-genshin-gold">{friend.name}</h3>
                        {friend.vision && <VisionBadge vision={friend.vision} />}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(friend)}
                          className="text-genshin-gold hover:text-genshin-accent transition text-sm"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => setDeletingFriend(friend)}
                          className="text-red-400 hover:text-red-500 transition text-sm"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                    {friend.status && (
                      <p className="text-white/70 text-sm mt-2 italic">"{friend.status}"</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Friend Dialog (Add/Edit) */}
      <FriendDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleDialogSubmit}
        initialData={editingFriend}
      />

      {/* Delete Confirmation Dialog */}
      <KatheryneDialog
        isOpen={!!deletingFriend}
        onClose={() => setDeletingFriend(null)}
        message={`Are you sure you want to banish ${deletingFriend?.name || ''}?`}
        onConfirm={handleDelete}
        confirmText="BANISH"
      />
    </div>
  );
};

export default FriendsList;