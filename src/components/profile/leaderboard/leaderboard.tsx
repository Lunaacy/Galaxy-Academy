import React, { useState } from "react";
import styles from "./leaderboard.module.scss";

interface Player {
  rank: number;
  name: string;
  avatar: string;
  classPoints: number;
  schoolPoints: number;
  cityPoints: number;
  countryPoints: number;
  total: number;
  highlight?: boolean;
}

const players: Player[] = [
  {
    rank: 1,
    name: "LABORLIS",
    avatar: "/avatars/avatar1.png",
    classPoints: 444,
    schoolPoints: 500,
    cityPoints: 321,
    countryPoints: 280,
    total: 765,
    highlight: true
  },
  {
    rank: 2,
    name: "EMILIA",
    avatar: "/avatars/avatar2.png",
    classPoints: 286,
    schoolPoints: 450,
    cityPoints: 311,
    countryPoints: 270,
    total: 597
  },
  {
    rank: 3,
    name: "CHRISTOPHER",
    avatar: "/avatars/avatar3.png",
    classPoints: 199,
    schoolPoints: 410,
    cityPoints: 290,
    countryPoints: 260,
    total: 489
  },
  {
    rank: 4,
    name: "PAUL",
    avatar: "/avatars/avatar4.png",
    classPoints: 112,
    schoolPoints: 300,
    cityPoints: 244,
    countryPoints: 200,
    total: 356
  }
];

const categories = ["CLASS", "SCHOOL", "CITY", "COUNTRY"] as const;

export default function Leaderboard() {
  const [viewMode, setViewMode] = useState<"PLAYER" | "TEAM">("PLAYER");
  const [category, setCategory] = useState<typeof categories[number]>("CLASS");

  const getPoints = (player: Player) => {
    switch (category) {
      case "CLASS": return player.classPoints;
      case "SCHOOL": return player.schoolPoints;
      case "CITY": return player.cityPoints;
      case "COUNTRY": return player.countryPoints;
    }
  };

  return (
    <div className={styles.leaderboard}>
      <div className={styles.topToggle}>
        <button
          className={viewMode === "PLAYER" ? styles.active : ""}
          onClick={() => setViewMode("PLAYER")}
        >
          PLAYER
        </button>
        <button
          className={viewMode === "TEAM" ? styles.active : ""}
          onClick={() => setViewMode("TEAM")}
        >
          TEAM
        </button>
      </div>

      <div className={styles.categoryTabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? styles.active : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className={styles.playerList}>
        {players.map((p) => (
          <li
            key={p.rank}
            className={`${styles.playerRow} ${p.highlight ? styles.highlight : ""}`}
          >
            <div className={styles.rank}>{p.rank}</div>
            <img src={p.avatar} alt={p.name} className={styles.avatar} />
            <div className={styles.name}>{p.name}</div>
            <div className={styles.points}>
              <span>
                {getPoints(p)}
              </span>
              <span className={styles.categoryPoints}>
                ⭐ {getPoints(p)}
              </span>
              <span className={styles.total}>TOTAL {p.total}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
