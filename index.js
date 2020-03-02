window.onload = function() {

    // get all the dom element from the html
    var counterEle = document.getElementById('counter');
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');

    //adding event listener to change the state
    incrementButton.addEventListener("click", function() {
        store.dispatch(actionForStore.increment());        
    });
    decrementButton.addEventListener("click", function() {
        store.dispatch(actionForStore.decrement());
    });

    /// update the counter in the HTML DOM whenever state is changed
    function updateCounter() {
        counterEle.innerHTML = store.getState().counter;
    }
    
    //initial state for the counter to be used in the reducer
    var initialState = {
        counter: 0
    }

    //adding actions for the store 
    var actionForStore =  {
        increment: function () {
            return {
                type: "INCREMENT"
            }
        },
        decrement: function() {
            return {
                type: "DECREMENT"
            }
        }
    }

    //create reducer
    function reducerMain(state=initialState, action) {
        switch(action.type) {
            case "INCREMENT":
                                state.counter++;
                                return state;

            case "DECREMENT":   state.counter--;
                                return state;

        }
        return state;
    }

    //create the store and subscribe to update the Counter DOM
    const store = Redux.createStore(reducerMain);
    const updateCounterListener = store.subscribe(updateCounter);
    counterEle.innerHTML = store.getState().counter;
}