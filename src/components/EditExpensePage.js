import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { EditExpenseHandle } from "../actions/expenses";
import { DeleteExpenseHandle } from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(EditExpenseHandle(props.expense.id, expense));
                    props.history.push('/');
                }} />
            <button onClick={(e) => {
                props.dispatch(DeleteExpenseHandle(props.expense.id))
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapstateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.description === props.match.params.id)
    };
};

export default connect(mapstateToProps)(EditExpensePage);