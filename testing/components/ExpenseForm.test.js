import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../src/components/ExpenseForm";

test('testing Expense Form',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

test('testing Expense Form with data',()=>{
    const wrapper=shallow(<ExpenseForm  expense={expense1}/>)
    expect(wrapper).toMatchSnapshot();
});

test('Invalid Expense Form Submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () =>{

        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('testing description',()=>{
    const value='new Description';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('testing note',()=>{
    const value='new note';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('testing amount',()=>{
    const value="19.45";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target : {value},
        match: (string)=>{
            value.match(/^\d{1,}(\.\d{0,2})?$/);
        }
    });
    expect(wrapper.state('amount')).toEqual(value);
    expect(wrapper).toMatchSnapshot();
});

test('testing invalid amount',()=>{
    const value="19.455";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target : {value},
        match: (string)=>{
            value.match(/^\d{1,}(\.\d{0,2})?$/);
        }
    });
    expect(wrapper.state('amount')).toEqual('');
    expect(wrapper).toMatchSnapshot();
});

test('should call onsubmit on valid form submission',()=>{
    const onSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expense1} onSubmit={onSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault : () =>{

        }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSpy).toHaveBeenLastCalledWith({
        description : expense1.description,
        amount : expense1.amount *100,
        note : expense1.note,
        createdAt :expense1.createdAt
    });
});

const expense1 = {
    id:1,
    description: 'debit',
    amount: 50000,
    note: 'gello',
    createdAt: 49,
    };