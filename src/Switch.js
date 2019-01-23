import React, { Component } from "react";

import Switch from "react-switch";


export default class SwitchMode extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        this.props.switchMode(checked);
    }

    render() {
        return (
            <label htmlFor="normal-switch">
                <span>{this.state.checked ? "Edit mode" : "View mode"} </span>
                <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    className="react-switch"
                    id="normal-switch"
                />
            </label>
        );
    }
}