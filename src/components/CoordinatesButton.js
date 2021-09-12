// Code CoordinatesButton Component Here

import React, {Component } from 'react'; 

export default class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        let coordX = event.clientX
        let coordY = event.clientY

        let coordArray = [coordX,coordY]

        this.setState({
            coordinates: this.props.onReceiveCoordinates(coordArray)
        })
    }

    render(){
        return <button onClick={this.handleClick}> Get Coordinates </button>
    }
}