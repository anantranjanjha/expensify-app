import { v4 as uuidv4 } from 'uuid';

export const AddExpenseHandle = (
    ({
        description = "",
        note = "",
        amount = "",
        createdAt = 0
    }) => ({
        type: "ADD_EXPENSE",
        expenses: {
            id: uuidv4(),
            description,
            amount,
            note,
            createdAt
        }
    }));

export const DeleteExpenseHandle = ((id) => ({
    type: "DELETE_EXPENSE",
    id,
}));

export const EditExpenseHandle = ((id,expense) => ({

        type: "EDIT_EXPENSE",
        id,
        expense,
    
}));
