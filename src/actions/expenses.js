import { v4 as uuidv4, v4 } from 'uuid';
import { set ,ref ,push, get ,child, remove } from '@firebase/database';
import database from '../firebase/firebase'
import expenses from '../selectors/expenses';

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
            createdAt = 0,
        } = expenseKart ;
        const expense = {description,note,amount,createdAt};
        const newPostListRef=ref(database, 'expenses');
        const newPostRef = push(newPostListRef);
        set(newPostRef, {
           ...expense
        }).then(()=>{
            dispatch(AddExpenseHandle({
                id: newPostRef.key,
                ...expense
            }))
        })
    }
}

const DeleteExpenseHandle = ((id) => ({
    type: "DELETE_EXPENSE",
    id,
}));

export const StartDeleteExpenseHandle =(id) =>{
    return (dispatch)=>{
        set(ref(database, `expenses/${id}`), {})
        .then(()=>{
            dispatch(DeleteExpenseHandle(id));
        });    
    }
}

const EditExpenseHandle = ((id, expense) => ({

    type: "EDIT_EXPENSE",
    id,
    expense,

}));

export const StartEditExpenseHandle = (id,expense)=>{
    return (dispatch)=>{
        set(ref(database, `expenses/${id}`), {
            ...expense
        })
        .then(()=>{
            dispatch(EditExpenseHandle(id,expense));
        });
    }
}

const SetExpenseHandle = (expenses) =>({
    type: "SET_EXPENSE",
    expenses
});

export const StartSetExpense = () =>{
    return (dispatch)=>{
        const dbRef = ref(database);
            get(child(dbRef,'expenses')).then((snapshot) => {
            if (snapshot.exists()) {
                const expensess=[];
                snapshot.forEach((childSnapshot)=>{
                    expensess.push({
                        id:childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(SetExpenseHandle(expensess));
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    }
}
