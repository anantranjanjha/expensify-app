import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';


const ReactRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true}>{ExpenseDashboardPage}</Route>
                <Route path="/create" component={props => <AddExpensePage {...props} />} />
                <Route path="/edit/:id" component={props => <EditExpensePage {...props} />} />
                <Route path="/help" >{HelpPage}</Route>
                <Route >{NotFoundPage}</Route>
            </Switch>
        </div>
    </BrowserRouter>
);


export default ReactRouter;