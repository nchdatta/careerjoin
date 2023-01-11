import { faBookmark, faClock, faFileContract, faLocationDot, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Job = () => {
    return (
        <div className='job-details-container'>
            <div className="details-header">
                <h1 className='job-title'>Sr. Software Developer (Full-Stack Developer, Docker, Laravel, React.js/Vue Js, Python)</h1>
                <div className='job-meta'>
                    <div className='meta-top'>
                        <div><FontAwesomeIcon icon={faLocationDot} className='icon' />Dhaka</div>
                        <div><FontAwesomeIcon icon={faFileContract} className='icon' />Permanent</div>
                        <div><FontAwesomeIcon icon={faClock} className='icon' />Full-time</div>
                    </div>
                    <div className='meta-bottom'>
                        <p>2 days ago</p>
                    </div>
                </div>
            </div>
            <div className="details-body">
                <div className="job-context">
                    <h2>Job Context</h2>
                    <p>IGL Web Ltd is Software Company In Bangladesh Market From Last 15 Years, We are looking for a expert React js Front-end, Back-end, Docker, Laravel, React.js/Vue Js, Python, developer. Primary focus of this position will be on developing user interface components and implementing them following well-known React js workflows. Need to ensure that these components and the overall application are robust and easy to maintain. Need to coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.</p>
                </div>
                <div className="job-responsibilies">
                    <h2>Job Responsibilities</h2>
                    <ul>
                        <li>Write complex backend code with Node.js (preferred) /PHP with Laravel. </li>
                        <li>Write well designed, testable, efficient code.</li>
                        <li>Write well designed, testable, efficient code.</li>
                        <li>Write well designed, testable, efficient code.</li>
                        <li>Write well designed, testable, efficient code.</li>
                        <li>Write well designed, testable, efficient code.</li>
                        <li>Write well designed, testable, efficient code.</li>
                    </ul>
                </div>
                <div className="education">
                    <h2>Educational Requirements</h2>
                    <ul>
                        <li>Diploma in Computer in Computer Science & Engineering, Bachelor of Science (BSc) in Computer Science & Engineering</li>
                        <li>B.Sc or M.Sc in Computer Science from reputed local or international university</li>
                        <li>Diploma in Computer Science (4 Years)</li>
                        <li>Skills Required: docker, Docker based deployment, Laravel and Vue.js, Laravel Framework, Node js, React | NodeJS | mongoDB | mongoose | JavaScript | Github | Git, ReactJS</li>
                    </ul>
                </div>
                <div className="experience">
                    <h2>Experience Requirements</h2>
                    <ul>
                        <li>1 to 3 year(s)</li>
                    </ul>
                </div>
                <div className="additional-requirements">
                    <h2>Additional Requirements</h2>
                    <ul>
                        <li>Age 20 to 35 years</li>
                        <li>Both males and females are allowed to apply</li>
                        <li>Both males and females are allowed to apply</li>
                        <li>Both males and females are allowed to apply</li>
                        <li>Both males and females are allowed to apply</li>
                    </ul>
                </div>

                <div className="salary">
                    <h2>Salary</h2>
                    <ul>
                        <li>Negotiable</li>
                    </ul>
                </div>

                <div className="other-benefits">
                    <h2>Compensation & Other Benefits</h2>
                    <ul>
                        <li>Mobile bill, Pension policy, Credit card, Performance bonus</li>
                        <li>Lunch Facilities: Partially Subsidize</li>
                        <li>Salary Review: Yearly</li>
                        <li>Festival Bonus: 2</li>
                    </ul>
                </div>

                <div>
                    <h2>Employment Status</h2>
                    <p>Full-time</p>
                </div>

                <div>
                    <h2>Workplace</h2>
                    <p>Work at office</p>
                </div>

                <div>
                    <h2>Job Location</h2>
                    <p>Dhaka</p>
                </div>

                <div>
                    <h2>About Company</h2>
                    <p>Careerjoin is fintech company.</p>
                </div>
            </div>

            <div className='job-action'>
                <button className='appy-now'>Apply Now</button>
                <div className='save-share'>
                    <button><FontAwesomeIcon icon={faBookmark} className='mr-1' />Save</button>
                    <button><FontAwesomeIcon icon={faShare} className='mr-1' />Share</button>
                </div>
            </div>
        </div>
    );
};

export default Job;