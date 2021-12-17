import Expenses from "./components/Expenses/Expenses";
import ExpenseInput from "./components/NewExpense/ExpenseInput";

const App = () => {
  const expenses = [
    {
      title: "Electricity",
      amount: "356",
      date: new Date(2022, 2, 22),
    },
    {
      title: "Internet",
      amount: "3556",
      date: new Date(2022, 2, 22),
    },
    {
      title: "Newspaper",
      amount: "69",
      date: new Date(2022, 2, 22),
    },
  ];

  const createItem = (data) => {
    console.log(data);
    console.log("from app.js");
  };

  return (
    <div className="main-container">
      <ExpenseInput itemData={createItem} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
