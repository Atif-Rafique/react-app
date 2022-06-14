import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [addForm, setAddForm] = useState(false);

    const addNewForm = () => {
        setAddForm(true);
    }

    const onCancelNewForm = () => {
        setAddForm(false);
    }

    const getFormData = (formDataa) => {
        const newAddedExpense = {
            id: Math.random().toString(),
            ...formDataa
        }

        props.onAddExpense(newAddedExpense);
        setAddForm(false);
    }

    return (
        <div className="new-expense">
            {
                !addForm && (<button onClick={addNewForm}>Add New Form</button>)
            }
            {
                addForm && (<NewExpenseForm getForm={getFormData} cancelNewForm={onCancelNewForm} />)
            }
        </div>
    );
}

export default NewExpense;