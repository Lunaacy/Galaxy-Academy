import React from 'react';
import styles from './Test.module.scss';

interface Question {
  question: string;
  options: string[];
}

interface TestProps {
  activeTest: number;
  questions: Question[];
}

const Test: React.FC<TestProps> = ({ activeTest, questions }) => {
  return (
    <div className={styles.quizContainer}>
      {questions.map((q, index) => (
        <div key={index} className={styles.quizCard}>
          <div className={styles.quizTitle}>
            Test {activeTest}.{index + 1} — {q.question}
          </div>
          <div className={styles.quizOptions}>
            {q.options.map((opt, i) => (
              <div key={i} className={styles.option}>
                {opt}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
