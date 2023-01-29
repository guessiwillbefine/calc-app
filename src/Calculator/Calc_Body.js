import React from "react";
import './style.css';
import Button from './Button';
import HistoryLabel from './HistoryLabel'
import StatementLabel from './statement-label';
import RequestElement from './RequestElement'

class CalcBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            history: [],
        };
        this.expressionMatcher = /^(-?\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)$/;
    }

    cutZero(number) {
        const arr = /\./.exec(number);
        return arr === null || /0+/.test(arr[2]) ? 0 : 2;
    }

    evaluate(expression) {
        const arr = this.expressionMatcher.exec(expression);
        const arg1 = arr[1] + (arr[2] === undefined ? '' : arr[2]);
        const arg2 = arr[4] + (arr[5] === undefined ? '' : arr[5]);
        let number;
        const mathSymbol = arr[3];
        switch (mathSymbol) {

            case '+' : {
                number = Number(parseFloat(arg1) + parseFloat(arg2));
                const cutNumber = number.toFixed(this.cutZero(number));
                this.appendHistory(expression + ' = ' + cutNumber)
                return cutNumber;
            }

            case '-' : {
                number = Number(parseFloat(arg1) - parseFloat(arg2));
                const cutNumber = number.toFixed(this.cutZero(number));
                this.appendHistory(expression + ' = ' + cutNumber)
                return cutNumber;
            }

            case '/' : {
                number = Number(parseFloat(arg1) / parseFloat(arg2));
                const cutNumber = number.toFixed(this.cutZero(number));
                this.appendHistory(expression + ' = ' + cutNumber)
                return cutNumber;
            }

            case '*' : {
                number = Number(parseFloat(arg1) * parseFloat(arg2));
                const cutNumber = number.toFixed(this.cutZero(number));
                this.appendHistory(expression + ' = ' + cutNumber)
                return cutNumber;
            }
            default  :
                return undefined;
        }
    }

    appendHistory = (value) => {
        const newHistory = this.state.history;
        newHistory.push(value);
        this.setState({history: newHistory});
    }

    updateData = (value) => {
        let result;
        const current = this.state.body;

        if (isNaN(value) && current === '') {
            return;
        }

        if (this.expressionMatcher.test(value)) { //если передан сразу пример (1+2)
            this.evaluate(value);
            this.setState({body: ''})
            return;
        }

        if (value === '=' && this.expressionMatcher.test(current)) { //если передано '=' и пример уже полон
            result = this.evaluate(current);
            this.setState({body: result})

        } else if (/[+\-*/]/.test(value)) { //если передан символ мат. операции
            if (/^(-?\d+(\.\d+)?)[+\-*/]$/.test(current)) { // если пример не дописан (1+)
                const toAppend = current.slice(0, -1).concat(value);
                this.setState({body: toAppend})

            } else if (!this.expressionMatcher.test(current)) {
                const toAppend = current + value;
                this.setState({body: toAppend});
            }

        } else if (value !== "=") {
            const toAppend = current + value;
            this.setState({body: toAppend})
        }
    }

    render() {
        return (
            <div>
                <HistoryLabel history={this.state.history}/>
                <StatementLabel statement={this.state.body}/>
                <div className="button-grid">
                    <Button symbol='1' updateData={this.updateData}/>
                    <Button symbol='2' updateData={this.updateData}/>
                    <Button symbol='3' updateData={this.updateData}/>
                    <Button symbol='4' updateData={this.updateData}/>
                    <Button symbol='5' updateData={this.updateData}/>
                    <Button symbol='6' updateData={this.updateData}/>
                    <Button symbol='7' updateData={this.updateData}/>
                    <Button symbol='8' updateData={this.updateData}/>
                    <Button symbol='9' updateData={this.updateData}/>
                    <Button symbol='0' updateData={this.updateData}/>
                    <Button symbol='+' updateData={this.updateData}/>
                    <Button symbol='-' updateData={this.updateData}/>
                    <Button symbol='/' updateData={this.updateData}/>
                    <Button symbol='*' updateData={this.updateData}/>
                    <Button symbol='=' updateData={this.updateData}/>
                </div>
                <RequestElement body={this.state.body} updateData={this.updateData}/>
            </div>
        );
    }
}

export default CalcBody;