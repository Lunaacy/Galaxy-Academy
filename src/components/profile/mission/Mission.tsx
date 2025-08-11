import PlayIcon from '@/public/images/profile/mission/svg/play.svg';
import JoystikIcon from '@/public/images/profile/mission/svg/joystick.svg';
import { useRef } from 'react';
import { IMissionData } from '../../utils/missionData';

declare global {
  interface HTMLVideoElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

interface IMissionProps {
  activeMission: IMissionData;
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

export const Mission = ({ activeMission, setGameLink, setIsGameOpen }: IMissionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }

      videoRef.current.play();
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-[20px] p-[20px_0]">
      <div className="flex h-[45%] gap-[10px]">
        <div className="relative h-full w-[50%] rounded-[8px] bg-[url('/images/profile/mission/video_bg.webp')] bg-cover bg-center">
          {/* <video
            ref={videoRef}
            src={''}
            className="w-full max-w-3xl"
            preload="metadata"
            controls={false}
          /> */}
          <button
            type="button"
            className="absolute top-1/2 left-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2"
            onClick={handlePlay}
          >
            <PlayIcon className="cursor-pointer" />
          </button>
        </div>
        <div className="relative h-full w-[50%] rounded-[8px] bg-[url('/images/profile/mission/game_bg.webp')] bg-cover bg-center">
          <button
            type="button"
            className="absolute top-1/2 left-1/2 w-[24%] -translate-x-1/2 -translate-y-1/2"
            onClick={() => {
              setIsGameOpen(true);
              setGameLink(activeMission.gameLink);
            }}
          >
            <JoystikIcon className="cursor-pointer" />
          </button>
        </div>
      </div>
      <h2>Facts</h2>
    </div>
  );
};
