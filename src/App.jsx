import { Suspense } from "react";
import "./App.css";
import Customers from "./Components/Customers/Customers";
import Dashbord from "./Components/DashBoard/Dashbord";
import Navbar from "./Components/Navbar/Navbar";

const customerPromised = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Dashbord></Dashbord>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[80%]">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Customers customerPromised={customerPromised}></Customers>
          </Suspense>
        </div>
        <div className="w-full md:w-[20%]">
          right
          </div>
      </div>
    </>
  );
}

export default App;
