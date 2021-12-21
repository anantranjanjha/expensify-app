import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectorExpense from "../selectors/expenses";
import ExpenseTotal from "../selectors/expense-total";
import { connect } from "react-redux";
import numeral from "numeral";

const ExpensesSummary = (props) =>{
    const expenseTotal=numeral(ExpenseTotal(props.expenses)/100)
            .format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses totalling <span>{expenseTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};


const mapstoreToProps = (state) => {
    return {
        expenses: SelectorExpense(state.expenses, state.filters),
    }
};

const ConnectedExpenseSummary=connect(mapstoreToProps)(ExpensesSummary)

export default ConnectedExpenseSummary;