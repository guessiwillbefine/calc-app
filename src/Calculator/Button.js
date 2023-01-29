import React from "react";
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: props.symbol}
    }

    render() {
        return (
            <div>
                <button className="button" onClick={() => {
                    this.props.updateData(this.state.symbol);
                }}>
                    {this.state.symbol}
                </button>
            </div>
        );
    }
}