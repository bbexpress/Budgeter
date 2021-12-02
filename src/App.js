import './App.css';
import BudgetContainer from './Components/BudgetContainer';
import Header from './Components/Header';
import Budget from './Components/Budget';
import AddExpense from './Components/AddExpense';
import Search from './Components/Search';
import Expenses from './Components/Expenses';

function App() {
  return (
    <div className="BudgetContainer">
      <BudgetContainer />
      <div className="Header">
        <Header />
      </div>
      <div className="Budget">
        <Budget />
      </div>
      <div className="Search">
        <Search />
      </div>
      <div className="Expenses">
        <Expenses />
      </div>
      <div className="AddExpense">
        <AddExpense />
      </div>
    </div>
  );
}

export default App;
