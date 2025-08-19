import styles from './Missions.module.scss';
import { IMissionData, missionData } from '../../utils/missionData';
import { Card } from '@/src/uikit/card/Card';
import { useState } from 'react';
import { Mission } from '../mission/Mission';

interface IMissionProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Missions = ({ setIsGameOpen, setGameLink }: IMissionProps) => {
<<<<<<< HEAD
  const [activeMission, setActiveMission] = useState<IMissionData | null>(null);

  const serchParams = useSearchParams();
  const router = useRouter();
  const mission = serchParams.get('missionId');

  const sortedMissions = [...missionData].sort((a, b) => {
    return a.id - b.id;
  });

  const handleActiveMision = useCallback(
    (value: number) => {
      const mission = sortedMissions.find((item) => item.id === value);
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
    } else {
      setActiveMission(null);
    }
  }, [mission, handleActiveMision]);
=======
  // Store the whole mission object instead of just the level number
  const [activeTest, setActiveTest] = useState<IMissionData | null>(null);
>>>>>>> 11666669 (Changed header, cards and pagge file)

  return (
    <div className={styles.contenWrapper}>
      {activeTest === null ? (
        <>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Missions</h2>
          </div>
          <ul className={`${styles.tabletList} custom-scroll`}>
            {sortedMissions.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Card
<<<<<<< HEAD
                  gameLink={item.gameLink}
                  onClick={() => setIsGameOpen(true)}
                  status={item.isAtive}
=======
>>>>>>> 11666669 (Changed header, cards and pagge file)
                  image={item.icon}
                  title={item.title}
                  status={item.isAtive}
                  id={item.level}
                  subtitle={`Level ${item.level}`}
                  onClick={() => {
                    setActiveTest(item); // store full mission object
                    setIsGameOpen(true);
                    setGameLink(item.gameLink);
                  }}
                />
              </li>
            ))}
          </ul>
        </>
<<<<<<< HEAD
      ) : activeMission ? (
        <Mission setIsGameOpen={setIsGameOpen} setGameLink={setGameLink} />
      ) : null}
=======
      ) : (
        <Mission activeMission={activeTest} />
      )}
>>>>>>> 11666669 (Changed header, cards and pagge file)
    </div>
  );
};

export default Missions;
