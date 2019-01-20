// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import State from "./State";

import mockState from "./tests/mockState.json";
class Index extends Component {
    constructor(props) {
        super(props);
        this.states = mockState;
        this.stateUnderEdit = "";
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
        console.log(e.target.value);
        this.setState({
            inProgressReducer: e.target.value
        })
    }

    getStateUnderEdit(newState) {
        let stateUnderEdit;
        const traverse=(state)=>{
            if(state.name === this.stateUnderEdit){
                stateUnderEdit = state;
            }
            state.states.forEach(traverse);
        }

        newState.forEach(traverse);
        return stateUnderEdit;
    }

    saveReducer() {
        // Get new state.
        let newState = [Object.assign({}, this.states[0])];
        // Get state under edit.
        let stateUnderEdit = this.getStateUnderEdit(newState);
        let reducer = this.state.inProgressReducer;
        
        stateUnderEdit.reducers.push(reducer);

        let reducerFunction = new Function("state", reducer+";return state");
        stateUnderEdit.states.push({
            data: reducerFunction(Object.assign({},stateUnderEdit.data)),
            name:stateUnderEdit.name+"child",
            reducers:[],
            states:[]
        });
        
        this.setState({
            states: newState
        });
    }

    saveState() {
        this.setState({
            data: JSON.parse(this.state.data)
        })
    }

    syncCurrentState(e) {
        if(e.target.getAttribute("statename")){
            this.stateUnderEdit =e.target.getAttribute("statename");
        }
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

    render() {

        return (<State state={this.states}
            saveName={this.saveName.bind(this)}
            storeData={this.storeData.bind(this)}
            storeReducer={this.storeReducer.bind(this)}
            syncCurrentState={this.syncCurrentState.bind(this)}
            saveReducer={this.saveReducer.bind(this)}
            saveState={this.saveState.bind(this)}/>);
    }

}

ReactDOM.render(<Index />, document.getElementById("index"));