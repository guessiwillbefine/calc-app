import React from "react";

export default class StatementLabel extends React.Component {
    constructor(props) {
        super(props);
        this.props  = props;
    }

    render() {
        return (
            <div>
                <h2>{this.props.statement}</h2>
            </div>
        );
    }
}