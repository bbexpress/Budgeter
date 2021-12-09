import './App.css';
import BudgetContainer from './Components/BudgetContainer';
import Header from './Components/Header';
import Budget from './Components/Budget';

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
    </div>
  );
}

export default App;
