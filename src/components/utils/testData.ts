import EarthIcon from '@/public/images/svg/earth.svg';
import SunIcon from '@/public/images/svg/sun.svg';
import Star from '@/public/images/svg/mssion/stars.svg';
import Rockety from '@/public/images/svg/mssion/rocketry.svg';
import Spacesuit from '@/public/images/svg/mssion/spacesuit.svg';
import Atmosphere from '@/public/images/svg/mssion/atmosphere.svg';
import Moon from '@/public/images/svg/mssion/moon.svg';
import Saturn from '@/public/images/svg/mssion/saturn.svg';
import { ElementType } from 'react';

interface ITestData {
  id: number;
  icon: ElementType;
  title: string;
  questions: number;
  description: string;
  isActive: boolean;
  gameLink: string;
}

export const testData: ITestData[] = [
  {
    id: 0,
    icon: Rockety,
    title: 'Solar System Basics',
    questions: 10,
    isActive: true,
    gameLink: 'https://example.com/test1',
    description:
      'Test your knowledge about the basics of our solar system.',
  },
  {
    id: 1,
    icon: EarthIcon,
    title: 'Structure of the Earth',
    questions: 15,
    isActive: true,
    gameLink: 'https://example.com/test2',
    description:
      'A quiz on the Earth’s layers, composition, and structure.',
  },
  {
    id: 2,
    icon: SunIcon,
    title: 'The Sun',
    questions: 12,
    isActive: false,
    gameLink: '',
    description:
      'Learn and get quizzed on the Sun’s properties and its role in the solar system.',
  },
  {
    id: 3,
    icon: Star,
    title: 'Stars and Galaxies',
    questions: 20,
    isActive: false,
    gameLink: '',
    description:
      'Identify different types of stars and galaxies.',
  },
  {
    id: 4,
    icon: Spacesuit,
    title: 'Space Exploration',
    questions: 8,
    isActive: false,
    gameLink: '',
    description:
      'History and technology behind space exploration.',
  },
  {
    id: 5,
    icon: Atmosphere,
    title: 'Planetary Atmospheres',
    questions: 14,
    isActive: false,
    gameLink: '',
    description:
      'Learn about the different atmospheres across planets.',
  },
  {
    id: 6,
    icon: Moon,
    title: 'The Moon',
    questions: 10,
    isActive: false,
    gameLink: '',
    description:
      'Phases, structure, and exploration of the Moon.',
  },
  {
    id: 7,
    icon: Saturn,
    title: 'Gas Giants',
    questions: 18,
    isActive: false,
    gameLink: '',
    description:
      'Learn about Jupiter, Saturn, Uranus, and Neptune.',
  },
];
