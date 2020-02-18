import React from 'react';
import Fade from 'react-reveal/Fade';

const ResumeItem = (props) => {
    const left = props.fade === 'left' ? true : false;
    const right = props.fade === 'right' ? true : false;
    
    return (
        <div className='col-xs-12 col-md-6'>
            <Fade left={left} right={right} >
                <h3>{props.company}</h3>
                <h4>{props.role}</h4>
                <p><em>{props.time}</em></p>
                <ul className='top-spacer'>
                    {props.description.map(item => {
                        return <li key={item.length}>{item}</li>
                    })}
                </ul>
            </Fade>

        </div>
    )
}

export default ResumeItem;
