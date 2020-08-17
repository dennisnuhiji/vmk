import React, { Component } from 'react';
import './KeyX15.css';

type Props = {
    key: string,
    type: string,
    label: string,
    className?: string,
    textColor?: string,
    keycapColor?: string,
    keyColor?: string,
    left?: string
}

export default class KeyX15 extends Component<Props, any> {
    render = () => {
        const { className, keycapColor, keyColor, textColor, label, left } = this.props
        return <span key={this.props.key} className={"superKey " + className} style={{ backgroundColor: keyColor, color: textColor }}>
            <span className="x15keycap" style={{ backgroundColor: keycapColor, left }}>{label}</span>
        </span>
    }
}