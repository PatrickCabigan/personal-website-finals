import React from 'react';
import { VISION_COLORS } from '../../types';

interface VisionBadgeProps {
  vision: string;
}

const VisionBadge: React.FC<VisionBadgeProps> = ({ vision }) => {
  const color = VISION_COLORS[vision as keyof typeof VISION_COLORS] || '#FFFFFF';

  return (
    <span
      className="px-3 py-1 rounded-full text-sm font-bold"
      style={{
        backgroundColor: `${color}20`,
        color: color,
        border: `1px solid ${color}`,
      }}
    >
      {vision}
    </span>
  );
};

export default VisionBadge;