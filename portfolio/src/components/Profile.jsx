import react from 'react'
import '../App.css'
import geniidex from '../img/geniidex.gif'
import { PrimeIcons } from 'primereact/api'
import 'primeicons/primeicons.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Profile () {
    return (
        <div>
            <Navbar />
            <div className='profile-container'>
                <section className='profile'>
                    <h1>James here</h1>
                    <p>Military Vet, Programmer, Gamer</p>
                </section>
                <section className='profile'>

                </section>
            </div>
            <div className='divider'><hr /></div>
            <div>
                <h1 className='project-header'>My Projects</h1>
                <section className='project-container'>
                    <div className='geniidex'>
                        <Link to='/GenIIDex'><img className='project-img' src={geniidex}></img></Link>
                        <h2><Link to='/GenIIDex'>GENIIDEX</Link></h2>
                        <p>An app that shows details of pokemon from the Johto region.</p>
                    </div>
                    <div className='geniidex'>
                        <Link to='/GenIIDex'><img className='project-img' src={geniidex}></img></Link>
                        <h2><Link to='/GenIIDex'>GENIIDEX</Link></h2>
                        <p>An app that shows details of pokemon from the Johto region.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Profile