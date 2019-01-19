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

    render(){
        let reducers = this.props.state.reducers.map(reducer=> <input onClick={this.props.openState} className={style.smallWidth} value={reducer}/>);

        return (
            <div className={style.box}>
                <button className={style.block}onClick={this.props.closeState}>X</button>
                <label>Name</label>
                <input onChange={this.props.saveName} className={style.smallWidth} type="text" value={this.props.state.name}/>
                <label>Data</label>
                <textarea onChange={this.props.saveData} className={style.smallWidth} value={JSON.stringify(this.props.state.data)}/>
                <label>Reducers</label>
                {reducers}
                <input placeholder="New reducers" onChange={this.props.storeReducer} className={style.smallWidth} type="text"/>
                <button onClick={this.props.saveReducer}>Add</button>
                <button onClick={this.props.saveState}>Save</button>
            </div>
        );
    }
}

export default State;