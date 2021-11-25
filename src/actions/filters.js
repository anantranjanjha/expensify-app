export const setTextFilter = ((value = "") => ({
    type: "TEXT_ASSIGN",
    text: {
        text: value,
    }
}));

export const SortByAmount = (() => ({
    type: "SORTBY_AMOUNT",
    value: {
        sortBy: "Amount",
    }
}));

export const SortByDate = (() => ({
    type: "SORTBY_DATE",
    value: {
        sortBy: "Date",
    }
}));

export const setStartDate = ((value = undefined) => ({
    type: "START_DATE",

    value,
}));

export const setEndDate = ((value = undefined) => ({
    type: "END_DATE",
    value,

}));