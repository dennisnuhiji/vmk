import React, { Component } from 'react';
import './SpacebarKey.css';

type Props = {
    key: string,
    type: string,
    label: string,
    className: string
}

export default class SpacebarKey extends Component<Props, any> {
    render = () => {
        return <span key={this.props.key} className={"spacebarKey " + this.props.className}>
            <span className="spaceKeycap" />
        </span>
    }
}