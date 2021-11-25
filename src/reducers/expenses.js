const expenseReducerDefaault = [];

export default (state = expenseReducerDefaault, action) => {
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
                        ...action.expense,
                    };
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
}