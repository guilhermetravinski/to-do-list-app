import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <NewTask />
      <GlobalStyle />
    </ThemeProvider>
  )
}
