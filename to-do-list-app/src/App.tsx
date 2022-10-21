import styles from './App.module.css'
import { Header } from './Components/Header'
import { NewTask } from './Components/NewTask'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NewTask />
    </div>
  )
}
