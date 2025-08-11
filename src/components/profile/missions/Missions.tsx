'use client';

import styles from './Mission.module.scss';
import { IMissionData, missionData } from '../../utils/missionData';
import { Card } from '@/src/uikit/card/Card';
import { useCallback, useEffect, useState } from 'react';
import { Mission } from '../mission/Mission';
import { useRouter, useSearchParams } from 'next/navigation';

interface IMissionProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Missions = ({ setIsGameOpen, setGameLink }: IMissionProps) => {
  const [activeMission, setActiveMission] = useState<IMissionData | null>(null);

  const serchParams = useSearchParams();
  const router = useRouter();
  const mission = serchParams.get('missionId');

  const handleActiveMision = useCallback(
    (value: number) => {
      const mission = missionData.find((item) => item.id === value);
      if (mission) {
        setActiveMission(mission);
        router.push(`/profile?activeTab=mission&missionId=${value}`);
      }
      return;
    },
    [router]
  );

  useEffect(() => {
    if (mission) {
      handleActiveMision(Number(mission));
    }
  }, [mission, handleActiveMision]);

  return (
    <div className={styles.contenWrapper}>
      {activeMission === null && !mission ? (
        <>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Missions</h2>
          </div>
          <ul className={styles.tabletList}>
            {missionData.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Card
                  gameLink={item.gameLink}
                  setGameLink={setGameLink}
                  onClick={() => setIsGameOpen(true)}
                  status={item.isAtive}
                  image={item.icon}
                  title={item.title}
                  level={item.level}
                  setActiveMission={() => handleActiveMision(item.id)}
                />
              </li>
            ))}
          </ul>
        </>
      ) : activeMission ? (
        <Mission
          activeMission={activeMission}
          setIsGameOpen={setIsGameOpen}
          setGameLink={setGameLink}
        />
      ) : null}
    </div>
  );
};

export default Missions;
