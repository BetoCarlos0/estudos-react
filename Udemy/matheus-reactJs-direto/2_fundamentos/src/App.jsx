import './App.css'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Pai from './components/Pai'
import PaiFunction from './components/PaiFunction'
import SegundoComponente from './components/SegundoComponente'
import UserFormUser from './components/UserFormUser'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Welcome />
      <SegundoComponente />
      <Pai />
      <Descricao texto="Olá, eu sou o componente Descrição!" />
      <Cachorro nome="Rex" raca="Pastor Alemão" />
      {/* useStat -> hook */}
      <Counter />
      <UserFormUser />
      <PaiFunction />
    </>
  )
}

export default App
