import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState(2020);

  const onFilter = (data) => {
    setYear(data);
  };
  console.log(year);
  return (
    <>
      <ExpenseFilter postYear={onFilter} />
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
