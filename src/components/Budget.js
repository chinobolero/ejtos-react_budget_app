
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;

    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);



    const handleBudgetChange = (event) => {
        if (event.target.value > upperLimit) {
            alert("The budget cannot exceed upper limit  (£" + upperLimit + ")  ");
        } else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending (£" + totalExpenses + ")  ");
        }
        else {
            setNewBudget(event.target.value);
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;