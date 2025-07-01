import React from "react";
import styles from './leaderboard.module.scss';

const data = [
  { name: 'Leyla', mission: 4, test: 5, change: 4, total: 9 },
  { name: 'Yusuf', mission: 3, test: 5, change: -1, total: 8 },
  { name: 'Aziz', mission: 3, test: 4, change: 2, total: 7 },
  { name: 'Amina', mission: 4, test: 3, change: -3, total: 7 },
  { name: 'Lola', mission: 2, test: 5, change: -4, total: 7 },
  { name: 'Sardor', mission: 3, test: 3, change: 1, total: 6 },
];

const Leaderboard = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>student</th>
            <th>mission</th>
            <th>test</th>
            <th>change</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>
                <div className={styles.studentCell}>
                  <div className={styles.avatar}></div>
                  <span>{student.name}</span>
                </div>
              </td>
              <td>{student.mission}</td>
              <td>{student.test}</td>
              <td className={
                student.change > 0
                  ? styles.positive
                  : student.change < 0
                  ? styles.negative
                  : ''
              }>
                {student.change > 0 ? `↑${student.change}` : student.change < 0 ? `↓${Math.abs(student.change)}` : '0'}
              </td>
              <td>{student.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
