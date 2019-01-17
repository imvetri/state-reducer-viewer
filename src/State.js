// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

import style from "./index.css";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.state.name,
            data: JSON.stringify(this.props.state.data, 4, null),
            reducers: this.props.state.reducers,
            inProgressReducer: ""
        }
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

    saveState() {
        this.setState({
            data: JSON.parse(this.state.data)
        })
    }

    updateState() {
        this.props.onSave(this.state);
    }

    render(){
        let reducers = this.state.reducers.map(reducer=> <input onClick={this.openState.bind(this)} className={style.smallWidth} disabled value={reducer}/>);

        return (
            <div className={style.box}>
                <label>Name</label>
                <input onChange={this.saveName.bind(this)} className={style.smallWidth} type="text" value={this.state.name}/>
                <label>Data</label>
                <textarea onChange={this.saveData.bind(this)} className={style.smallWidth} value={this.state.data}/>
                <label>Reducers</label>
                {reducers}
                <input placeholder="New reducers" onChange={this.storeReducer.bind(this)} className={style.smallWidth} type="text"/>
                <button onClick={this.saveReducer.bind(this)}>Add</button>
                <button onClick={this.saveState.bind(this)}>Save</button>
                <button onClick={this.updateState.bind(this)}>Update</button>
            </div>
        );
    }
}

export default State;