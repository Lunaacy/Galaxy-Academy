import styles from './Missions.module.scss';
import { IMissionData, missionData } from '../../utils/missionData';
import { Card } from '@/src/uikit/card/Card';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Mission } from '../mission/Mission';

interface IMissionProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Missions = ({ setIsGameOpen, setGameLink }: IMissionProps) => {
  const [activeMission, setActiveMission] = useState<IMissionData | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const mission = searchParams.get('missionId');

  const sortedMissions = [...missionData].sort((a, b) => a.id - b.id);

  const handleActiveMission = useCallback(
    (value: number) => {
      const mission = sortedMissions.find((item) => item.id === value);
      if (mission) {
        setActiveMission(mission);
        router.push(`/profile?activeTab=mission&missionId=${value}`);
      }
    },
    [router, sortedMissions]
  );

  useEffect(() => {
    if (mission) {
      handleActiveMission(Number(mission));
    } else {
      setActiveMission(null);
    }
  }, [mission, handleActiveMission]);

  return (
    <div className={styles.contentWrapper}>
      {activeMission === null ? (
        <>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Missions</h2>
          </div>
          <ul className={`${styles.tabletList} custom-scroll`}>
            {sortedMissions.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Card
                  image={item.icon}
                  title={item.title}
                  status={item.isAtive}
                  id={item.level}
                  subtitle={`Level ${item.level}`}
                  onClick={() => {
                    setActiveMission(item);
                    setIsGameOpen(true);
                    setGameLink(item.gameLink);
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Mission
          activeMission={activeMission}
          setIsGameOpen={setIsGameOpen}
          setGameLink={setGameLink}
        />
      )}
    </div>
  );
};

export default Missions;
