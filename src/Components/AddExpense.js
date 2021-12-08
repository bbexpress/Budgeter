import React from 'react'
import { useState, createContext } from 'react';
const ExpenseContext = createContext();

export default function AddExpense() {

  const [expenses, addExpenses] = useState([]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const updateExpenses =(args)=> {
    
    console.log(args)
    addExpenses(previousState =>{
        return{...previousState, args}
    });
}

  return (
    <div>
      
      <form onSubmit={(event) => {event.preventDefault(); updateExpenses(({name: name,amount: amount}))}}>
          <label htmlFor="nameInput">Name: </label>
          <input type="text" name="nameInput" onChange={(event)=> setName((e)=> event.target.value)} />
          <label htmlFor="amountInput">Amount: </label>
          <input type="text" name="amountInput" onChange={(event)=> setAmount((e)=> event.target.value)} />
          <button type="submit">Submit</button>
          <p>{console.log(expenses)}</p>
      </form>

      <table>
        <tbody>
  
        </tbody>
      </table>

    </div>
  )
}



