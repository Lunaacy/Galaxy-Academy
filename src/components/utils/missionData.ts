import EarthIcon from '@/public/images/svg/earth.svg';
import SunhIcon from '@/public/images/svg/sun.svg';
import Star from '@/public/images/svg/mssion/stars.svg';
import Rockety from '@/public/images/svg/mssion/rocketry.svg';
import Spacesuit from '@/public/images/svg/mssion/spacesuit.svg';
import Atmosphere from '@/public/images/svg/mssion/atmosphere.svg';
import Moon from '@/public/images/svg/mssion/moon.svg';
import Saturt from '@/public/images/svg/mssion/saturn.svg';
import { ElementType } from 'react';

export interface IMissionData {
  id: number;
  icon: ElementType;
  title: string;
  level: number;
  description: string;
  isAtive: boolean;
  gameLink: string;
}

export const missionData: IMissionData[] = [
  {
    id: 0,
    icon: Rockety,
    title: 'Mission sun',
    level: 1,
    isAtive: true,
    gameLink: 'https://allelf.github.io/PuzzleWebGL/',
    description:
      'This is a description for mission sun at level 2. It provides additional context and details about the mission.',
  },
  {
    id: 1,
    icon: EarthIcon,
    title: 'Structure of the Earth',
    level: 2,
    isAtive: true,
    gameLink: 'https://allelf.github.io/MMOArcade/',
    description:
      'This is a description for mission sun at level 1. It provides additional context and details about the mission.',
  },
  {
    id: 2,
    icon: SunhIcon,
    title: 'Mission earth',
    level: 3,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 3. It provides additional context and details about the mission.',
  },
  {
    id: 3,
    icon: Star,
    title: 'Mission sun',
    level: 4,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 4. It provides additional context and details about the mission.',
  },
  {
    id: 4,
    icon: Spacesuit,
    title: 'Mission earth',
    level: 5,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 5. It provides additional context and details about the mission.',
  },
  {
    id: 5,
    icon: Atmosphere,
    title: 'Mission sun',
    level: 6,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 6. It provides additional context and details about the mission.',
  },
  {
    id: 6,
    icon: Moon,
    title: 'Mission sun',
    level: 7,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 6. It provides additional context and details about the mission.',
  },
  {
    id: 7,
    icon: Saturt,
    title: 'Mission sun',
    level: 8,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 6. It provides additional context and details about the mission.',
  },
];
