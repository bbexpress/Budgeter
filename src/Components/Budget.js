import { useState } from 'react';
import './Budget.css';
import Popup from 'reactjs-popup';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import Search from './Search';

export default function Budget() {

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expenseArray, setExpArray] = useState([]);
  const [term, setTerm] = useState('');

  function filterExpense(term) {
    setTerm(term);
  }

  function removeExpense(index) {
    setExpenses(parseInt(expenses) - parseInt(expenseArray[index].amount));
    expenseArray.splice(index, 1);
  }

  function addExpense(val) {
    console.log(val);
    setExpenses(parseInt(expenses) + parseInt(val.amount));
    const array = [...expenseArray, val];
    setExpArray(array);
  }

  return (
    <div className="budget-container">
      <div className="outer-container">
        <div className="container" style={{ backgroundColor: "lightgrey" }}>
          <h2>Budget: {budget}</h2>
          <Popup
            trigger={<button className="button"> Edit Budget </button>}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Edit Budget </div>
                <div className="content">
                  {' '}
                  <form onSubmit={(event) => { close() }}>
                    <label htmlFor="nameInput">New Budget: </label>
                    <input type="text" name="budgetInput" placeholder={budget} onChange={(event) => setBudget((e) => event.target.value)} />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className="container" style={{ backgroundColor: "lightgreen" }}>
          <h2>Remaining: {budget - expenses}</h2>
        </div>
        <div className="container" style={{ backgroundColor: "lightblue" }}>
          <h2>Expenses: {expenses}</h2>
        </div>
      </div>
      <Search filterExpense={filterExpense} />
      <Expenses expenseArray={expenseArray} removeExpense={removeExpense} term={term} />
      <AddExpense addExpense={addExpense} />
    </div>
  );
}

