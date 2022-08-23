import react from 'react'
import '../App.css'
import geniidex from '../img/geniidex.gif'
import { PrimeIcons } from 'primereact/api'
import 'primeicons/primeicons.css'
import Navbar from '../components/Navbar'

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
                        <img className='project-img' src={geniidex}></img>
                        <h2>GENIIDEX</h2>
                        <p>An app that shows details of pokemon from Generation II</p>
                    </div>
                    <div className='geniidex'>
                        <img className='project-img' src={geniidex}></img>
                        <h2>GENIIDEX</h2>
                        <p>An app that shows details of pokemon from Generation II</p>
                    </div>
                </section>
            </div>
            <footer className='footer-container'>
                <div className='footer-left'>
                    <p>© 2022 Carlton James Jr.</p>
                </div>
                <div className='footer-right'>
                    <i className='pi pi-envelope'></i>
                    <i className='pi pi-github'></i>
                    <i className='pi pi-linkedin'></i>
                </div>
            </footer>
        </div>
    )
}

export default Profile