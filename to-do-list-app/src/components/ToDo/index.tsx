import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
import { Header } from '../Header'
import { NewTask } from '../NewTask'
import { Tasks } from '../Tasks'
import { ToDoContainer } from './styles'

export function ToDo() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToDoContainer>
        <Header />
        <NewTask />
        <Tasks />
      </ToDoContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
