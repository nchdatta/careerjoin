import React from 'react';
import DropDown from '../../../components/DropDown';
import TextArea from '../../../components/TextArea';
import TextField from '../../../components/TextField';

const JobDetails = () => {
    return (
        <div className='job-details'>
            <TextField name='title' label='Job title' placeholder='e.g. Web Developer' required />
            <div className="row">
                <TextField name='location' label='Job location' placeholder='Town or region' required />
                <DropDown name='country' label='Country' data={['Bangladesh', 'United States']} />
            </div>
            <div className="row">
                <DropDown name='contacttype' label='Contract type' data={['Permanent', 'Temporary']} />
                <DropDown name='workinghours' label='Working hours' data={['Full-time', 'Part-time']} />
            </div>
            <div className="row">
                <TextField name='salary' label='Salary' placeholder='Amount' />
                <DropDown name='currency' label='Currency' data={['BDT', 'USD', 'EURO']} />
            </div>
            <TextArea name='description' label='Job description' required />

            <div className="about-company">
                <TextField name='companyname' label='Company name' placeholder='Careerjoin Inc.' required />
                <TextField name='companywebsite' label='Company website' placeholder='e.g. https://www.company.com' />
                <div className="row">
                    <TextField name='founded' label='Founded' placeholder='2002' />
                    <TextField name='foundedin' label='Founded' placeholder='2002' />
                </div>
                <TextArea name='companyabout' label='About your company' />
                <TextField name='recieveapplication' label='Receive applications on email' placeholder='recieve@email.com' required />
            </div>
        </div>
    );
};

export default JobDetails;