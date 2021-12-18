import ExpenseForm from "./ExpenseForm";
import "./Expenses-inputStyles/ExpensesInput.css";

const ExpenseInput = (props) => {
  const PostDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random() * 1000,
    };
    props.itemData(expenseData);
  };
  return (
    <div className="form-container">
      <ExpenseForm postData={PostDataHandler} />
    </div>
  );
};
export default ExpenseInput;
