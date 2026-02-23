import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeartIcon, UserGroupIcon, BookOpenIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  title?: string;
  showBack?: boolean;
  showNav?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  title = "ADVENTURER HANDBOOK", 
  showBack = false,
  showNav = true 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/profile', icon: HeartIcon, label: 'Profile' },
    { path: '/gallery', icon: BookOpenIcon, label: 'Gallery' },
    { path: '/friends', icon: UserGroupIcon, label: 'Friends' },
  ];

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-genshin-accent/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Back button or Title */}
          <div className="flex items-center gap-4">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="text-genshin-gold hover:text-genshin-accent transition p-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-genshin-gold font-bold tracking-wider text-lg">
              {title}
            </h1>
          </div>

          {/* Right section - Navigation */}
          {showNav && (
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`p-2 transition relative group ${
                      isActive 
                        ? 'text-genshin-accent' 
                        : 'text-genshin-gold hover:text-genshin-accent'
                    }`}
                    title={item.label}
                  >
                    <Icon className="w-5 h-5" />
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-genshin-accent rounded-full" />
                    )}
                    
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-genshin-panel px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap border border-genshin-accent/30">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;