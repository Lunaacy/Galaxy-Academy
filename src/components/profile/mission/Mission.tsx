"use client";

import styles from "./Mission.module.scss";
import { missionData } from "../../utils/missionData";
import { Card } from "@/src/uikit/card/Card";

interface IMissionProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Mission = ({ setIsGameOpen, setGameLink }: IMissionProps) => {
  return (
    <div className={styles.contenWrapper}>
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mission;
