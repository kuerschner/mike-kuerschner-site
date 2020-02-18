import React from 'react';

const ResumeItem = (props) => {

    
    return (
        <div className='col-xs-12 col-md-6'>
            <h3>{props.company}</h3>
            <h4>{props.role}</h4>
            <p><em>{props.time}</em></p>
            <ul className='top-spacer'>
                {props.description.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ResumeItem;
