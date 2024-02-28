import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/index'
import Cart from './components/cart/index'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App