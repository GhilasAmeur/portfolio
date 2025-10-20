import Home  from './pages/Home'
import Navbar from './componenets/Navbar'
import { Routes, Route } from 'react-router-dom'

import Accueil from './componenets/Accueil'
import { APropos } from './pages/APropos'

const App = () => {
  return (
    <div>
      <Navbar />
      <Accueil />
      <APropos />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App