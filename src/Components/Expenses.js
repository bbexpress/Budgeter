import React from 'react'
import { useState, createContext } from 'react';
const ExpenseContext = createContext();

export default function Expenses() {

  

  return (
    <div>
      <ExpenseContext.Provider value = {expenses}>
        expenses
      </ExpenseContext.Provider>
    </div>
  )
}


