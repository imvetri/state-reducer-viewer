// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h3>State reducer viewer</h3>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));