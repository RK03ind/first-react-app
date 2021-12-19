import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseInput from "./components/NewExpense/ExpenseInput";

const App = () => {
  const [expenses, addExpenses] = useState([
    {
      title: "Sample Data",
      amount: "999",
      date: new Date(2021, 2, 22),
      id: Math.random() * 1000,
    },
    {
      title: "Sample Data",
      amount: "500",
      date: new Date(2021, 3, 12),
      id: Math.random() * 1000,
    },
    {
      title: "Sample Data",
      amount: "1500",
      date: new Date(2021, 7, 12),
      id: Math.random() * 1000,
    },
    {
      title: "Sample Data",
      amount: "800",
      date: new Date(2021, 11, 12),
      id: Math.random() * 1000,
    },
  ]);

  const createItem = (data) => {
    addExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className="main-container">
      <ExpenseInput itemData={createItem} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
