import React from 'react';
import './Expenses.css';

export default function Expenses(props) {

  function removeExpense(args){
    console.log(args);
    props.removeExpense(args);
  }

  return (
    <div>
      <table>
        <thead className='thead'>
          <tr>
            <th>Expense</th>
            <th>Cost</th>
            <th>Remove</th>
          </tr>
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


