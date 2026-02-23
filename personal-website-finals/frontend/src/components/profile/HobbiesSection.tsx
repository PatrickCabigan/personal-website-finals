import React from 'react';
import {
  BookOpenIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CommandLineIcon,
  FilmIcon,
  PaintBrushIcon,
  UserGroupIcon,
  CakeIcon,
} from '@heroicons/react/24/outline';

const hobbies = [
  { icon: BookOpenIcon, label: 'Manga Collection' },
  { icon: RocketLaunchIcon, label: 'Airplane Models' },
  { icon: GlobeAltIcon, label: 'Travelling' },
  { icon: CommandLineIcon, label: 'MLBB & Genshin' },
  { icon: FilmIcon, label: 'Video Editing' },
  { icon: PaintBrushIcon, label: 'Designing' },
  { icon: UserGroupIcon, label: 'Hanging Out' },
  { icon: CakeIcon, label: 'Cooking' },
];

const HobbiesSection: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl text-genshin-accent tracking-wider text-center mb-4">
        ADVENTURER QUEST LOG (HOBBIES)
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <div
              key={index}
              className="card text-center p-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <Icon className="w-8 h-8 text-genshin-accent mx-auto mb-2" />
              <span className="text-xs font-bold tracking-wide text-genshin-gold">
                {hobby.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesSection;