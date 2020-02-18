import React from 'react';
import logo from '../images/logoImg.png';

const Contact = () => {
    return (
        <div className='row content-container'>
            <div className='col-xs-12 col-md-6'>
                <img src={logo} alt='mountain illustration' style={{width: '100%' }}/>
            </div>
            <div className='col-xs-12 col-md-6'>
                <h2>Let's get in touch</h2>
                <p>I'm always open to new projects and enjoy working with clients who value a collaborative approach. Drop me an email, reach out on LinkedIn, or find me around Denver!</p>
                <p><strong>email:</strong>mike.kuerschner@gmail.com</p>
                <p><strong>Links:</strong></p>
                <p><a href='https://www.linkedin.com/in/mikekuerschner/'>LinkedIn</a></p>
                <p><a href='https://github.com/kuerschner'>Github</a></p>
            </div>

        </div>
    )
}

export default Contact;
