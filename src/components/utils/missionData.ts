import EarthIcon from '@/public/images/svg/earth.svg';
import SunhIcon from '@/public/images/svg/sun.svg';
import Star from '@/public/images/svg/mssion/stars.svg';
import Rockety from '@/public/images/svg/mssion/rocketry.svg';
import Spacesuit from '@/public/images/svg/mssion/spacesuit.svg';
import Atmosphere from '@/public/images/svg/mssion/atmosphere.svg';
import Moon from '@/public/images/svg/mssion/moon.svg';
import Saturt from '@/public/images/svg/mssion/saturn.svg';

import land from '@/public/images/profile/mission/land.webp';
import { ElementType } from 'react';

export interface IMissionData {
  id: number;
  icon: ElementType;
  title: string;
  level: number;
  description: string;
  isAtive: boolean;
  gameLink: string;
  videoLink: string;
  fileLink?: string;
  facts: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export const missionData: IMissionData[] = [
  {
    id: 2,
    icon: Rockety,
    title: 'Rockety',
    level: 3,
    isAtive: true,
    gameLink: 'https://allelf.github.io/PuzzleWebGL/',
    description:
      'This is a description for mission sun at level 2. It provides additional context and details about the mission.',
    videoLink: '',
    facts: [],
  },
  {
    id: 0,
    icon: EarthIcon,
    title: 'The Earth',
    level: 1,
    isAtive: true,
    gameLink: 'https://allelf.github.io/MMOArcade/',
    description:
      'This is a description for mission sun at level 1. It provides additional context and details about the mission.',
    videoLink: '',
    facts: [
      {
        id: 1,
        title: 'Fact 1',
        description:
          'Земная кора — тонкая оболочка всего от 5 до 70 км, на которой живут люди, растения, животные и т.д.',
        image: land.src,
      },
      {
        id: 2,
        title: 'Fact 2',
        description:
          ' Мантия — горячий слой густой породы, который движет горы и вызывает извержения вулканов.',
        image: '',
      },
      {
        id: 3,
        title: 'Fact 3',
        description:
          'Внешнее ядро — жидкий слой железа, который течёт и усиливает магнитное поле Земли, как гигантский генератор.',
        image: '',
      },
      {
        id: 4,
        title: 'Fact 4',
        description:
          'Ядро — твёрдый металлический шар в центре Земли, горячий (до 6000°C) и создающий магнитное поле, защищающее планету от космических лучей.',
        image: '',
      },
    ],
  },
  {
    id: 4,
    icon: SunhIcon,
    title: 'Mission earth',
    level: 5,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 3. It provides additional context and details about the mission.',
    videoLink: '',
    facts: [],
  },
  {
    id: 5,
    icon: Star,
    title: 'Mission sun',
    level: 6,
    isAtive: false,
    gameLink: '',
    description:
      'This is a description for mission sun at level 4. It provides additional context and details about the mission.',
    videoLink: '',
    facts: [],
  },
  {
    id: 3,
    icon: Spacesuit,
    title: 'Rockety model',
    level: 4,
    isAtive: true,
    gameLink: '',
    description:
      'This is a description for mission sun at level 5. It provides additional context and details about the mission.',
    videoLink: '',
    facts: [],
  },
  {
    id: 1,
    icon: Atmosphere,
    title: 'Earth model',
    level: 2,
    isAtive: true,
    gameLink: '',
    description:
      'This is a description for mission sun at level 6. It provides additional context and details about the mission.',
    videoLink: '',
    fileLink: '/files/mission/earth_model.pdf',
    facts: [],
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
    videoLink: '',
    facts: [],
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
    videoLink: '',
    facts: [],
  },
];
