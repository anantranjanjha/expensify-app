import React from "react";
import SelectorExpense from "../selectors/expenses";
import Item from "./Items";
import { connect } from "react-redux";

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
                <span>No Expense</span>
            </div>
            ) : (
                props.expenses.map((expense) => (
                    <Item {...expense} key={expense.id} />
                ))
            )
        }
        </div>
    </div>
);

const mapstoreToProps = (state) => {
    return {
        expenses: SelectorExpense(state.expenses, state.filters),
    }
};

export default connect(mapstoreToProps)(ExpenseList);
