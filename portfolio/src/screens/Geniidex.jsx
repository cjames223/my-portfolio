import react from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import geniidex from '../img/geniidex.gif'

function Geniidex () {
    return (
        <div>
            <Navbar />
            <div className='project-header'>
                <div>
                    <h1>GenIIDex</h1>
                    <h6>A Pokedex of Pokemon from the Johto region.</h6>
                </div>
                <div className='project-description-container'>
                    <p className='project-description'>GenIIDex is a pokedex of Pokemon from the Johto region. Users can click on each pokemon to see more information about it. Users can also search for Pokemon by name.</p>
                </div>
                <div>
                    <a href='https://github.com/cjames223/GenIIDex' target='_blank'><img src={geniidex} /></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Geniidex
