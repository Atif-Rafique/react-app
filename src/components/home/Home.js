import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import NewExpense from "../NewExpense/NewExpense";

import './Home.css';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];


const Home = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const newAddedExpenseData = (expense) => {
        setExpenses((preExpenses) => {
            return [expense, ...preExpenses]
        })
    }

    return (
        <div className="home">
            <h2>Home Works!</h2>
            <NewExpense onAddExpense={newAddedExpenseData} />
            <ExpensesList expensesList={expenses} />
        </div>
    );
}

export default Home;