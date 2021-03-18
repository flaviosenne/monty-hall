import React, { Component } from 'react'
import Gift from './Presents'
import '../styles/door.css'

export default class Door extends Component {
    number = this.props.number
    hasGift= this.props.hasGift
    
    state ={
    open: false,
    selected: false
    }
    componentDidUpdate(){
        console.log(this.selected)
    }
    render(){
        return(
            <div className = "door-area">
                <div className={ this.state.selected ? "door-frame selected": "door-frame"}>
                    {this.hasGift && this.state.open ? <Gift />: ''}
                    
                </div>
                <div className= "door" onClick ={e => this.setState.selected = !this.state.selected}>
                    <div className="number">{this.number}</div>
                    <div className="knob"></div>
                </div>
            </div>
        )
    }


}