import { AddExpenseHandle } from "../../src/actions/expenses";
import { DeleteExpenseHandle } from "../../src/actions/expenses";
import { EditExpenseHandle } from "../../src/actions/expenses";

test('Checking for add expanses', () => {
    const AddExpense = AddExpenseHandle(expense);
    expect(AddExpense).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expense,
            id: expect.any(String),
        }
    });
});

test('Checking for add expanses with nothing passed', () => {
    const AddExpense = AddExpenseHandle(expense1);
    expect(AddExpense).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expense1,
            id: expect.any(String),
            createdAt: 0,
        }
    });
});

test('Delete Expense Handle', () => {
    const Delete = DeleteExpenseHandle(2);
    expect(Delete).toEqual({
        type: 'DELETE_EXPENSE',
        id: 2
    });
});

test('Edit Expense Handle', () => {
    const Edit = EditExpenseHandle(2, expense);
    expect(Edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: 2,
        expense
    });
});

const expense = {
    description: 'moterbill',
    amount: 200,
    note: 'bill for motor',
    createdAt: 0,
};

const expense1 = {
    description: '',
    amount: '',
    note: '',
    createdAt: undefined,
};


