// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

import State from "./State";

import mockState from "./tests/mockState.json";
console.log(mockState)
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = mockState;
    }

    saveState(state) {
        console.log(state);
    }

    openChildState(state) {
        // Create new state from state.reducer and state.data
        let newState = Object.assign({}, this.state);
        let reducerFunction = new Function("state", state.inProgressReducer+";return state");
        let reducedState = reducerFunction(newState.data);
        newState.states.push(reducedState);
        this.setState(newState);
    }

    saveName(e) {
        this.setState({
            name: e.target.value
        })
    }

    saveData(e) {
        this.setState({
            data: e.target.value
        })
    }

    storeReducer(e) {
        this.setState({
            inProgressReducer: e.target.value
        })
    }

    saveReducer() {
        let reducer = this.state.inProgressReducer;
        let reducers = Array.from(this.state.reducers);
        reducers.push(reducer);
        this.setState({
            reducers
        });
    }

    saveState() {
        this.setState({
            data: JSON.parse(this.state.data)
        })
    }

    updateState() {
        this.props.onSave(this.state);
    }

    openState() {
        console.log("STATE TO BE OPENED");
        this.props.openChildState(this.state);
    }

    printState(state){
        console.log(state.data);
        state.states.forEach(this.printState.bind(this));
    }

    render(){

        this.printState(this.state);
        return (
            <State state={this.state}
                   onSave={this.saveState.bind(this)} 
                   saveData={this.saveData.bind(this)}
                   saveReducer={this.saveReducer.bind(this)}
                   storeReducer={this.storeReducer.bind(this)}
                   saveState={this.saveState.bind(this)}
                   updateState={this.updateState.bind(this)}
                   openState={this.openState.bind(this)}
                   saveName={this.saveName.bind(this)}/>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));