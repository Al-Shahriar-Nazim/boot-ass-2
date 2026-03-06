import React, { use } from "react";


import Customer from "../Customer/Customer";
// import cal from "../../assets/cal.jpg";

const Customers = ({ customerPromised }) => {
  const customers = use(customerPromised);
  console.log(customers)
  return (
    <div className="container mx-auto p-4">
      <h3 className="font-semibold text-2xl text-gray-500">Customer Tickets</h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {
    customers.map(customer =><Customer key={customer.id} customer={customer}></Customer>)
}
</div>

    </div>
  );
};

export default Customers;
