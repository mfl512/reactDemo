import React from "react";
import PropTypes from "prop-types";
import EmojiResultRow from "./EmojiResultRow";

export default class EmojiResults extends React.Component {
    static propTypes = {
        emojiData: PropTypes.array,
    }

    handleGetLetter = (letter) => {
        this.props.getLetter(letter);
    }

    render() {
        return (
            <div className="component-emoji-results">
                {this.props.emojiData.map((emojiData, index) => (
                    <EmojiResultRow
                        key={emojiData.title}
                        symbol={emojiData.symbol}
                        title={emojiData.title}
                        clickGetLetter={this.handleGetLetter}
                        index={index}
                        gameType={this.props.gameType}
                    ></EmojiResultRow>
                ))
                }
            </div>
        )
    }
}