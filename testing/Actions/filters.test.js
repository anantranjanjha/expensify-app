import { setTextFilter, SortByAmount, SortByDate, setStartDate, setEndDate } from "../../src/actions/filters";

test('Testing setTextFilter', () => {
    const set = setTextFilter('hello');
    expect(set).toEqual({
        type: 'TEXT_ASSIGN',
        text: {
            text: 'hello',
        }
    });
});

test('Testing sortByAmount', () => {
    const set = SortByAmount();
    expect(set).toEqual({
        type: 'SORTBY_AMOUNT',
        value: {
            sortBy: 'Amount',
        }
    });
});

test('Testing sortByDate', () => {
    const set = SortByDate();
    expect(set).toEqual({
        type: 'SORTBY_DATE',
        value: {
            sortBy: 'Date',
        }
    });
});

test('Testing setStartDate', () => {
    const set = setStartDate(20);
    expect(set).toEqual({
        type: 'START_DATE',
        value: 20
    });
});

test('Testing setStartDate', () => {
    const set = setEndDate(20);
    expect(set).toEqual({
        type: 'END_DATE',
        value: 20
    });
});