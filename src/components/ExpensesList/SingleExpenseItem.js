import Card from "../UI/Card/Card";
import ExpenseDate from "./ExpenseDate";

import './SingleExpenseItem.css';

const SingleExpenseItem = (props) => {
    // console.log(props.expenseItem);

    return (
        <li className="liii">
            <Card className='expense-item'>
                <ExpenseDate date={props.expenseItem.date} />
                <div className='expense-item__description'>
                    <h2>{props.expenseItem.title}</h2>
                    <div className='expense-item__price'>${props.expenseItem.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default SingleExpenseItem;