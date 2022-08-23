import react from 'react'
import '../App.css'
import geniidex from '../img/geniidex.gif'

function Profile () {
    return (
        <div>
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
        </div>
    )
}

export default Profile