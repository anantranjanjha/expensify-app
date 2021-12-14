import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";

const Header = ({startLogOut}) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">CreateExpense</NavLink>
        <button onClick={startLogOut}>LogOut</button>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogOut: ()=> dispatch(startLogOut())
})


export default connect(undefined,mapDispatchToProps)(Header);