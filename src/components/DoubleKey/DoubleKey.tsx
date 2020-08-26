import React, { Component } from 'react';
import './DoubleKey.css';

type Props = {
    key: string,
    type: string,
    label: string
    className?: string,
    textColor?: string,
    keycapColor?: string,
    keyColor?: string,
    left?: string,
    fontSize?: string
}

export default class DoubleKey extends Component<Props, any> {
    render = () => {
        const { className, keycapColor, keyColor, textColor, label, left, fontSize } = this.props
        return <span key={this.props.key} className={"doubleKey " + className} style={{ backgroundColor: keyColor, color: textColor }}>
            <span className="doubleKeycap" style={{ backgroundColor: keycapColor, left, fontSize }} >{label}</span>
        </span>
    }
}