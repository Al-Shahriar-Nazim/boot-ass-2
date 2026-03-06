import React from 'react';

const Resol = ({resol}) => {
     const{title}=resol;
    return (
        <div className='rounded-md mt-3 bg-[#E0E7FF] p-3'>
            <h3>{title}</h3>
        </div>
    );
};

export default Resol;