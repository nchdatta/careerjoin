import { faFile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NoResult from '../../ErrorPage/NoResult';

const Documents = () => {
    return (
        <div className='documents'>
            <NoResult
                title='No documents saved yet'
                subTitle='Store your documents and have them ready to send to employers in an instant.'
                icon={faFile}
                btnLabel='Add Document'
                to='/add-document'
            />
        </div>
    );
};

export default Documents;