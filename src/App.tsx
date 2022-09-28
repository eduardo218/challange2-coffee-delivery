import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'
import Router from './Router'
import { defaultTheme } from './styles/theme/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App