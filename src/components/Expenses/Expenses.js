import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  const filteredArray = props.expenses.filter((expenses) => {
    if (year == expenses.date.getFullYear()) return expenses;
    return false;
  });

  return (
    <>
      <ExpenseFilter value={year} postYear={setYear} />
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
