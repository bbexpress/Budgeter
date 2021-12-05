import React from 'react'
import { useState, createContext } from 'react';
const ExpenseContext = createContext();

export default function AddExpense() {

  const [expenses, addExpenses] = useState({});

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [newExpense, setNewExpense] = useState("");

  return (
    <div>
      
      <form onSubmit={(event) => {event.preventDefault(); addExpenses((e)=> expenses.push({'name': name,'amount': amount}))}}>
          <label htmlFor="nameInput">Name: </label>
          <input type="text" name="nameInput" onChange={(event)=> setName((e)=> event.target.value)} />
          <label htmlFor="amountInput">Amount: </label>
          <input type="text" name="amountInput" onChange={(event)=> setAmount((e)=> event.target.value)} />
          <button type="submit">Submit</button>
          <p>{expenses[0].name} {expenses[0].amount}</p>
      </form>


    </div>
  )
}



