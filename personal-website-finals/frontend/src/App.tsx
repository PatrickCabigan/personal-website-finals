import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import LoginScreen from './components/auth/LoginScreen';
import WelcomeScreen from './components/auth/WelcomeScreen';
import MainProfile from './components/profile/MainProfile';
import MemoryArchive from './components/gallery/MemoryArchive';
import FriendsList from './components/friends/FriendsList';
import TravelLog from './components/guestbook/TravelLog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/profile" element={<MainProfile />} />
          <Route path="/gallery" element={<MemoryArchive />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/travel-log" element={<TravelLog />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#2A3241',
          color: '#ECE5D8',
          border: '1px solid #DBB165',
        },
      }} />
    </QueryClientProvider>
  );
}

export default App;