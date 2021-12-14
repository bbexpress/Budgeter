import React from 'react';
// import { useState, createContext, useContext, useEffect } from 'react';
import './Expenses.css';
// import { ExpenseContext } from './Budget';


export default function Expenses(props) {

  // // const count = 0;
  // // const [expense, setExpense] = useState([useContext(ExpenseContext)]);
  function removeExpense(args){
    console.log(args);
    props.removeExpense(args);
  }

  return (
    <div>
      <table>
        <thead className='thead'>
          <th>Expense</th>
          <th>Cost</th>
          <th>Remove</th>
        </thead>
              <tbody>
                  {props.expenseArray.filter(expense => expense.name.includes(props.term)).map((d,index) => 
                    <tr key = {index}>
                      <td >{d.name}</td>
                      <td >{d.amount}</td>
                      <td className="remove"><button onClick={(event) =>{removeExpense(index)}}>x</button></td>
                    </tr>
                  )}
              </tbody>
        
      </table>
    </div>
  )
}


