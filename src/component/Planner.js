import React, { useState, useEffect } from "react";
import DropArea from "./DropArea";

function Planner() {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); // Set default date to today
  const [slots, setSlots] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const url = 'https://logistics-backend.onrender.com'
  
  const handleDateChange = event => {
  setDate(event.target.value);
  };

  const handleDrag = (e) => {
   e.preventDefault();
   e.stopPropagation();
   if(e.type === "dragenter" || e.type === "dragover" ){
    setDragActive(false)
   }else if(e.type === "dragleave") {
    setDragActive(false)
   }

  }

  const handleSubmit = (e) => {

  }
   
  // Fetch the planner slots for the selected date from the server
  useEffect(() => {
  fetch(`${url}/planner/${date}`)
  .then(res => res.json())
  .then(data => setSlots(data))
  .catch(err => console.error(err));
  }, [date]);

  const handleDrop = (event, slotNumber) => {
  event.preventDefault();
  event.stopPropagation();
  
  console.log('uploading')
  let data;
  const customer_id = event.dataTransfer.getData('customer_id');
  fetch(`{url}/planner/${customer_id}/${date}`, { method: 'POST', body: JSON.stringify(data) })
  .then(res => res.text())
  .then(message => console.log(message))
  .catch(err => console.error(err));
  };
  
  return (
  <div>
  <h2>Planner</h2>
  <div>
  <label htmlFor="date-picker">Select Date:</label>
  <input type="date" id="date-picker" value={date} onChange={handleDateChange} />
  </div>
  
  <div>

<div>
  <h3>Slot 1</h3>
  <div  style={{ width: '300px', height: '100px', border: '2px dashed green' }}>
  <DropArea date={date} />
  </div>
  <button type="submit">Remove</button>
</div>

<div>
  <h3>Slot 2</h3>
  <div  style={{ width: '300px', height: '100px', border: '2px dashed green' }}>
  <DropArea date={date} />
  </div>
  <button type="submit">Remove</button>
</div>

<div>
  <h3>Slot 3</h3>
  <div  style={{ width: '300px', height: '100px', border: '2px dashed green' }}>
  <DropArea date={date} />
  </div>
  <button type="submit">Remove</button>
</div>

<div>
  <h3>Slot 4</h3>
  <div  style={{ width: '300px', height: '100px', border: '2px dashed green' }}>
  <DropArea date={date} />
  </div>
  <button type="submit">Remove</button>
</div>


 
  </div>
  </div>
  );
  }

  export default Planner;
