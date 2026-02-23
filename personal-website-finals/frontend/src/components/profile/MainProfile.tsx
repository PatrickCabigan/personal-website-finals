import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Container from '../layout/Container';
import Section from '../layout/Section';
import VisionBadge from '../ui/VisionBadge';
import CombatTalents from './CombatTalents';
import HobbiesSection from './HobbiesSection';
import KatheryneDialog from '../ui/KatheryneDialog';
import PaimonDialog from '../ui/PaimonDialog';
import { MAIN_BG_URL } from '../../constants/images';
import { COMBAT_IMAGES } from '../../constants/images';

const MainProfile: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showGalleryDialog, setShowGalleryDialog] = useState(false);
  
  const profile = location.state || {
    name: 'John Patrick Cabigan',
    email: 'jpcabigan@adventurer.com',
    section: 'Section IT242 • Traveler',
    bio: "5'10 ft tall manga collector and airplane enthusiast.",
    vision: 'Anemo',
    avatar: 'https://raw.githubusercontent.com/PatrickCabigan/MOBPROG-FINALS/refs/heads/main/a01c4f40800182a87db950da9a0eb10f.gif'
  };

  const academicData = [
    { name: 'FTJCA', desc: 'Elementary Graduate', logo: 'https://raw.githubusercontent.com/PatrickCabigan/WEBPROG-IT242-HTML-LESSONS/feature/2_JPC_customize_my_website/ftjca-removebg-preview.png' },
    { name: 'SVNHS', desc: 'Secondary Graduate', logo: 'https://raw.githubusercontent.com/PatrickCabigan/WEBPROG-IT242-HTML-LESSONS/feature/2_JPC_customize_my_website/svnhs-removebg-preview.png' },
  ];

  return (
    <PageLayout backgroundImage={MAIN_BG_URL} showBack={false} showNav={true}>
      <Container maxWidth="lg">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-genshin-accent overflow-hidden">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-genshin-gold mb-2">{profile.name}</h1>
          <p className="text-genshin-gold/70 mb-1">{profile.email}</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-white/70">{profile.section}</span>
            <VisionBadge vision={profile.vision} />
          </div>
          <p className="max-w-2xl mx-auto text-white/80 italic">{profile.bio}</p>
        </div>

        {/* Academic Legacy */}
        <Section title="ACADEMIC LEGACY">
          {academicData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border-b border-genshin-accent/20 last:border-0">
              <img src={item.logo} alt={item.name} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-bold text-genshin-gold">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* Combat Talents */}
        <Section title="COMBAT TALENTS">
          <CombatTalents images={COMBAT_IMAGES} />
        </Section>

        {/* Hobbies */}
        <HobbiesSection />
      </Container>

      {/* Dialogs */}
      <KatheryneDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        message="Are you sure you want to end your journey today?"
        onConfirm={() => navigate('/')}
        confirmText="LOGOUT"
      />

      <PaimonDialog
        isOpen={showGalleryDialog}
        onClose={() => setShowGalleryDialog(false)}
        message="Welcome to your precious adventure memory traveller"
        onConfirm={() => navigate('/gallery')}
        confirmText="OPEN GALLERY"
      />
    </PageLayout>
  );
};

export default MainProfile;