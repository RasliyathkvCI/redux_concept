
const initialState = { value: 0 }

function appReducer(prevState = initialState, action) {

    if (action.type === "increment") {
        
       return {
            ...prevState,
            value: (prevState.value)+1
        }
    }

    else if (action.type === "decrement") {
        return {
            ...prevState,
            value: prevState.value - 1
        }
    }
    else
        return prevState;
}



const store = Redux.createStore(appReducer)

const state = store.getState();

store.subscribe(() => {
    document.getElementById('counter').innerText = store.getState().value;
});
document.getElementById('counter').innerText = state.value;

document.getElementById('increment').onclick = () => {
    store.dispatch({ type: 'increment' })

}
document.getElementById('decrement').onclick = () => {
    store.dispatch({ type: 'decrement' })
}

