import React from "react";
export default class SimpleLabel extends React.Component {
    constructor(props) {
        super(props);
        this.props  = props;
    }

    render() {
        return (
            <div>
                {this.props.param}
                <br/>
            </div>
        );
    }
}