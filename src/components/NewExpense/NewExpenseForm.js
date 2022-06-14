import { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // For Form Validations
    // const [isFormValid, setIsFormValid] = useState(true);

    // Validations states for inputs
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);



    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsTitleValid(false);
        }
        setIsTitleValid(true);
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsAmountValid(false);
        }
        setIsAmountValid(true);
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsDateValid(false);
        }
        setIsDateValid(true);
        setEnteredDate(event.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle === '') {
            setIsTitleValid(false)
        }
        if (enteredAmount === '') {
            setIsAmountValid(false)
        }
        if (enteredDate === '') {
            setIsDateValid(false)
            return;
        }
        else {
            console.log('Form Submitted');
            const formObj = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
            props.getForm(formObj);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        placeholder="Enter Title"
                    />
                    <small className="validateMsg" style={{ display: isTitleValid ? 'none' : 'block' }}>Please Enter Title</small>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        placeholder="Enter Amount"
                    />
                    <small className="validateMsg" style={{ display: isAmountValid ? 'none' : 'block' }}>Please Enter Amount</small>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        placeholder="Enter Date"
                    />
                    <small className="validateMsg" style={{ display: isDateValid ? 'none' : 'block' }}>Please Enter Date</small>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.cancelNewForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;