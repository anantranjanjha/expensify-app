import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactRouter,{history} from './components/ReactRouter';
import { StartSetExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import '../node_modules/react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { onAuthStateChanged ,getAuth} from 'firebase/auth';
import { login, logOut } from './actions/auth';
import {LoadingPage} from './components/LoadingPage.js';

const store = configureStore();

const jsx = (
    <Provider store ={store}>
        <ReactRouter />
    </Provider>
);


const auth=getAuth();

let hasRendered=false;

const renderApp  =() =>{
    if(!hasRendered){
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered=true;
    } 
    
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

onAuthStateChanged (auth, (user)=>{
    if(user)
    {
        store.dispatch(login(user.uid));
        store.dispatch(StartSetExpense()).then(()=>{
            renderApp();
            if(history.location.pathname=== '/'){
            history.push('/dashboard');
            }
        });
            
        console.log("loggedin");
    }
    else{
        store.dispatch(logOut());
        history.push('/');
        renderApp();
        console.log("loggedout");
    }
})