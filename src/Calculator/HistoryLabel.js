import React from "react";
import SimpleLabel from "./SimpleLabel";

export default class HistoryLabel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    preRender() {
        let res = [];
        for (let i = 0; i < this.props.history.length-1; i++) {
            const val = this.props.history[i];
            res.push( <SimpleLabel param={val}/> );
        }
        res.push(<div>--------------</div>);
        res.push( <SimpleLabel param={this.props.history[this.props.history.length-1]}/> );
        res.push(<div>--------------</div>);
        return res;
    }

    render() {
        return (
            <div> {this.preRender()} </div>
        );
    }
}