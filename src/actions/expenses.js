import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'

export const AddExpenseHandle = (
    (expenses) => ({
        type: "ADD_EXPENSE",
        expenses
    }));

export const StartAddExpense = (expenseKart = {})=>{
    return (dispatch)=>{
        const {
            description = "",
            note = "",
            amount = "",
            createdAt = 0
        } = expenseKart ;
        const expense = {description,note,amount,createdAt};
        database.ref('expenses').push(expense)
        .then((ref)=>{
            dispatch(AddExpenseHandle({
                id: ref.key,
                ...expense
            }));
        });
    }
}

export const DeleteExpenseHandle = ((id) => ({
    type: "DELETE_EXPENSE",
    id,
}));

export const EditExpenseHandle = ((id, expense) => ({

    type: "EDIT_EXPENSE",
    id,
    expense,

}));
