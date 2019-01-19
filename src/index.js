// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import State from "./State";

import mockState from "./tests/mockState.json";
class Index extends Component {
    constructor(props) {
        super(props);
        this.states = mockState;
    }

    saveState(state) {
        console.log(state);
    }

    openChildState(state) {
        // Create new state from state.reducer and state.data
        let newState = Object.assign({}, this.state);
        let reducerFunction = new Function("state", state.inProgressReducer + ";return state");
        let reducedState = reducerFunction(newState.data);
        newState.states.push(reducedState);
        this.setState(newState);
    }

    saveName(e) {
        this.setState({
            name: e.target.value
        })
    }

    storeData(e) {
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

    openState() {
        console.log("STATE TO BE OPENED");
        this.props.openChildState(this.state);
    }

    /**
     * Recursively finds all the children states from the given state.
     * @param {*} result 
     * @param {*} state 
     */
    collectChildrenStates(result, state) {
        result.push(state);
        return state.states.reduce(this.collectChildrenStates.bind(this), result)
    }

    getNodes(result, state) {
        let lists = state.states.reduce(this.getNodes.bind(this), result);
        return lists;
    }

    collapse() {
        this.getNodes(this.state);
    }

    render() {

        return (<State state={this.states}
            saveName={this.saveName.bind(this)}
            storeData={this.storeData.bind(this)}
            storeReducer={this.storeReducer.bind(this)}

            saveReducer={this.saveReducer.bind(this)}
            saveState={this.saveState.bind(this)}

            openState={this.openState.bind(this)}
            collapse={this.collapse.bind(this)}/>);
    }

}

ReactDOM.render(<Index />, document.getElementById("index"));