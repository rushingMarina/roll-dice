import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    static defaultProps = {
        number: 2
    }

    render() {
        let numStr;
        if (this.props.number === 1) {
            numStr = "Die fas fa-dice-one"
        } else if (this.props.number === 2) {
            numStr = "Die fas fa-dice-two"
        } else if (this.props.number === 2) {
            numStr = "Die fas fa-dice-two"
        } else if (this.props.number === 3) {
            numStr = "Die fas fa-dice-three"
        } else if (this.props.number === 4) {
            numStr = "Die fas fa-dice-four"
        } else if (this.props.number === 5) {
            numStr = "Die fas fa-dice-five"
        } else if (this.props.number === 6) {
            numStr = "Die fas fa-dice-six"
        }
        return (
            <div>
                <i className={`${numStr} ${this.props.rolling ? 'shaking' : ''}`}></i>
            </div>
        );
    }
}

export default Die;