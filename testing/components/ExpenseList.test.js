
import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../src/components/ExpenseList";


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

test('testing React Router Component',()=>{
    const wrapper=shallow(<ExpenseList expenses={expense1}/>);
    expect(wrapper).toMatchSnapshot();
})