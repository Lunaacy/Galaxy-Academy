import PlayIcon from '@/public/images/profile/mission/svg/play.svg';
import JoystikIcon from '@/public/images/profile/mission/svg/joystick.svg';
import HandsIcon from '@/public/images/profile/mission/svg/hands.svg';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Mission.module.scss';
import Image from 'next/image';
import defaultImage from '@/public/images/default_image.png';
import { IMissionData } from '../../utils/missionData';

interface IMissionProps {
  activeMission: IMissionData | null;
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

export const Mission = ({ activeMission, setGameLink, setIsGameOpen }: IMissionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  if (!activeMission) {
    return (
      <div className={styles.emptyState}>
        <p>No mission selected yet.</p>
      </div>
    );
  }

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
      videoRef.current.play();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = activeMission?.fileLink || '';
    link.download = activeMission?.title || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGame = () => {
    if (activeMission?.gameLink) {
      setIsGameOpen(true);
      setGameLink(activeMission.gameLink || '');
    } else {
      handleDownload();
    }
  };

  return (
    <div className="custom-scroll relative flex h-full w-full flex-col gap-[20px] overflow-auto p-[20px_0]">
      {/* Video and Game Section */}
      <div className="flex gap-[10px]">
        <div className="relative h-[200px] w-[50%] rounded-[20px] bg-[url('/images/profile/mission/video_bg.webp')] bg-cover bg-center">
          {activeMission?.videoLink && (
            <video
              ref={videoRef}
              src={activeMission.videoLink}
              className="w-full max-w-3xl"
              preload="metadata"
              controls={false}
            />
          )}
          <button
            type="button"
            className="absolute top-1/2 left-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2"
            onClick={handlePlay}
          >
            <PlayIcon className="cursor-pointer" />
          </button>
        </div>
        <div className="relative h-full w-[50%] rounded-[20px] bg-[url('/images/profile/mission/game_bg.webp')] bg-cover bg-center">
          <button
            type="button"
            className="absolute top-1/2 left-1/2 w-[24%] -translate-x-1/2 -translate-y-1/2"
            onClick={handleGame}
          >
            {activeMission?.gameLink ? (
              <JoystikIcon className="cursor-pointer" />
            ) : (
              <HandsIcon className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Title + Facts */}
      <h2 className={`${styles.title} flex items-center justify-center text-[48px] font-bold lowercase`}>
        Facts
      </h2>
      <div className="h-full w-full">
        <ul className="grid h-full grid-cols-3 items-stretch gap-[20px]">
          {activeMission?.facts?.map((fact) => (
            <li
              key={fact.id}
              className="aspect-[2/3] w-full flex-1 rounded-[75px] border-[2px] border-[#2f8e86] bg-gradient-to-b from-[rgba(41,140,99,0.2)] to-[rgba(41,140,99,1)] p-[5px_10px]"
            >
              <div className="aspect-[1/1] w-full flex-1 overflow-hidden rounded-[75px] border-[2px] border-[#2f8e86]">
                <Image
                  src={fact?.image || defaultImage}
                  alt={fact.title}
                  width={500}
                  height={500}
                  quality={90}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className={`${styles.description} p-[10px_10px_15px_10px] text-center text-[24px] leading-[1] text-white`}>
                {fact.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Back Button */}
      <button
        type="button"
        onClick={() => router.push('/profile?activeTab=mission')}
        className="sticky bottom-0 left-[100%] flex min-h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#2a9ac9] text-[24px] leading-[1] font-bold"
      >
        {'\u2190'}
      </button>
    </div>
  );
};
