import react from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import contact_book from '../img/contact_book.gif'

function Contact_Book () {
    return (
        <div>
            <Navbar />
            <div className='project-header'>
                <div>
                    <h1>Contact Book</h1>
                    <h6>Save your contacts to a contact book and view them.</h6>
                </div>
                <div className='project-description-container'>
                    <p className='project-description'>Contact Book is an app that allows you to save and view your contacts. It has full CRUD functionality. Users can create a contact, view a single contact, view all contacts, update a contact, delete a contact, and delete all contacts.</p>
                </div>
                <div>
                    <a href='https://github.com/cjames223/python-command-line-project' target='_blank'><img className='img' src={contact_book} /></a>
                </div>
                <div className='repo-live-link'>
                    <div>
                        <a href='https://github.com/cjames223/python-command-line-project' target='_blank'>Repo</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact_Book