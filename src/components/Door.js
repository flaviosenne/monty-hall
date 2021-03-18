import React, { Component } from 'react'
import Gift from './Presents'
import '../styles/door.css'

export default class Door extends Component {
    number = this.props.number
    hasGift = this.props.hasGift

    state = {
        open: false,
        selected: false
    }


    render() {
        return (
            <div className="door-area">
                <div className={this.state.selected && !this.state.open ? "door-frame selected" : "door-frame"}>
                    {this.hasGift && this.state.open ? <Gift /> : ''}

                </div> 
                <div className={this.state.open ? "door open": "door"} onClick={() => this.setState({ selected: !this.state.selected})}>
                    <div className={this.state.selected ? "number selected" : "number"}>{this.number}</div>
                    <div onClick = {() => this.setState({open: true})}className={this.state.selected ? "knob selected" : "knob"}></div>
                </div>
            </div>
        )
    }


}