import React, { Component } from 'react';
import Die from "./Die";
import DieFaces from "./DieFaces";
import "./RollDice.css"

class RollDice extends Component {
    static defaultProps = {
        //associate diefaces with face within defaultProps
        face : DieFaces
    }
    constructor(props) {
        super(props);
        // Set initial state of game
        this.state={
            first: "one",
            second: "six",
            isRolling: false
        }
        // Bind this to the method in use
        this.roll = this.roll.bind(this);
    }

    // Roll method
    roll() {
        // Setting the state of the dice to rolling
        this.setState({ isRolling: true})
        // Timeout function to monitor changes after 1 sec
        setTimeout(() => {
            // Get Random die face
            let arr = this.props.face;
            let firstDie = arr[Math.floor(Math.random() * arr.length)];
            let secondDie = arr[Math.floor(Math.random() * arr.length)];
            this.setState({
                first: firstDie,
                second: secondDie,
                isRolling: false
            });
        }, 750);
    }
    render() {
        // Ternary Operations for animation and button
        let shake = (this.state.isRolling) ? "shake" : "";
        let unclickable = (this.state.isRolling) ? 
        <button className="RollDice-btn" onClick={this.roll} disabled>Rolling...</button> : 
        <button className="RollDice-btn" onClick={this.roll}>Roll Dice</button>
        return (
            <div>
                <div className="RollDice-table">
                    <div className={`${shake}`}>
                        <Die dice={this.state.first} />
                    </div>
                    <div className={`${shake}`}>
                        <Die dice={this.state.second} />
                    </div>
                </div>
                <div>
                    {unclickable}
                </div>
            </div>
        );
    }
}
export default RollDice;