import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history=createHistory();

const ReactRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage}></PublicRoute>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route >{NotFoundPage}</Route>
            </Switch>
        </div>
    </Router>
);


export default ReactRouter;