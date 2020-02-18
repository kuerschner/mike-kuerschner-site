import React from 'react';
import heroImg from '../images/heroImg.svg';

const Hero = () => {
    return (
        <div className='heroContainer row middle-xs content-container'>
            <div className='col-xs-12 col-md-6'>
                <h1>Mike Kuerschner</h1>
                <h2 className='heroSubText'>Colorado-based Front-end Developer</h2>
            </div>
            <div className='col-xs-12 col-md-6'>
                <img src={heroImg} alt='man against computer illustration' style={{width: '100%'}} />
            </div>
        </div>
    )
}

export default Hero;
