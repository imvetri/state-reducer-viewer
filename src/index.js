// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

import State from "./State";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Default",
            data: {
                status: "Anonymous"
            },
            reducers: []
        }
    }

    saveState(state) {
        console.log(state);
    }

    render(){
        return (
            <State state={this.state} onSave={this.saveState.bind(this)}/>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));