import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filteredArray = props.expenses.filter((expenses) => {
    return year === expenses.date.getFullYear().toString();
  });

  return (
    <>
      <ExpenseFilter value={year} postYear={setYear} />
      {filteredArray.length === 0 && (
        <p className="no-data">No expenses found !!</p>
      )}
      {filteredArray.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </>
  );
};
export default Expenses;
