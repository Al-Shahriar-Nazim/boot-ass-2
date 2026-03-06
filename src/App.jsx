import { Suspense, useState } from "react";
import "./App.css";
import Customers from "./Components/Customers/Customers";
import Dashbord from "./Components/DashBoard/Dashbord";
import Navbar from "./Components/Navbar/Navbar";
import Tasks from "./Components/Tasks/Tasks";
import Resolved from "./Components/Resolved/Resolved";
import { ToastContainer } from 'react-toastify';

const customerPromised = fetch("/data.json").then((res) => res.json());

function App() {
  const [selectedTicket,setSelectedTikcet] = useState([])
  const [ resolved, setResolved] = useState([])
  // console.log(resolved)
  // console.log(selectedTicket)
  const removeTicket =(t)=>{
    // console.log(t)
    const filterData = selectedTicket.filter(tick => tick.id !== t.id)
    // console.log(filterData)
    setSelectedTikcet(filterData)
  }
  return (
    <>
      <Navbar></Navbar>
      <Dashbord resolved={resolved} selectedTicket={selectedTicket}></Dashbord>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[80%]">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Customers selectedTicket={selectedTicket}  setSelectedTikcet={setSelectedTikcet} customerPromised={customerPromised}></Customers>
          </Suspense>
        </div>
        <div className="w-full md:w-[20%]">
        <Tasks removeTicket={removeTicket} resolved={resolved} setResolved={setResolved} selectedTicket={selectedTicket}></Tasks>
        <div className="my-5"><hr className="text-gray-400"></hr></div>
        <Resolved resolved={resolved}></Resolved>
          </div>
      </div>
    </>
  );
}

export default App;
