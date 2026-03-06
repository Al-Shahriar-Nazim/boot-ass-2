import React from 'react';
import Resol from '../Resol/Resol';

const Resolved = ({resolved}) => {
   
    return (
        <div>
                <h3 className="font-semibold text-2xl text-gray-500">Resolved Task</h3>
                <div>
                    {
                        resolved.map(resol=><Resol key={resol.id} resol={resol}></Resol>)
                    }
                </div>
        </div>
    );
};

export default Resolved;