import React from 'react';
import heroImg from '../images/heroImg.svg';
import Fade from 'react-reveal/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Hero = () => {
    return (
        <div className='heroContainer row middle-xs content-container'>
            <div className='col-xs-12 col-md-6'>
                <Fade left>
                    <h1>Mike Kuerschner</h1>
                    <h2 className='heroSubText'>Colorado-based Front-end Developer</h2>
                </Fade>
            </div>
            <div className='col-xs-12 col-md-6'>
                <img src={heroImg} alt='man against computer illustration' style={{width: '100%'}} />
            </div>
            <div className='col-xs-12'>
                <div className="scroll-indicator shake-vertical">
                    <ExpandMoreIcon fontSize='inherit' />
                    <ExpandMoreIcon fontSize='inherit' />
                    <ExpandMoreIcon fontSize='inherit' />
                </div>
            </div>
        </div>
    )
}

export default Hero;
