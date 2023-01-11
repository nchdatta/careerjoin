import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../ErrorPage/NotFound';
import Sidebar from './components/Sidebar';
import ChangePassword from './pages/ChangePassword';
import CoverLetter from './pages/CoverLetter';
import Documents from './pages/Documents';
import Profile from './pages/Profile';
import SavedJobs from './pages/SavedJobs';
import SentApplications from './pages/SentApplications';

const Dashboard = () => {
    return (
        <div className='dasboard-container'>
            <Sidebar />
            <div className="outlet-content">
                <Routes>
                    <Route index element={<Profile />} />
                    <Route path='change-password' element={<ChangePassword />} />
                    <Route path='saved-jobs' element={<SavedJobs />} />
                    <Route path='applications' element={<SentApplications />} />
                    <Route path='cover-letter' element={<CoverLetter />} />
                    <Route path='documents' element={<Documents />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;