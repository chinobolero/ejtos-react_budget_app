
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget ,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;
 
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);



    const handleBudgetChange = (event) => {
        if (event.target.value > upperLimit) {
            alert("The budget cannot exceed upper limit  ("+currency+" "+ upperLimit + ")  ");
        } else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending ("+currency+" " + totalExpenses + ")  ");
        }
        else {
            setNewBudget(event.target.value);
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;