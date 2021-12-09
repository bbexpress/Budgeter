import React from 'react';
import { useState, createContext, useContext } from 'react';
import './Expenses.css';
import { ExpenseContext } from './Budget';


export default function Expenses() {

  const expense = useContext(ExpenseContext);

  return (
    <div>
      {/* <ExpenseContext.Provider value = {expenses}>
        expenses
      </ExpenseContext.Provider> */}

      <table>
        <thead>
          <td>Expense</td>
          <td>Cost</td>
          <td></td>
        </thead>
              <tbody>
                {/* <tr>
                  <td>gas</td>
                  <td>50</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>groceries</td>
                  <td>150</td>
                  <td>X</td>
                </tr>
         */}
                {expense.name}
              </tbody>
        
      </table>
    </div>
  )
}


