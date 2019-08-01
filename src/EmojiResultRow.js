import React, { PureComponent } from "react";
import Proptypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultRow extends PureComponent {


    static proptyps = {
        title: Proptypes.string,
        symbol: Proptypes.string,
        gameType: Proptypes.number,
    }

    handleClick = () => {
        this.props.clickGetLetter(this.props.title);
    }

    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        const className = ["component-letter-item"]
        if (!this.left && this.props.gameType === 1) {
            this.left = (this.props.index % 10) * 100 + 200;
            this.top = Math.floor(this.props.index / 10) * 100 + 300;
            className.push("move1");
            this.gameType = this.props.gameType;
        } else if (this.gameType !== this.props.gameType) {
            this.left = Math.random() * 1000 + 200;
            className.push("component-letter-anima");
            className.push("move" + Math.floor(Math.random() * 5));
            this.gameType = this.props.gameType;
        }
        return (
            <span className={className.join(" ")} style={{ left: this.left, top: this.top }} onClick={this.handleClick}>
                <img alt={this.props.title} src={src} />
            </span>
        )
    };
}