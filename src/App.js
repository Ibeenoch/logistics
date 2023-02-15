import React, { useState } from 'react';
import CustomerForm from './component/CustomerForm';
import CustomerTable from './component/CustomerTable';
import Planner from './component/Planner';
import './App.css';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const handleDateChange = (event) => {
    setCurrentDate(event.target.value);
  };

  return (
    <div className="App">
      <div className="App__header">
        <h1>Logistics App</h1>
        <label>
          Date:
          <input type="date" value={currentDate} onChange={handleDateChange} />
        </label>
      </div>
      <div className="App__content">
        <div className="App__left-panel">
          <CustomerForm />
          <CustomerTable />
        </div>
        <div className="App__right-panel">
          <Planner currentDate={currentDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
