import styles from './Tasks.module.css'

type Task = {
  id: string
  title: string
  isCompleted: boolean
}

interface TasksProps {
  tasks: Task[]
  onCompleteTask: (taskId: string) => void
  onRemoveTask: (taskId: string) => void
}

export function Tasks({ tasks, onCompleteTask, onRemoveTask }: TasksProps) {
  const totalTaskCreated = 0
  const totalTaskDone = tasks.reduce(
    (acc, cur) => acc + Number(cur.isCompleted),
    0,
  )

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfoContainer}>
        <p className={styles.infoTextCreated}>
          Tarefas criadas <span>{totalTaskCreated}</span>
        </p>
        <p className={styles.infoTextDone}>
          Concluídas{' '}
          <span className={styles.taskInfoCounter}>
            <>
              {totalTaskCreated === 0
                ? totalTaskCreated
                : `${totalTaskDone} de ${totalTaskCreated}`}
            </>
          </span>
        </p>
      </div>
    </div>
  )
}
