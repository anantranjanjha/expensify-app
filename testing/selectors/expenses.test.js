import selectExpenses from '../../src/selectors/expenses';

const expense1 = [{
    description: 'debit',
    amount: 50000,
    note: 'gello',
    createdAt: 49,
    },{
    description: 'credit',
    amount: 40220,
    note: '',
    createdAt: 2,
},{
    description: 'imei',
    amount: 1452,
    note: 'hello',
    createdAt: 45,
}];

test('sort by amount',()=>{
    const filter={
        sortBy : 'amount',
        text: 'it',
        startDate: undefined,
        endDate:undefined,
    }
    const amt=selectExpenses(expense1,filter);
    expect(amt).toEqual([
        expense1[0], expense1[1]
    ]);
});