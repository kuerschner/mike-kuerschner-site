import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Resume = () => {
    return (
        <>
        <div className='row content-container'>
            <div className='col-xs-12'>
                <h2>Employment</h2> 
            </div>
            <div className='col-xs-12 col-md-6'>
                <h3>Shard, LLC</h3>
                <h4>React UI Engineer</h4>
                <p><em>August 2019 - Present</em></p>
                <ul className='top-spacer'>
                    <li>Create and maintain client business applications utilizing React and internal backend tools</li>
                    <li>Participate in code reviews from other developers to ensure quality, stability, and overall architecture of code base</li>
                    <li>Research and prototype to provide insight into potentially beneficial technologies and specific industry solutions</li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6'>
                <h3>Tadasana Digital</h3>
                <h4>Founder &amp; Developer</h4>
                <p><em>August 2012 - Present</em></p>
                <ul className='top-spacer'>
                    <li>Design and develop Wordpress, Shopify, and fully custom websites and applications</li>
                    <li>Completed projects in HTML5, CSS3, Javascript (JQuery and React), and PHP</li>
                    <li>Work with brands on digital strategy, branding, and marketing</li>
                    <li>Establish and grow Tadasana Digital through business development, strong operational and financial management, and connection within the industry</li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6 top-spacer-large'>
                <h3>The Integer Group</h3>
                <h4>Full-stack Web Developer</h4>
                <p><em>September 2018 - August 2019</em></p>
                <ul className='top-spacer'>
                    <li>Gathered and refined technical specifications and requirements based on agency needs</li>
                    <li>Responsible for the architecture, construction, and maintenance of websites, progressive web apps, and applications for Fortune 100 clients</li>
                    <li>Developed chatbot utilizing AWS Lex, Lambda, and DynamoDB</li>
                    <li>Cooperated with UI / UX designers to match visual design intent</li>
                    <li>Educated departments on technical best practices</li>
                    <li>Daily coding in technologies such as JavaScript (Node.js, React.js, Jquery), HTML/CSS, PHP and Liquid (Shopify)</li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6 top-spacer-large'>
                <h3>Kenzan</h3>
                <h4>Sr. Client Solutions Manager</h4>
                <p>September 2017 - March 2018</p>
                <ul className='top-spacer'>
                    <li>Consulted with C-Level representatives of key clients to secure new business, grow current accounts, and influence client digital transformation using Agile, Lean, and Kanban principles</li>
                    <li>Managed internal resources and external contractor teams</li>
                    <li>Maintained client P&mp;L sheets to ensure profitability</li>
                </ul>
            </div>
        </div>
        <div className='row content-container'>
            <div className='col-xs-12'>
                <h2>Skills</h2> 
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
