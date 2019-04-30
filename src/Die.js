import React, { Component } from 'react';

class Die extends Component {
    render() {
        return <i className={`fas fa-dice-${this.props.dice}`}></i>
    }
}
export default Die;