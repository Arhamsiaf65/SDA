// serviceCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard({ icon, title, description }) {
    return (
        <div className='bg-white  p-6  rounded-lg shadow-lg flex flex-col items-center'>
            <div className='text-4xl mb-4'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-sm text-gray-600 text-center'>{description}</p>
        </div>
    );
}

export default ServiceCard;
