import React from 'react';
import styles from './quiz.module.scss'; 

const Test = () => {
  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizTitle}>
        Which of the following statements about the Moon is correct?
      </div>
      <div className={styles.quizOptions}>
        <div className={styles.option}>a) The Moon produces its own light like the Sun.</div>
        <div className={styles.option}>b) The Moon has a thick atmosphere that supports weather.</div>
        <div className={styles.option}>c) The Moon affects the Earth's tides due to its gravitational pull.</div>
        <div className={styles.option}>d) The Moon completes its orbit around the Earth every 365 days.</div>
      </div>
    </div>
  );
};

export default Test;
