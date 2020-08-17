import React, { Component } from 'react';
import './RegularKey.css';

type Props = {
    key: string,
    type: string,
    label: string,
    className?: string,
    textColor?: string,
    keycapColor?: string,
    keyColor?: string,
    fontSize?: string
}

export default class RegularKey extends Component<Props, any> {
    render = () => {
        const { className, keycapColor, keyColor, textColor, label, fontSize } = this.props
        return <span key={this.props.key} className={'regularKey ' + className} style={{ backgroundColor: keyColor, color: textColor}}>
            <span className="keycap" style={{ backgroundColor: keycapColor, fontSize }}>{label}</span>
        </span>
    }
}