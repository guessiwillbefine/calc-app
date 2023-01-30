import React from "react";
import {Button, TextField} from '@mui/material';
import './style/style.css';
import {connect} from "react-redux";
import getExpressions from "../store/actions";

class RequestElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: props.body,
            updateData: this.props.updateData,
            amount: 3,
        }
    }

    updateInputValue(evt) {
        console.log(evt.target.value);
        const value = evt.target.value;
        const isValue = !isNaN(value);
        if (isValue) {
            this.setState({amount: value});
            return;
        }
        alert(value + 'is not a value');
    }

    render() {
        return (
            <div className="requestContainer">
                <Button variant={"outlined"}
                        size="large"
                        onClick={() => {
                            this.props.store.dispatch(
                                getExpressions(this.state.amount));
                        }
                        }>get example</Button>
                <TextField id="filled-basic"
                           variant="outlined"
                           size="small"
                           placeholder="amount"
                           label="input"
                           onChange={evt => this.updateInputValue(evt)}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    get: (payload) => dispatch(getExpressions(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestElement);