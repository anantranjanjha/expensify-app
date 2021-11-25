import  moment  from "moment";

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

export default (state = filterReducerDefault, action) => {
    switch (action.type) {
        case "TEXT_ASSIGN":
            return {
                ...state,
                ...action.text
            }
        case "SORTBY_DATE":
            return {
                ...state,
                ...{ sortBy: "date" }
            }
        case "SORTBY_AMOUNT":
            return {
                ...state,
                ...{ sortBy: "amount" }
            }
        case "START_DATE":
            return {
                ...state,
                startDate: action.value
            }
        case "END_DATE":
            return {
                ...state,
                endDate: action.value
            }
        default:
            return state;
    }
}
