import React from "react";
import PropTypes from "prop-types";
import "./StopRightNow.css";


export default class Fire extends React.Component {
    static propTypes = {
        left: PropTypes.number,
        top: PropTypes.number,
    }


    render() {
        if (!this.bigColor) {
            let colorArray = ["drop", "dropA", "dropB", "dropC", "dropD", "dropE"]
            this.bigColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            this.smallColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        }
        return (
            <div className="firework size05 " style={{ left: this.props.left + '%', top: this.props.top + '%' }}>
                <div className="drops-grp">
                    <span className={`${this.bigColor} drop-1`}></span>
                    <span className={`${this.bigColor} drop-2`}></span>
                    <span className={`${this.bigColor} drop-3`}></span>
                    <span className={`${this.bigColor} drop-4`}></span>
                </div>
                <div className="drops-grp drops-grp2">
                    <span className={`${this.bigColor} drop-1`}></span>
                    <span className={`${this.bigColor} drop-2`}></span>
                    <span className={`${this.bigColor} drop-3`}></span>
                    <span className={`${this.bigColor} drop-4`}></span>
                </div>
                <div className="firework size05 " style={{ left: this.props.left + '%', top: this.props.top + '%' }}>
                    <div className="drops-grp">
                        <span className={`${this.smallColor} drop-1`}></span>
                        <span className={`${this.smallColor} drop-2`}></span>
                        <span className={`${this.smallColor} drop-3`}></span>
                        <span className={`${this.smallColor} drop-4`}></span>
                    </div>
                    <div className="drops-grp drops-grp2">
                        <span className={`${this.smallColor} drop-1`}></span>
                        <span className={`${this.smallColor} drop-2`}></span>
                        <span className={`${this.smallColor} drop-3`}></span>
                        <span className={`${this.smallColor} drop-4`}></span>
                    </div>
                </div>
            </div>
        )
    }
}