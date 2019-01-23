// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import State from "./State";
import SwitchMode from "./Switch";

import { createStore } from "redux";  

import { simpleReducer, getStateUnderEdit, storeName, storeData, saveReducer, saveState, updateReducer } from "./reducers/index";


import { store } from "./store";

class StateReducerViewer extends Component {
    constructor(props) {
        super(props);
        this.states = store.getState();
        this.stateUnderEdit = "";
        this.nameUnderEdit = "";
        this.state = { checked: false };
        this.getStateUnderEdit = getStateUnderEdit.bind(this);
    }

    storeReducer(e) {
        this.setState({
            inProgressReducer: e.target.value
        })
    }

    syncCurrentState(e) {
        if (e.target.getAttribute("statename")) {
            console.log(e.target.getAttribute("statename"));
            this.stateUnderEdit = e.target.getAttribute("statename");
        }
    }

    switchMode(checked) {
        this.setState({ checked });
    }

    render() {

        return (
            <div>
                <SwitchMode switchMode={this.switchMode.bind(this)}/>
                <State
                    state={this.states}
                    storeName={storeName.bind(this)}
                    storeData={storeData.bind(this)}
                    storeReducer={this.storeReducer.bind(this)}
                    syncCurrentState={this.syncCurrentState.bind(this)}
                    saveReducer={saveReducer.bind(this)}
                    saveState={saveState.bind(this)}
                    updateReducer={updateReducer.bind(this)}
                    viewMode={this.state.checked}
                />
            </div>
        );
    }

}

ReactDOM.render(<StateReducerViewer />, document.getElementById("index"));

export default StateReducerViewer;