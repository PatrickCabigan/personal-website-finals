import { useState, useEffect, useCallback } from 'react';
import { travelLogApi } from '../services/api';
import { TravelLog, CreateLogDto } from '../types';
import toast from 'react-hot-toast';

export const useTravelLog = () => {
  const [logs, setLogs] = useState<TravelLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchLogs = useCallback(async (pageNum = page) => {
    try {
      const response = await travelLogApi.getAll(pageNum, 10);
      if (pageNum === 1) {
        setLogs(response.data);
      } else {
        setLogs(prev => [...prev, ...response.data]);
      }
      setHasMore(response.data.length === 10);
    } catch (error) {
      toast.error('Failed to fetch travel logs');
    }
  }, [page]);

  const createLog = useCallback(async (data: CreateLogDto) => {
    try {
      const response = await travelLogApi.create(data);
      setLogs(prev => [response.data, ...prev]);
      toast.success('Travel log recorded! ✨');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Failed to create log');
      return false;
    }
  }, []);

  const likeLog = useCallback(async (id: string) => {
    try {
      const response = await travelLogApi.like(id);
      setLogs(prev =>
        prev.map(log =>
          log.id === id ? { ...log, likes: response.data.likes } : log
        )
      );
      toast.success('Thanks for the like! ❤️');
    } catch (error) {
      toast.error('Failed to like log');
    }
  }, []);

  const loadMore = useCallback(() => {
    if (hasMore) {
      setPage(prev => prev + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    fetchLogs(1);
  }, [fetchLogs]);

  useEffect(() => {
    if (page > 1) {
      fetchLogs(page);
    }
  }, [page, fetchLogs]);

  return {
    logs,
    loading,
    hasMore,
    createLog,
    likeLog,
    loadMore,
  };
};