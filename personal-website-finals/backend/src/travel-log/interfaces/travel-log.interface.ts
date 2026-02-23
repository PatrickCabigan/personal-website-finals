export interface TravelLog {
  id: string;
  traveler_name: string;
  message: string;
  region?: string;
  likes: number;
  created_at: Date;
  updated_at: Date;
}