import React from "react";
import SelectorExpense from "../selectors/expenses";
import Item from "./Items";
import { connect } from "react-redux";

export const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => (
            <Item {...expense} key={expense.id} />
        ))}
    </div>
);

const mapstoreToProps = (state) => {
    return {
        expenses: SelectorExpense(state.expenses, state.filters),
    }
};

export default connect(mapstoreToProps)(ExpenseList);
