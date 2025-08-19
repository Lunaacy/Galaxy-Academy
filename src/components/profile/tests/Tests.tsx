'use client';

import styles from './Tests.module.scss';
import { testData } from '../../utils/testData';
import { Card } from '@/src/uikit/card/Card';
import { useState } from 'react';
import Test from '../test/Test';

interface ITestProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Tests = ({ setIsGameOpen, setGameLink }: ITestProps) => {
  const [activeTest, setActiveTest] = useState<number | null>(null);

  return (
    <div className={styles.contenWrapper}>
      {activeTest === null ? (
        <>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Tests</h2>
          </div>
          <ul className={styles.tabletList}>
            {testData.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Card
                  image={item.icon}
                  title={item.title}
                  status={item.isActive}
                  id={item.id}
                  subtitle={`${item.questions} Questions`}
                  onClick={() => {
                    if (item.isActive) {
                      setActiveTest(item.id);
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Test activeTest={activeTest} />
      )}
    </div>
  );
};

export default Tests;
