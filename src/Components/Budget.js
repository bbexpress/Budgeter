import React, { Component } from 'react';
import './Budget.css';

export default class Budget extends Component {
  render() {
    return (
      <div>
          <div className="container" style = {{backgroundColor: "lightgrey"}}>
              <h2>Budget: $2000</h2>
              <button type="button" className="btn btn-primary">Edit</button>
        </div> 
          <div className="container" style = {{backgroundColor: "lightgreen"}}>
              <h2>Remaining: $500</h2>
          </div> 
          <div className="container" style = {{backgroundColor: "lightblue"}}>
              <h2>Expenses: $1500</h2>
          </div> 
      </div>
    );
  }
}
