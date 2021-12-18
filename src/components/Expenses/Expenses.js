import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  return (
    <>
      <ExpenseFilter value={year} postYear={setYear} />
      {props.expenses
        .filter((expenses) => {
          if (year == expenses.date.getFullYear()) {
            return expenses;
          }
        })
        .map((expenses) => (
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
