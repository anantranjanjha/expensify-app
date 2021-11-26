import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { setTextFilter, setStartDate ,setEndDate } from "../actions/filters";
import { SortByAmount ,SortByDate } from "../actions/filters";
import { connect } from "react-redux";

class ExpenseListFilters extends React.Component {

    state={
        calenderfocused: null,
    };
    onDatesChangeHandle =({startDate , endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
onFocusChange = (calenderfocused)=>{
    this.setState(()=> ({ calenderfocused }));
};

    render(){
        return(
            <div>
            <input type="text" 
            value={this.props.filters.text}
            onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value))
            }}
            />
            <select
            value = {this.props.filters.sortBy}
             onChange={(e)=>{
                (e.target.value==="date")?this.props.dispatch(SortByDate()):this.props.dispatch(SortByAmount());
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
             <DateRangePicker 
            startDateId="start_date_input"
            endDateId="end_date_input"
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChangeHandle}
            focusedInput={this.state.calenderfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            showClearDates={true}
            isOutsideRange={()=> false}
            />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        filters :state.filters,
    }
};

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;