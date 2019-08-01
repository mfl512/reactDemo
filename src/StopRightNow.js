import React from "react";
import Fire from "./fire";
import PropTypes from "prop-types";
import "./StopRightNow.css";

export default class StopRightNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cycleFireCount: [],
            number: 33
        }
    }
    static propType = {
        number: PropTypes.number
    }

    handleClickStart = () => {
        this.props.startRunNumber();
    }

    handleClickStop = () => {
        this.props.stopRunNumber();
    }

    handleResetRunNumber = () => {
        this.setState({ cycleFireCount: [] })
        this.props.restartRunNumber();
    }

    handleAddFireCount = () => {
        if (!this.newRound) return;
        this.newRound = false;
        let cycleFireArray = [];
        for (let i = 0; i < 40; i++) {
            cycleFireArray.push({ index: i, left: Math.random() * 80, top: Math.random() * 90 })
        }
        this.timing = setInterval(
            () => {
                if (cycleFireArray.length > 0) {
                    let newFire = cycleFireArray.shift();
                    let cycleFireCount = this.state.cycleFireCount;
                    cycleFireCount.push(newFire);
                    this.setState({
                        cycleFireCount: cycleFireCount
                    })
                } else {
                    clearInterval(this.timing);
                }
            }, 100)
    }

    //加快数字增加速度
    handleAddSpeed = () => {
        this.props.addSpeed();
    }

    //减慢数字增加速度
    handleSubtractSpeed = () => {
        this.props.subtractSpeed();
    }


    handleChange = (event) => {
        this.setState({ number: event.target.value ? parseInt(event.target.value) : '' });
    }


    render() {
        let content;
        let clickEvent;
        let resetBtn;
        let speedBtnAddBtn;
        let speedBtnSubtractBtn;
        if (this.props.runNumberState === 1) {
            content = "点击开始";
            clickEvent = this.handleClickStart;
            this.newRound = true;
            speedBtnAddBtn = <button className="Component-Stop-Button" onClick={this.handleAddSpeed}>加速</button>
            speedBtnSubtractBtn = <button className="Component-Stop-Button" onClick={this.handleSubtractSpeed}>减慢</button>
        } else if (this.props.runNumberState === 2) {
            content = this.props.number;
            clickEvent = this.handleClickStop;
        } else if (this.props.runNumberState === 3) {
            content = this.props.number;
            console.log(content)
            clickEvent = this.handleClickStop;
            resetBtn = <div onClick={this.handleResetRunNumber}> 重置</div>
        }


        if ((this.props.runNumberState === 3)
            && (content === this.state.number)
        ) {
            this.handleAddFireCount();
        }

        return (
            <div className="Component-Stop-Number" >
                <div>
                    {/* <div>试试停到{this.props.stopNumber}</div> */}
                    <div>试试停到<input className="Component-Stop-Input" value={this.state.number} onChange={this.handleChange}></input></div>
                    {speedBtnAddBtn}
                    <span className="Component-Stop-Span" onClick={clickEvent}>{content}</span>
                    {speedBtnSubtractBtn}
                    {resetBtn}
                </div>
                <div style={{ top: "0px" }}>
                    {this.state.cycleFireCount.map((fire, index) => {
                        return (
                            <Fire
                                key={index}
                                left={fire.left}
                                top={fire.top}
                            ></Fire>)
                    })}
                </div>
            </div>
        )
    }

}



