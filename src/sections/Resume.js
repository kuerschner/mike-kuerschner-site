import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import ResumeItem from '../components/ResumeItem';
import ResumeList from '../data/ResumeList';

const Resume = () => {


    return (
        <>
        <div className='row content-container'>
            <div className='col-xs-12'>
                <h2 className='center-mobile'>Employment</h2> 
            </div>
            {
                ResumeList.map(job => {
                    return <ResumeItem company={job.company} role={job.role} time={job.time} description={job.description} />
                })
            }
        </div>
        <div className='row content-container'>
            <div className='col-xs-12'>
                <h2 className='center-mobile'>Skills</h2> 
            </div>
            <div className='col-xs-12 col-md-4'>
                <h3>Development</h3> 
                <h4>HTML/CSS</h4>
                <p>6 years</p>
                <LinearProgress variant="determinate" value={75} />
                <h4>JavaScript</h4>
                <p>6 years</p>
                <LinearProgress variant="determinate" value={75} />
                <h4>React</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
                <h4>Node</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
                <h4>Sass</h4>
                <p>3 years</p>
                <LinearProgress variant="determinate" value={65} />
            </div>
            <div className='col-xs-12 col-md-4'>
                <h3>AWS</h3>
                <h4>Lambda</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
                <h4>Lex</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
                <h4>DynamoDB</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
                <h4>Static Sites (S3/Cloudfront)</h4>
                <p>2 years</p>
                <LinearProgress variant="determinate" value={50} />
            </div>
            <div className='col-xs-12 col-md-4'>
                <h3>Platforms</h3> 
                <h4>Wordpress</h4>
                <p>6 years</p>
                <LinearProgress variant="determinate" value={75} />
                <h4>Shopify</h4>
                <p>3 years</p>
                <LinearProgress variant="determinate" value={75} />
            </div>
        </div>
        </>
    )
}

export default Resume;
