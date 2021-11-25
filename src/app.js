import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactRouter from './components/ReactRouter';
import configureStore from './store/configureStore';
import { AddExpenseHandle } from './actions/expenses';
import  { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(AddExpenseHandle({ description : 'water bill' , amount : 5000, createdAt : 1000}));
store.dispatch(AddExpenseHandle({ description : 'Rent bill', amount : 12586, createdAt : 2000}));
store.dispatch(AddExpenseHandle({ description : 'Gas bill', amount : 500004, createdAt : 500}));
store.dispatch(setTextFilter('water'));

console.log(store.getState());
const state =store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store ={store}>
        <ReactRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));