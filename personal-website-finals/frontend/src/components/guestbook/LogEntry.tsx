import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { HeartIcon } from '@heroicons/react/24/outline';
import { TravelLog } from '../../types';

interface LogEntryProps {
  log: TravelLog;
  onLike: (id: string) => void;
}

const LogEntry: React.FC<LogEntryProps> = ({ log, onLike }) => {
  return (
    <div className="card hover:border-genshin-accent transition-all">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-genshin-gold">{log.traveler_name}</h3>
          <p className="text-xs text-white/50">
            {formatDistanceToNow(new Date(log.created_at), { addSuffix: true })}
          </p>
        </div>
        {log.region && (
          <span className="text-xs px-2 py-1 rounded-full bg-genshin-accent/20 text-genshin-accent">
            {log.region}
          </span>
        )}
      </div>
      
      <p className="text-white/80 mb-3">{log.message}</p>
      
      <button
        onClick={() => onLike(log.id)}
        className="flex items-center gap-1 text-white/50 hover:text-genshin-accent transition"
      >
        <HeartIcon className="w-4 h-4" />
        <span className="text-sm">{log.likes} likes</span>
      </button>
    </div>
  );
};

export default LogEntry;