import { useState, useEffect, useCallback } from 'react';
import { friendsApi } from '../services/api';
import { Friend, CreateFriendDto } from '../types';
import toast from 'react-hot-toast';

export const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchFriends = useCallback(async () => {
    try {
      setLoading(true);
      const data = await friendsApi.getAll(search);
      setFriends(data);
    } catch (error) {
      toast.error('Failed to fetch friends');
    } finally {
      setLoading(false);
    }
  }, [search]);

  const createFriend = useCallback(async (data: CreateFriendDto) => {
    try {
      const newFriend = await friendsApi.create(data);
      setFriends(prev => [...prev, newFriend]);
      toast.success('Friend added! 🎉');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Failed to add friend');
      return false;
    }
  }, []);

  const updateFriend = useCallback(async (id: string, data: Partial<CreateFriendDto>) => {
    try {
      const updated = await friendsApi.update(id, data);
      setFriends(prev => prev.map(f => f.id === id ? updated : f));
      toast.success('Friend updated! ✨');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Failed to update friend');
      return false;
    }
  }, []);

  const deleteFriend = useCallback(async (id: string) => {
    try {
      await friendsApi.delete(id);
      setFriends(prev => prev.filter(f => f.id !== id));
      toast.success('Friend removed');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Failed to remove friend');
      return false;
    }
  }, []);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  return {
    friends,
    loading,
    search,
    setSearch,
    createFriend,
    updateFriend,
    deleteFriend,
    refresh: fetchFriends,
  };
};