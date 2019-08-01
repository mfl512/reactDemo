import React from "react";
import "./SearchInput.css";

export default class SearchInput extends React.Component {


    hanleTextChange = event => {
        this.props.textChange(event.target.value);
    }

    handleTouchStart = () => {
        this.props.showTips();
    }
    handleTouchCancel = () => {
        this.props.hideTips();
    }
    handleDeleteLetter = () => {
        this.props.deleterLetter();
    }

    render() {
        const showInput = this.props.state.showTips ?
            <input id="component-tips" readOnly onChange={this.hanleTextChange} value={this.props.state.tipsValue.name} />
            : <input readOnly onChange={this.hanleTextChange} value={this.props.state.value} />;
        return (
            <div>
                <div className="component-search">
                    {/* {this.props.state.tipsValue.value}: */}
                    {this.props.state.testArray}:
                    {showInput}
                    <button onClick={this.handleDeleteLetter}>x</button>
                    <span>score:{this.props.state.score}</span>
                    <span>
                        <button
                            onMouseDown={this.handleTouchStart}
                            onMouseUp={this.handleTouchCancel}
                        >提示</button>
                    </span>
                    <span>{this.props.state.time}s</span>
                </div>
            </div>
        )
    };
};