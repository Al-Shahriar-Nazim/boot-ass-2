import React from "react";
import active from "../../assets/active.png";
import { SlCalender } from "react-icons/sl";

const Customer = ({ customer }) => {
  console.log(customer);
  const{title,description,priority,status,createdAt,custom} = customer;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl p-5 mt-3 h-full">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">
           {title}
          </h3>
          <div className="flex gap-1 items-center justify-center bg-green-200 p-1 rounded-full  ml-2 ">
            <img className="w-[15px] h-[15px]" src={active} alt="" />
            <p>{status}</p>
          </div>
        </div>
        <p className="text-gray-500 my-4">
          {description}
        </p>
        <div className="text-gray-500">
          <div>
            <span>#1001</span>
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
