import react from 'react'
import '../App.css'

function Footer () {

    const Mailto = ({email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : ''
        if (subject) params += `subject=${encodeURIComponent(subject)}`
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

        return <a href={`mailto:${email}${params}`}>{children}</a>
    }

    return (
        <div>
            <footer className='footer-container'>
                <div className='footer-left'>
                    <p className='footer-text'>© 2022 Carlton James Jr.</p>
                </div>
                <div className='footer-right'>
                    <Mailto email='carltonjam@gmail.com' subject='' body=''><i className='pi pi-envelope'></i></Mailto>
                    <a href='https://github.com/cjames223' target='_blank'><i className='pi pi-github'></i></a>
                    <a href='https://www.linkedin.com/in/carlton-james-jr/' target='_blank'><i className='pi pi-linkedin'></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer