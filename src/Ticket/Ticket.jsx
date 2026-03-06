import React from "react";

const Ticket = ({ ticket,resolved,setResolved}) => {
  const {title} = ticket;
  const handleTask=(ticketData)=>{
    // console.log(ticket)
    setResolved([...resolved,ticketData])
  }
  return (
    <div>
      <div className="shadow-2xl p-4 rounded-md mt-5">
        <h3 className="font-bold text-[20px]">{title}</h3>
        <button onClick={()=>{handleTask(ticket)}} className="btn w-full bg-green-500 text-white font-bold mt-4">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Ticket;
