import React, { Component } from 'react';
import RegularKey from '../RegularKey/RegularKey';
import { firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow } from '../../Keys'
import './Keyboard.css';
import DoubleKey from '../DoubleKey/DoubleKey';
import KeyX15 from '../KeyX15/KeyX15';
import TripleKey from '../TripleKey/TripleKey';
import SpacebarKey from '../SpacebarKey/SpacebarKey';
const keySound = require("../../sound/keypress.mp3");
type State = {
    activeKey: string
}
export default class Keyboard extends Component<any, State> {
    keyAudio:any
    constructor(props: any) {
        super(props)
        this.state = { activeKey: '' }
    }
    componentDidMount() {
        this.keyAudio = 
        document.addEventListener("keydown", this.keyPress)
        document.addEventListener("keyup", this.keyUp)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPress)
        document.removeEventListener("keyup", this.keyUp)
    }
    keyPress = (event: any) => {
        new Audio(keySound).play()
        this.setState({ activeKey: event.code })
    }
    keyUp = (event: any) => {
        this.setState({ activeKey: '' })
    }
    render = () => {
        return <>
            <h1 style={{ color: '#e0005b' }}>GMK LASER</h1>
            <div className="divider" />
            <div className="keyboard">
                {this.renderFirstRow()}
                {this.renderSecondRow()}
                {this.renderThirdRow()}
                {this.renderFourthRow()}
                {this.renderFifthRow()}
                {this.renderSixthRow()}
            </div>
        </>
    }

    renderFirstRow = () => {
        const { activeKey } = this.state
        return firstRow.map(key => <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />)
    }
    renderSecondRow = () => {
        const { activeKey } = this.state
        return secondRow.map(key => {
            if (key.type === 'normal')
                return <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'double')
                return <DoubleKey {...key} className={activeKey === key.key ? 'active' : ''} />

            return ''
        })
    }
    renderThirdRow = () => {
        const { activeKey } = this.state
        return thirdRow.map(key => {
            if (key.type === 'normal')
                return <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'x1.5')
                return <KeyX15 {...key} className={activeKey === key.key ? 'active' : ''} />

            return ''
        })
    }
    renderFourthRow = () => {
        const { activeKey } = this.state
        return fourthRow.map(key => {
            if (key.type === 'normal')
                return <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'double')
                return <DoubleKey {...key} className={activeKey === key.key ? 'active' : ''} />

            return ''
        })
    }
    renderFifthRow = () => {
        const { activeKey } = this.state
        return fifthRow.map(key => {
            if (key.type === 'normal')
                return <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'double')
                return <DoubleKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'triple')
                return <TripleKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'x1.5')
                return <KeyX15 {...key} className={activeKey === key.key ? 'active' : ''} />

            return ''
        })
    }
    renderSixthRow = () => {
        const { activeKey } = this.state
        return sixthRow.map(key => {
            if (key.type === 'normal')
                return <RegularKey {...key} className={activeKey === key.key ? 'active' : ''} />
            if (key.type === 'spacebar')
                return <SpacebarKey {...key} className={activeKey === key.key ? 'active' : ''} />

            return ''
        })
    }
}