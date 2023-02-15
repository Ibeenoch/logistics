import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerCard from './CustomerCard';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  const url = 'http://localhost:3030'

  useEffect(() => {
    axios.get(`${url}/api/customers`)
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="customer-table">
      <h2>Customers</h2>
      <div className="customer-list">
        {customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)}
      </div>
    </div>
  );
};

export default CustomerTable;
