export function simpleReducer(state, action){
    switch(action.type){
        
    }
    return state;
}
export function getStateUnderEdit(newState) {
    let stateUnderEdit;
    const traverse = (state) => {
        if (state.name === this.stateUnderEdit) {
            stateUnderEdit = state;
        }
        state.states.forEach(traverse);
    }

    newState.forEach(traverse);
    return stateUnderEdit;
}

export function storeName(e) {

    let newStateName = e.target.value;
    // Get new state.
    let newState = [Object.assign({}, this.states[0])];
    // Get state under edit.
    let stateUnderEdit = this.getStateUnderEdit(newState);

    stateUnderEdit.name = newStateName;

    this.setState({
        states: newState
    });
}

export function storeData(e) {

    // Get new state.
    let newState = [Object.assign({}, this.states[0])];
    // Get state under edit.
    let stateUnderEdit = this.getStateUnderEdit(newState);

    stateUnderEdit.data = JSON.parse(e.target.value);

    this.setState({
        states: newState
    });
}

export function saveReducer(e) {
    // Get new state.
    let newState = [Object.assign({}, this.states[0])];
    // Get state under edit.
    let stateUnderEdit = this.getStateUnderEdit(newState);
    let reducer = this.state.inProgressReducer;

    stateUnderEdit.reducers.push(reducer);

    let reducerFunction = new Function("state", reducer + ";return state");
    stateUnderEdit.states.push({
        data: reducerFunction(Object.assign({}, stateUnderEdit.data)),
        name: stateUnderEdit.name + "child",
        reducers: [],
        states: []
    });

    this.setState({
        states: newState
    });
}

export function saveState() {
    // Get new state.
    let newState = [Object.assign({}, this.states[0])];
    // Get state under edit.
    let stateUnderEdit = this.getStateUnderEdit(newState);


    this.setState(newState);
}

export function updateReducer(e) {
    // Get new state.
    let newState = [Object.assign({}, this.states[0])];
    // Get state under edit.
    let stateUnderEdit = this.getStateUnderEdit(newState);

    // Get reducer index.
    let reducerIndex = e.target.getAttribute("index");

    stateUnderEdit.reducers[reducerIndex] = e.target.value;

    stateUnderEdit.states.splice(reducerIndex, 1);

    let reducerFunction = new Function("state", e.target.value + ";return state");

    stateUnderEdit.states.push({
        data: reducerFunction(Object.assign({}, stateUnderEdit.data)),
        name: stateUnderEdit.name + "child",
        reducers: [],
        states: []
    });

    this.setState({
        states: newState
    });

}