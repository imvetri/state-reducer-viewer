// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

import style from "./index.css";

class State extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        

        let getState = (state, index) => {

            let children= <ul>{state.states.map(getState)}</ul>

            if(this.props.viewMode) {
                let reducers = state.reducers.map((reducer,index)=> <input onChange={this.props.updateReducer} index={index} className={style.smallWidth} value={reducer}/>);
                return (
                    <li onMouseEnter={this.props.syncCurrentState} statename={state.name} className={style.box} index={index}>
                        <label>Name</label>
                        <input onChange={this.props.storeName} className={style.smallWidth} type="text" value={state.name}/>
                        <label>Data</label>
                        <textarea onChange={this.props.storeData} className={style.smallWidth} value={JSON.stringify(state.data)}/>
                        <label>Reducers</label>
                        {reducers}
                        <input  onChange={this.props.storeReducer} placeholder="New reducers" className={style.smallWidth} type="text"/>
                        <button onClick={this.props.saveReducer}>Add</button>
                        <button onClick={this.props.saveState}>Save</button>
                        {children}
                    </li>
                );
            }
            else {
                return (
                    <li onMouseEnter={this.props.syncCurrentState} statename={state.name} className={style.box} index={index}>
                        <input className={style.smallWidth} type="text" value={state.name}/>
                        {children}
                    </li>
                );
            }

        }
        return (
            <ul>
                {this.props.state.map(getState)}
            </ul>
        )
    }
}

export default State;