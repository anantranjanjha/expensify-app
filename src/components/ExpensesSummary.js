import React, { useState } from "react";
import SelectorExpense from "../selectors/expenses";
import ExpenseTotal from "../selectors/expense-total";
import { connect } from "react-redux";
import numeral from "numeral";

const ExpensesSummary = (props) =>{
    const expenseTotal=numeral(ExpenseTotal(props.expenses)/100)
            .format('$0,0.00');
    return(
        <div>
        <h1>Viewing {props.expenses.length} expenses totalling {expenseTotal}</h1>
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