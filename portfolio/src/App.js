import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import About from './screens/About'
import Geniidex from './screens/Geniidex'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/About' element={<About />} />
        <Route path='/GenIIDex' element={<Geniidex />} />
      </Routes>
    </div>
  )
}

export default App;
