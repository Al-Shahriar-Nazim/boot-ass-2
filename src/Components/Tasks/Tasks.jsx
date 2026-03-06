import React from 'react';
import Ticket from '../../Ticket/Ticket';

const Tasks = ({selectedTicket}) => {
    console.log(selectedTicket)
    return (
        <div>
                <h3 className="font-semibold text-2xl text-gray-500">Task Status</h3>
                

                <div>
                    {
                        selectedTicket.map(ticket =><Ticket key={ticket.id} ticket={ticket}></Ticket>)
                    }
                </div>
        </div>
    );
};

export default Tasks;