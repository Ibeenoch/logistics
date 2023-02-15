import React from 'react';
import CustomerCard from './CustomerCard';

const PlannerColumn = ({ title, customers }) => {
  return (
    <div className="planner-column">
      <h3>{title}</h3>
      <div className="planner-column-content">
        {customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)}
      </div>
    </div>
  );
};

export default PlannerColumn;
