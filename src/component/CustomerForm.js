import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const url = 'http://localhost:3030'

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${url}/api/customers`, { name, pickupLocation, dropoffLocation })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    setName('');
    setPickupLocation('');
    setDropoffLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="pickupLocation">Pickup Location:</label>
        <input type="text" id="pickupLocation" value={pickupLocation} onChange={event => setPickupLocation(event.target.value)} />
      </div>
      <div>
        <label htmlFor="dropoffLocation">Dropoff Location:</label>
        <input type="text" id="dropoffLocation" value={dropoffLocation} onChange={event => setDropoffLocation(event.target.value)} />
      </div>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
