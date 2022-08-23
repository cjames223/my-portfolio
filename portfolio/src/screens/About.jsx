import react from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

function About () {
    return (
        <div>
            <Navbar />
            <section className='about-section'>
                <div className='about-contacts'>
                    <h1>Contact</h1>
                    <i className='pi pi-envelope'> carltonjam@gmail.com</i>
                    <i className='pi pi-linkedin'> https://www.linkedin.com/in/carlton-james-jr/</i>
                </div>
                <div>
                    <h1>Resume</h1>
                </div>
            </section>
        </div>
    )
}

export default About