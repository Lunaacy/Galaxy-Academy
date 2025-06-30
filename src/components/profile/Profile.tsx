import { Tablet } from './tablet/Tablet'
import { Container } from '../shared/container/container'
import AstronautIcon from '@/public/images/svg/astronaut.svg'
import moonImage from '@/public/images/profile/moon.webp'
import styles from './Profile.module.scss'
import Image from 'next/image'

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <Tablet />
      </Container>
      <Image
        src={moonImage}
        width={500}
        height={500}
        alt='moon'
        className={styles.moon}
      />
      <AstronautIcon className={styles.astronaut} />
    </div>
  )
}
