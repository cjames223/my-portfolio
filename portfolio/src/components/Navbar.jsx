import react from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar () {

    return (
        <div className='navbar-container'>
            <nav className='navbar-name'>
                <h3><Link to='/'>Carlton James Jr.</Link></h3>
            </nav>
            <nav className='navbar-about'>
                <h3><Link to='/about'>About</Link></h3>
            </nav>  
        </div>
    )
}

export default Navbar