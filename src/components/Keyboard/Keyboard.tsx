import React, { Component } from 'react';
import RegularKey from '../RegularKey/RegularKey';
import { firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow } from '../../Keys'
import './Keyboard.css';
import DoubleKey from '../DoubleKey/DoubleKey';
import KeyX15 from '../KeyX15/KeyX15';
import TripleKey from '../TripleKey/TripleKey';
import SpacebarKey from '../SpacebarKey/SpacebarKey';
import cherryMxBlackImage from "../../images/CHERRYMX_BLACK.png"
import cherryMxRedImage from "../../images/CHERRYMX_RED.png"
import cherryMxBrownImage from "../../images/CHERRYMX_BROWN.png"
import cherryMxSilentBlackImage from "../../images/CHERRYMX_SILENT_BLACK.png"
import cherryMxSilentRedImage from "../../images/CHERRYMX_SILENT_RED.png"
import cherryMxSpeedSilverImage from "../../images/CHERRYMX_SPEED_SILVER.png"
import cherryMxBlueImage from "../../images/CHERRYMX_BLUE.png"
const cherryMXBlack = require("../../sound/CHERRYMX_BLACK.wav");
const cherryMXBrown = require("../../sound/CHERRYMX_BROWN.wav");
const cherryMXBlue = require("../../sound/CHERRYMX_BLUE.wav");
const cherryMXRed = require("../../sound/CHERRYMX_RED.wav");
const cherryMXSilentRed = require("../../sound/CHERRYMX_SILENT_RED.wav");
const cherryMXSilentBlack = require("../../sound/CHERRYMX_SILENT_BLACK.wav");
const cherryMXSpeedSilver = require("../../sound/CHERRYMX_SPEED_SILVER.wav");


type State = {
    activeKey: string
}

export default class Keyboard extends Component<any, State> {
    switchType = cherryMXBrown
    allowed = true
    isMobile = false
    constructor(props: any) {
        super(props)
        if (/Mobi/.test(navigator.userAgent)) this.isMobile = true
        new Audio(cherryMXBlack)
        new Audio(cherryMXBrown)
        new Audio(cherryMXBlue)
        new Audio(cherryMXBlack)
        new Audio(cherryMXRed)
        new Audio(cherryMXSilentRed)
        new Audio(cherryMXSilentBlack)
        new Audio(cherryMXSpeedSilver)
        this.state = { activeKey: '' }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.keyPress)
        document.addEventListener("keyup", this.keyUp)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPress)
        document.removeEventListener("keyup", this.keyUp)
    }
    keyPress = (event: any) => {
        if (event.repeat != undefined)
            this.allowed = !event.repeat;

        if (!this.allowed) return;
        this.allowed = false;
        new Audio(this.switchType).play()
        this.setState({ activeKey: event.code })
    }
    keyUp = (event: any) => {
        this.allowed = true;
        this.setState({ activeKey: '' })
    }
    render = () => {
        return <>
            {this.isMobile && <div className="mobileBanner"><h3>Please visit from desktop device!</h3></div>}
            {this.renderCherryMXSwitches()}
            <div className="keyboard">
                {this.renderFirstRow()}
                {this.renderSecondRow()}
                {this.renderThirdRow()}
                {this.renderFourthRow()}
                {this.renderFifthRow()}
                {this.renderSixthRow()}
            </div>
            <h1 style={{ color: '#e0005b', marginBottom: '20px' }}>GMK LASER</h1>
            <div className="divider" />
        </>
    }

    onSwitchClick = (switchType: string) => {
        this.switchType = switchType
        this.forceUpdate()
    }

    renderCherryMXSwitches = () => {
        return <div className="switchesWrapper">
            <ul className="cherryMxSwitches">
                <li onClick={() => this.onSwitchClick(cherryMXRed)}
                    className={this.switchType === cherryMXRed ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxRedImage} alt="red" />
                    <div>CHERRY MX Red </div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXBlack)}
                    className={this.switchType === cherryMXBlack ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxBlackImage} alt="black" />
                    <div>CHERRY MX Black</div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXBrown)}
                    className={this.switchType === cherryMXBrown ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxBrownImage} alt="brown" />
                    <div>CHERRY MX Brown</div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXBlue)}
                    className={this.switchType === cherryMXBlue ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxBlueImage} alt="blue" />
                    <div>CHERRY MX Blue</div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXSilentRed)}
                    className={this.switchType === cherryMXSilentRed ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxSilentRedImage} alt="silentRed" />
                    <div>CHERRY MX Silent Red</div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXSilentBlack)}
                    className={this.switchType === cherryMXSilentBlack ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxSilentBlackImage} alt="silentBlack" />
                    <div>CHERRY MX Silent Black</div>
                </li>
                <li onClick={() => this.onSwitchClick(cherryMXSpeedSilver)}
                    className={this.switchType === cherryMXSpeedSilver ? 'selected' : ''}>
                    <div className="highlighter" />
                    <img src={cherryMxSpeedSilverImage} alt="speedSilver" />
                    <div>CHERRY MX Speed Silver</div>
                </li>
            </ul>
        </div>
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