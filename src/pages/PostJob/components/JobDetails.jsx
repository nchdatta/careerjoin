import React from 'react';
import DropDown from '../../../components/DropDown';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import useCountries from '../../../hooks/useCountries';

const JobDetails = ({ register }) => {
    const [countries] = useCountries();

    return (
        <div className='job-details'>
            <Input name='title' label='Job title' placeholder='e.g. Web Developer' register={register} required />
            <div className="row">
                <Input name='location' label='Job location' placeholder='Town or region' register={register} required />
                <DropDown name='country' label='Country' data={countries} register={register} />
            </div>
            <div className="row">
                <DropDown name='contracttype' label='Contract type' data={['Permanent', 'Temporary']} register={register} required />
                <DropDown name='workinghours' label='Working hours' data={['Full-time', 'Part-time']} register={register} />
            </div>
            <div className="row">
                <Input name='salary' label='Salary' placeholder='Amount' register={register} />
                <DropDown name='currency' label='Currency' data={['BDT', 'USD', 'EURO']} register={register} />
            </div>
            <TextArea name='description' label='Job description' register={register} required />

            <div className="about-company">
                <Input name='companyname' label='Company name' placeholder='Careerjoin Inc.' register={register} required />
                <Input name='companywebsite' label='Company website' placeholder='e.g. https://www.company.com' register={register} required />
                <div className="row">
                    <Input name='founded' label='Founded' placeholder='2002' register={register} />
                    <Input name='foundedin' label='Founded' placeholder='2002' register={register} />
                </div>
                <TextArea name='companyabout' label='About your company' register={register} />
                <Input type='text' name='recieveapplication' label='Receive applications on email' placeholder='recieve@email.com' register={register} required />
            </div>
        </div>
    );
};

export default JobDetails;