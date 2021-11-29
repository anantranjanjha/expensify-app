import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactRouter from './components/ReactRouter';
import configureStore from './store/configureStore';
import '../node_modules/react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store ={store}>
        <ReactRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));