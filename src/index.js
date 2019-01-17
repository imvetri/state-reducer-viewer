// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

import style from "./index.css";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Default",
            data: {
                status: "Anonymouse"
            },
            reducers: [],
            inProgressReducer: ""
        }
    }

    storeReducer(e) {
        this.setState({
            inProgressReducer: e.target.value
        })
    }

    saveReducer(){
        let reducer = this.state.inProgressReducer;
        let reducers = Array.from(this.state.reducers);
        reducers.push(reducer);
        this.setState({
            reducers
        });
    }

    render(){
        let reducers = this.state.reducers.map(reducer=> <input className={style.smallWidth} disabled value={reducer}/>);

        return (
            <div className={style.box}>
                <label>Name</label>
                <input className={style.smallWidth} type="text"/>
                <label>Data</label>
                <textarea className={style.smallWidth} />
                <label>Reducers</label>
                {reducers}
                <input placeholder="New reducers" onChange={this.storeReducer.bind(this)} className={style.smallWidth} type="text"/>
                <button onClick={this.saveReducer.bind(this)}>Add</button>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));