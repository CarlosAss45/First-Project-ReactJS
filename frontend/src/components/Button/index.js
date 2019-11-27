import React, { Component } from 'react';
import './styles.scss'

export default class ButtonPrimary extends Component {
    render() {
        return(
            <button className="btn__primary">{this.props.label}</button>
        ) 
    }
}
