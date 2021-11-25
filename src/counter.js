import { createStore } from "redux";

 const IncreseHandle= ({incrementBy = 1}={}) =>({
    type : 'INCREMENT',
    incrementBy
 });

 const DecreseHandle= ({DecrementBy = 1}={}) =>({
    type : 'DECREMENT',
    DecrementBy
 });

 const ResetHandle= () =>({
    type : 'RESET',
 });

 const SetHandle= ({SetBy}={}) =>({
     type : 'SET',
     SetBy
 });

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.DecrementBy }
        case 'SET' :
            return {count : action.SetBy}
        case 'RESET':
            return { count: 0 }
        default:
            return state;

    }
});



store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(IncreseHandle({incrementBy : 5}));

store.dispatch(IncreseHandle());

store.dispatch(DecreseHandle());


store.dispatch(ResetHandle());

store.dispatch(SetHandle({SetBy :100}));




