export interface TravelLog {
  id: string;
  traveler_name: string;
  message: string;
  region?: string;
  likes: number;
  created_at: string;
  updated_at: string;
}

export interface CreateLogDto {
  traveler_name: string;
  message: string;
  region?: string;
}

export interface Friend {
  id: string;
  name: string;
  vision?: string;
  avatar_url?: string;
  status?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateFriendDto {
  name: string;
  vision?: string;
  avatar_url?: string;
  status?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const VISION_COLORS = {
  Anemo: '#72E2C2',
  Geo: '#F8BA4E',
  Electro: '#D3AAFF',
  Dendro: '#A5C83B',
  Hydro: '#00BFFF',
  Pyro: '#EF7A35',
  Cryo: '#99DFFF',
} as const;

export const AVATARS = [
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/a01c4f40800182a87db950da9a0eb10f.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/26258358a52ee8eb4123c290c7c19dd2.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/6dd9ed67f10535379dcd359fd1d2da03.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/6ebb7d1586dbbea337d3089035bfb7e2.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/8e1e4dd5c2cebee7aa9831c2930e1296.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/df.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/dfgg.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/eula-genshin-impact.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/mihoyo-genshin-impact-genshinimpact-arataki-itto.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/mihoyo-genshin.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/moj1kp65bc0g1.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/nahida.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/shenhe-genshin-impact.gif',
  'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/yelan-genshin.gif',
];