import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Router from './Router'
import { defaultTheme } from './styles/theme/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App