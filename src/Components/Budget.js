import React, { Component, useState } from 'react';
import './Budget.css';

export default function Budget() {

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  return (
    <div>
        <div className="container" style = {{backgroundColor: "lightgrey"}}>
            <h2>Budget: {budget}</h2>
            <button type="button" className="btn">Edit</button>
      </div> 
        <div className="container" style = {{backgroundColor: "lightgreen"}}>
            <h2>Remaining: {budget - expenses}</h2>
        </div> 
        <div className="container" style = {{backgroundColor: "lightblue"}}>
            <h2>Expenses: {expenses}</h2>
        </div> 
    </div>
  );
}

