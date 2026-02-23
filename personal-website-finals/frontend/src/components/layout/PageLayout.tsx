import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  showNav?: boolean;
  backgroundImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  showBack = false,
  showNav = true,
  backgroundImage = 'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/INAZUMA.gif',
}) => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar title={title} showBack={showBack} showNav={showNav} />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;