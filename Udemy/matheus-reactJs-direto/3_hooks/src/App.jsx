import './App.css'
import ComponenteFilho from './components/ComponenteFilho'
import ExemploUseEffect from './components/ExemploUseEffect'
import Times from './components/Times'
import ValorDoContexto from './components/ValorDoContexto'
import { MeuContextProvider } from './contexts/MeuContexto'

function App() {

  return (
    <>
    {/* use effect */}
    <ExemploUseEffect />
    <Times />
    <MeuContextProvider>
      <ValorDoContexto />
      <ComponenteFilho />
    </MeuContextProvider>
    </>
  )
}

export default App
