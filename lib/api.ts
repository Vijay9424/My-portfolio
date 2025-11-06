import axios from 'axios';
import { Project, ContactMessage, ApiResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const projectsAPI = {
  getAll: async (params?: { 
    page?: number; 
    limit?: number; 
    technology?: string;
    search?: string;
  }): Promise<ApiResponse<{ projects: Project[]; total: number }>> => {
    const { data } = await api.get('/projects', { params });
    return data;
  },

  getById: async (id: string): Promise<ApiResponse<Project>> => {
    const { data } = await api.get(`/projects/${id}`);
    return data;
  },

  create: async (project: Partial<Project>): Promise<ApiResponse<Project>> => {
    const { data } = await api.post('/projects', project);
    return data;
  },

  update: async (id: string, project: Partial<Project>): Promise<ApiResponse<Project>> => {
    const { data } = await api.put(`/projects/${id}`, project);
    return data;
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    const { data } = await api.delete(`/projects/${id}`);
    return data;
  },
};

// Contact API
export const contactAPI = {
  send: async (message: ContactMessage): Promise<ApiResponse<ContactMessage>> => {
    const { data } = await api.post('/contact', message);
    return data;
  },
};

export default api;