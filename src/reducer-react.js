import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';


const AddExpenseHandle = (
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

const DeleteExpenseHandle = (({ id }) => ({
    type: "DELETE_EXPENSE",
    id,
}));

const EditExpenseHandle = (({ id }, amount) => ({
    type: "EDIT_EXPENSE",
    id,
    amount,
}));


const expenseReducerDefaault = [];

const expenseReducer = (state = expenseReducerDefaault, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expenses,
            ];
        case "DELETE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.amount
                    };
                }
                else {
                    return state;
                }
            });
        default:
            return state;
    }
}

const setTextFilter = ((value = "") => ({
    type: "TEXT_ASSIGN",
    text: {
        text: value,
    }
}));

const SortByAmount = (() => ({
    type: "SORTBY_AMOUNT",
    value: {
        sortBy: "Amount",
    }
}));

const SortByDate = (() => ({
    type: "SORTBY_DATE",
    value: {
        sortBy: "Date",
    }
}));

const setStartDate = ((value = undefined) => ({
    type: "START_DATE",

    value,
}));

const setEndDate = ((value = undefined) => ({
    type: "END_DATE",
    value,

}));

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}


const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case "TEXT_ASSIGN":
            return {
                ...state,
                ...action.text
            }
        case "SORTBY_DATE":
            return {
                ...state,
                ...{ sortBy: "date" }
            }
        case "SORTBY_AMOUNT":
            return {
                ...state,
                ...{ sortBy: "amount" }
            }
        case "START_DATE":
            return {
                ...state,
                startDate: action.value 
            }
        case "END_DATE":
            return {
                ...state,
                endDate: action.value 
            }
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

const getVisibleExpenses = (expenses, { text , sortBy , startDate , endDate})=>{
   
    return expenses.filter((expense)=>{
            const startmatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
            const endmatch= typeof endDate !== 'number' || expense.createdAt<=endDate;
            const textmatch= expense.description.toLowerCase().includes(text.toLowerCase());

            return startmatch && endmatch && textmatch;
        }).sort((a,b) => {
            if(sortBy=="date")
            return a.createdAt < b.createdAt ?1 : -1;
            else if(sortBy=="amount")
            return a.amount < b.amount ?1 : -1;
        });   
};


store.subscribe(() => {
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const expenseOne=store.dispatch(AddExpenseHandle({ description : 'house rent', amount : '100' ,createdAt : 1000}));
const expenseTwo=store.dispatch(AddExpenseHandle({ description : 'mouse rent', amount : '300', createdAt : -300 }));


// store.dispatch(DeleteExpenseHandle({ id : expenseTwo.expenses.id }));
// store.dispatch(EditExpenseHandle({ id : expenseOne.expenses.id},{amount : 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(SortByAmount());

// store.dispatch(SortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(504));

const expensify = {
    expenses: [{
        id: 'anant',
        description: 'januay rent',
        note: 'this is home rent',
        amount: '400',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    },
};