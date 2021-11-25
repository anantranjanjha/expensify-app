import ExpenseReducer from  '../../src/reducers/expenses';

const expense1 = [{
    id:1,
    description: 'debit',
    amount: 50000,
    note: 'gello',
    createdAt: 49,
    },{
        id:2,
    description: 'credit',
    amount: 40220,
    note: '',
    createdAt: 2,
},{
    id:3,
    description: 'imei',
    amount: 1452,
    note: 'hello',
    createdAt: 45,
}];

const add={
    description: 'redmi',
    amount: 18999,
    note: 'hello',
    createdAt: 45,
}

const action={
    type: 'ADD_EXPENSE',
    expenses : add

}

const action1={
    type: 'DELETE_EXPENSE',
    id:2,

}

test('Checling expense Reducer',()=>{
    const red=ExpenseReducer(expense1,action);
    expect(red).toEqual(expense1.concat(add));
})

test('Checling expense Reducer',()=>{
    const red=ExpenseReducer(expense1,action1);
    expect(red).toEqual([expense1[0],expense1[2]]);
})