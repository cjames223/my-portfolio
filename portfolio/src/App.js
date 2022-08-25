import './App.css';
import Profile from './components/Profile';
import About from './screens/About'
import Geniidex from './screens/Geniidex'
import { Routes, Route } from 'react-router-dom'
import Contact_Book from './screens/Contact_Book';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/About' element={<About />} />
        <Route path='/GenIIDex' element={<Geniidex />} />
        <Route path='/Contact_Book' element={<Contact_Book />} />
      </Routes>
    </div>
  )
}

export default App;
