import React from "react";
import vectorOne from "../../assets/vector1.png";
// import vectorTwo from "../../assets/vector2.png";

const Dashbord = () => {
  return (
    <div className="container mx-auto p-4 my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="h-40 bg-gradient-to-r relative from-[#7B3FE4] to-[#A35EF0] hover:brightness-110 rounded-xl">
        <img src={vectorOne} alt="" />
        <div className="absolute -mt-50 text-white w-full text-center">
          <h3 className="text-xl">In-Progress</h3>
          <h3 className="text-4xl font-bold mt-3">0</h3>
        </div>
        <img
          className="absolute -mt-75 ml-78 translate-x-1/2 translate-y-5"
          src={vectorOne}
          alt=""
        />
      </div>
      <div className="bg-gradient-to-l relative from-[#2d9405] to-[#2d9] h-40 rounded-xl">
        <img src={vectorOne} alt="" />
        <div className="absolute -mt-50 text-white w-full text-center">
          <h3 className="text-xl">Resolved</h3>
          <h3 className="text-4xl font-bold mt-3">0</h3>
        </div>
        <img
          className="absolute -mt-75 ml-78 translate-x-1/2 translate-y-5"
          src={vectorOne}
          alt=""
        />
      </div>
    </div>
  );
};

export default Dashbord;
