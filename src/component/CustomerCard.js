import React from "react";
import "./customcard.css";

const CustomerCard = ({ customer, draggable }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("customer", JSON.stringify(customer));
  };

  return (
    <div
      className="customer-card"
      draggable={draggable}
      onDragStart={handleDragStart}
    >
      <p>
        <strong>Customer Name:</strong> {customer.name}
      </p>
      <p>
        <strong>Pick Up Location:</strong> {customer.pickupLocation}
      </p>
      <p>
        <strong>Drop Off Location:</strong> {customer.dropoffLocation}
      </p>
      <p>
        <strong>Date:</strong> {customer.date}
      </p>
    </div>
  );
};

export default CustomerCard;
