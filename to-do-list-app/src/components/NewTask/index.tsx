import { PlusCircle } from 'phosphor-react'
import { NewTaskButton, NewTaskConainer, NewTaskInput } from './styles'

export function NewTask() {
  return (
    <NewTaskConainer>
      <NewTaskInput placeholder="Adicione uma nova tarefa" />
      <NewTaskButton>
        Criar
        <PlusCircle size={16} />
      </NewTaskButton>
    </NewTaskConainer>
  )
}
