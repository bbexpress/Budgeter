import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
import './Expenses.css';
import { ExpenseContext } from './Budget';


export default function Expenses() {

  const count = 0;
  const [expense, setExpense] = useState([useContext(ExpenseContext)]);
  console.log(expense);

  //const listItems = expense.map((d) => <li key={d.name}>{d.name}{d.amount}</li>);

  // useEffect(()=>{
  //   setExpense(()=> 
  //     count % 2 == 0 ? "even" : "odd");
      
  // },[expense]);

  return (
    <div>
      <table>
        <thead>
          <td>Expense</td>
          <td>Cost</td>
          <td>Remove</td>
        </thead>
              <tbody>
                  {useContext(ExpenseContext).map((d) => 
                    <tr>
                      <td key={d.key}>{d.key}{d.name}</td>
                      <td key={d.key}>{d.amount}</td>
                      <td className="remove"><button >x</button></td>
                    </tr>
                  )}
              </tbody>
        
      </table>
    </div>
  )
}


