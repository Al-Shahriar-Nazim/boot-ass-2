import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";

const Customer = ({ customer, setSelectedTikcet, selectedTicket }) => {
  // console.log(customer);
  const [toggle, setToggle] = useState(true);
  const { title, description, priority, createdAt, custom, id } = customer;

  const getStatusColor = (status) => {
    if (status === "In Progress") {
      return "bg-yellow-200 text-yellow-700  border-yellow-400";
    }
    if (status === "open") {
      return "bg-green-200 text-green-700 border-green-400";
    }
  };
  const handleSelected = (tikcetData) => {
    setSelectedTikcet([...selectedTicket, tikcetData]);
    // console.log("hello")
  };
  return (
    <div
      onClick={() => {
        handleSelected(customer);
      }}
    >
      <div className="card bg-base-100 shadow-2xl p-5 mt-3 h-full">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div>
            {/* <p className="border-1 h-[30px] flex gap-1 items-center justify-center
           bg-green-200 p-1 rounded-2xl w-[150px] md:w-[120px]  ml-2">Open</p> */}
            {/* <p>Open</p> */}
            {toggle ? (
            <button onClick={()=>setToggle(!toggle)}
                className="border-1 h-[30px] flex gap-1 items-center justify-center
           bg-green-200 p-1 rounded-2xl w-[150px] md:w-[120px]  ml-2"
              >Open</button>
            ) : (
              <button
                className="border-1 h-[30px] flex gap-1 items-center justify-center
           bg-yellow-200 p-1 rounded-2xl w-[150px] md:w-[120px]  ml-2"
              >In progess</button>
            )}
          </div>
        </div>
        <p className="text-gray-500 my-4">{description}</p>
        <div className="text-gray-500">
          <div>
            <span>#100{id}</span>
            <span className="ml-3 text-red-500">{priority}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{custom}</span>
            <span className="flex items-center gap-1">
              <SlCalender></SlCalender> {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
