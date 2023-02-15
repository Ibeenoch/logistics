import React, { useState, useEffect } from "react";
import PlannerColumn from "./PlannerColumn";
import axios from "axios";

const Planner = () => {
  const [plannerData, setPlannerData] = useState([]);

  const url = 'http://localhost:3030'

  useEffect(() => {
    const fetchPlannerData = async () => {
      const res = await axios.get(`${url}/api/planner`);
      setPlannerData(res.data);
    };
    fetchPlannerData();
  }, []);

  const handleDrop = (e, slotNumber) => {
    const customerData = JSON.parse(e.dataTransfer.getData("customer"));
    const newPlannerData = plannerData.map((day) => {
      if (day.date === customerData.date) {
        return {
          ...day,
          [slotNumber]: customerData.customerId,
        };
      }
      return day;
    });
    setPlannerData(newPlannerData);
    axios.put(`${url}/api/planner`, {
      date: customerData.date,
      slot: slotNumber,
      customerId: customerData.customerId,
    });
  };

  return (
    <div className="planner-container">
      {plannerData.map((plannerColumn) => (
        <PlannerColumn
          key={plannerColumn.date}
          plannerColumn={plannerColumn}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default Planner;
