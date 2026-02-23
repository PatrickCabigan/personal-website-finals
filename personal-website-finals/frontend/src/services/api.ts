import axios from 'axios';
import { TravelLog, CreateLogDto, Friend, CreateFriendDto, ApiResponse } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const travelLogApi = {
  getAll: async (page = 1, limit = 20): Promise<ApiResponse<TravelLog[]>> => {
    const response = await api.get(`/travel-log?page=${page}&limit=${limit}`);
    return response.data;
  },

  create: async (data: CreateLogDto): Promise<ApiResponse<TravelLog>> => {
    const response = await api.post('/travel-log', data);
    return response.data;
  },

  like: async (id: string): Promise<ApiResponse<{ likes: number }>> => {
    const response = await api.post(`/travel-log/${id}/like`);
    return response.data;
  },
};

export const friendsApi = {
  getAll: async (search?: string): Promise<Friend[]> => {
    const response = await api.get('/friends', { params: { search } });
    return response.data;
  },

  create: async (data: CreateFriendDto): Promise<Friend> => {
    const response = await api.post('/friends', data);
    return response.data;
  },

  update: async (id: string, data: Partial<CreateFriendDto>): Promise<Friend> => {
    const response = await api.patch(`/friends/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/friends/${id}`);
  },
};

export default api;