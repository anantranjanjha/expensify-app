import React from "react"
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { AddExpenseHandle } from "../actions/expenses";


const AddExpensePAge = (props) => (
    <div>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(AddExpenseHandle(expense));
                props.history.push('/');
            }
            }
        />
    </div>
);


export default connect()(AddExpensePAge);