import React from "react";
import {Button} from "@mui/material";
export default class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: props.symbol}
    }

    render() {
        return (
            <div>
                <Button variant={this.state.symbol === '=' ? "outlined" : "text"}
                        color={this.state.symbol === '=' ? "info" : "success" }
                        onClick={() => {
                    this.props.updateData(this.state.symbol);
                }}>
                    {this.state.symbol}
                </Button>
            </div>
        );
    }
}