import React from 'react'
import { useState, useContext } from 'react';
import { ExpenseContext } from './Budget';

export default function AddExpense() {
  const expenses = useContext(ExpenseContext);

  const [expense, addExpense] = useState([]);

  //addExpenses(useContext(ExpenseContext));

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // const updateExpenses =(args)=> {
  //   addExpenses(previousState =>{
  //       return[...previousState, args]
  //   });
  const updateExpenses =(args)=> {
    expenses.push(args);
    console.log(expenses);
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
    </div>
  )
}



