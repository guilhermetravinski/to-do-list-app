import styles from './Header.module.css'
import logoImg from '../../assets/logo-todo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.imgLogo}
        src={logoImg}
        alt="Foquete com texto 'todo'"
      />
    </header>
  )
}
