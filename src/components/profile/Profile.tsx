import { Cart } from "@/src/uikit/cart/Cart";
import { Tablet } from "./tablet/Tablet";
import EarthIcon from "@/public/images/svg/earth.svg";
import SunhIcon from "@/public/images/svg/sun.svg";
import styles from "./Profile.module.scss";

const items = [
  {
    id: 0,
    icon: <EarthIcon className={styles.icon} />,
    title: "earth",
    level: 1,
  },
  {
    id: 1,
    icon: <SunhIcon className={styles.icon} />,
    title: "sun",
    level: 2,
  },
  {
    id: 2,
    icon: <EarthIcon className={styles.icon} />,
    title: "earth",
    level: 3,
  },
  {
    id: 3,
    icon: <SunhIcon className={styles.icon} />,
    title: "sun",
    level: 4,
  },
];

export const Profile = () => {
  let content: React.ReactNode;

  // switch (activeTab) {
  //   case "home":
  //     break;

  //   default:
  //     break;
  // }

  const Content = () => {
    return (
      <ul className={styles.tabletList}>
        {items.map((item) => (
          <li key={item.id} className={styles.tabletItem}>
            <Cart image={item.icon} title={item.title} level={item.level} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.mainContainer}>
      Profile
      <div className="">
        <Tablet>
          <ul className={styles.tabletList}>
            {items.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Cart image={item.icon} title={item.title} level={item.level} />
              </li>
            ))}
          </ul>
        </Tablet>
      </div>
    </div>
  );
};
