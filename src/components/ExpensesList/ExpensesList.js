import SingleExpenseItem from "./SingleExpenseItem";

const ExpensesList = (props) => {
    // console.log(props);
    return (
        <div>
            <h2>My Expenses List !</h2>
            {
                props.expensesList.map((expense) => (
                    <SingleExpenseItem key={expense.id} expenseItem={expense} />
                ))
            }
        </div>
    );
}

export default ExpensesList;