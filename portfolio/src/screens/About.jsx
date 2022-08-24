import react from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About () {

    const Mailto = ({email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : ''
        if (subject) params += `subject=${encodeURIComponent(subject)}`
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

        return <a href={`mailto:${email}${params}`}>{children}</a>
    }

    return (
        <div>
            <Navbar />
            <h1 className='about-desc'>Full-stack Software Engineer with an attentive, cheerful nature and proven ability to understand and build complex software. My experience in the military has provided me with invaluable skills that include attention to detail, dependability, and cooperation. These skills, combined with my knowledge on software engineering, will enable me to develop software quickly and efficiently.</h1>
            <br />
            <h1 className='about-reach'>Want to reach out to me?</h1>
            <section className='about-section'>
                <div className='about-contacts'>
                    <h1 className='about-contact-resume'>Contact</h1>
                    <Mailto email='carltonjam@gmail.com' subject='' body=''><i className='pi pi-envelope'> carltonjam@gmail.com</i></Mailto>
                    <a href='https://github.com/cjames223' target='_blank'><i className='pi pi-github'> https://github.com/cjames223</i></a>
                </div>
                <div>
                    <h1 className='about-contact-resume'>Resume</h1>
                    <a href='https://www.linkedin.com/in/carlton-james-jr/' target='_blank'><i className='pi pi-linkedin'> https://www.linkedin.com/in/carlton-james-jr/</i></a>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About