import react from 'react'
import '../App.css'
import geniidex from '../img/geniidex.gif'
import contact_book from '../img/contact_book.gif'
import profile from '../img/profile2.jpg'
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
                <section className='profile-desc-section'>
                    <h1>James here</h1>
                    <p>Military Vet, Software Engineer, Gamer</p>
                </section>
                <section className='profile-img-section'>
                    <img className='profile-img img' src={profile}></img>
                </section>
            </div>
            <div className='divider'><hr /></div>
            <div>
                <h1 className='project-header'>My Projects</h1>
                <section className='project-container'>
                    <div className='geniidex'>
                        <Link className={'link'} to='/GenIIDex'><img className='project-img img' src={geniidex}></img></Link>
                        <h2><Link className={'link project-link'} to='/GenIIDex'>GENIIDEX</Link></h2>
                        <p>An app that shows details of pokemon from the Johto region.</p>
                    </div>
                    <div className='geniidex'>
                        <Link className={'link'} to='/Contact_Book'><img className='project-img img' src={contact_book}></img></Link>
                        <h2><Link className={'link project-link'} to='/Contact_Book'>CONTACT BOOK</Link></h2>
                        <p>An app that allows a user to store and view their contacts.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Profile