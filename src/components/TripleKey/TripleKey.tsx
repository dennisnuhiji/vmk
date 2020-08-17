import React, { Component } from 'react';
import './TripleKey.css';

type Props = {
    key: string,
    type: string,
    label: string
    className?: string,
    textColor?: string,
    keycapColor?: string,
    keyColor?: string,
    left?: string
}

export default class TripleKey extends Component<Props, any> {
    render = () => {
        const { className, keycapColor, keyColor, textColor, label, left } = this.props
        return <span key={this.props.key} className={"tripleKey " + className} style={{ backgroundColor: keyColor, color: textColor }}>
            <span className="tripleKeycap" style={{ backgroundColor: keycapColor, left }}>{label}</span>
        </span>
    }
}