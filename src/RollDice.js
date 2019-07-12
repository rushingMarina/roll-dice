import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';


class RollDice extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 2,
            isRolling: false
        }
        this.Roll = this.Roll.bind(this);
    }

    Roll() {
        let num1 = Math.floor(Math.random() * 6)+1;
        let num2 = Math.floor(Math.random() * 6)+1;
        this.setState({num1 : num1, num2 : num2, isRolling: true});

        //wait 1 second then set isRolling to false
        setTimeout(() => {
            this.setState({isRolling:false});
        }, 1000);

    }

    render() {
        return (
            <div className="container">
                <div className='dice'>
                    <Die number={this.state.num1} rolling={this.state.isRolling}/>
                    <Die number={this.state.num2} rolling={this.state.isRolling}/>
                </div>
                <button className="myButton" onClick={this.Roll} disabled={this.state.isRolling}>
                   {this.state.isRolling ? 'Rolling...' : "Roll the dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;