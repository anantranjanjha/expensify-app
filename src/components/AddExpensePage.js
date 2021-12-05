import React from "react"
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { StartAddExpense } from "../actions/expenses";


const AddExpensePAge = (props) => (
    <div>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(StartAddExpense(expense));
                props.history.push('/');
            }
            }
        />
    </div>
);


export default connect()(AddExpensePAge);