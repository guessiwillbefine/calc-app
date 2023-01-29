import React from "react";

export default class RequestElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: props.body,
            updateData: this.props.updateData,
            amount: 3,
        }
    }


    fetchExpressions = () => {
        const URI = 'http://192.168.0.195:8080/math/examples?count=' + this.state.amount;
        fetch(URI, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                    data.forEach(exp => {
                        this.setState({body: exp});
                        this.state.updateData(exp);
                    })
                }
            );
    }

    updateInputValue(evt) {
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
            <div>
                <input type={"button"} className="button"
                       onClick={
                           () => {
                               this.fetchExpressions()
                           }
                       }
                       value={"get example"}/>
                <input className="input" onChange={evt => this.updateInputValue(evt)}/>
            </div>
        );
    }
}