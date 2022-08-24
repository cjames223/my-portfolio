import react from 'react'
import '../App.css'

function Footer () {
    return (
        <div>
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

export default Footer