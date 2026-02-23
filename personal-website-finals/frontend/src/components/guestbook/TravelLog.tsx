import React, { useState } from 'react';
import { useTravelLog } from '../../hooks/useTravelLog';
import LogEntry from './LogEntry';
import LogForm from './LogForm';
import { useNavigate } from 'react-router-dom';

const TravelLog: React.FC = () => {
  const navigate = useNavigate();
  const { logs, loading, hasMore, createLog, likeLog, loadMore } = useTravelLog();

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <img 
          src="https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/220976.gif" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-genshin-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-genshin-gold font-bold tracking-wider">TRAVEL LOG</h1>
            <button
              onClick={() => navigate('/profile')}
              className="text-genshin-gold hover:text-genshin-accent transition"
            >
              ← BACK
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Form Section */}
          <div className="card mb-8">
            <h2 className="text-xl text-genshin-accent font-bold mb-4">LEAVE A TRAVEL LOG</h2>
            <LogForm onSubmit={createLog} />
          </div>

          {/* Logs Section */}
          <div className="space-y-4">
            <h2 className="text-xl text-genshin-accent font-bold mb-4">ADVENTURER LOGS</h2>
            
            {loading && logs.length === 0 ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-genshin-accent"></div>
              </div>
            ) : (
              <>
                {logs.map((log) => (
                  <LogEntry key={log.id} log={log} onLike={likeLog} />
                ))}
                
                {hasMore && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={loadMore}
                      className="btn-outline"
                    >
                      LOAD MORE
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelLog;