import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">CreateExpense</NavLink>
    </div>
)

export default Header;