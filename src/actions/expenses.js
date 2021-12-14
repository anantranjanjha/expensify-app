import { set ,ref ,push, get ,child, remove } from '@firebase/database';
import database from '../firebase/firebase'

export const AddExpenseHandle = (
    (expenses) => ({
        type: "ADD_EXPENSE",
        expenses
    }));

export const StartAddExpense = (expenseKart = {})=>{
    return (dispatch, getState)=>{
        const {
            description = "",
            note = "",
            amount = "",
            createdAt = 0,
        } = expenseKart ;
        const expense = {description,note,amount,createdAt};
        const uid=getState().auth.uid;
        const newPostListRef=ref(database, `users/${uid}/expenses`);
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
    return (dispatch, getState)=>{
        const uid=getState().auth.uid;
        set(ref(database, `users/${uid}/expenses/${id}`), {})
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
    return (dispatch, getState)=>{
        const uid=getState().auth.uid;
        set(ref(database, `users/${uid}/expenses/${id}`), {
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
    return (dispatch, getState)=>{
            const dbRef = ref(database);
            const uid=getState().auth.uid;
            return get(child(dbRef,`users/${uid}/expenses`)).then((snapshot) => {
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
