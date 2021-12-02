import React, { Component } from 'react';
import './Budget.css';

export default class Budget extends Component {
  render() {
    return (
      <div>
          <div className="container">
              <h2>Budget: $2000</h2>
        </div> 
          <div className="container">
              <h2>Remaining: $500</h2>
          </div> 
          <div className="container">
              <h2>Expenses: $1500</h2>
          </div> 
      </div>
    );
  }
}
