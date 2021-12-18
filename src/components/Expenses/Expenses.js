import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  console.log(year);
  return (
    <>
      <ExpenseFilter value={year} postYear={setYear} />
      {props.expenses.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </>
  );
};
export default Expenses;
