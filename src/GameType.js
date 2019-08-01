import React from "react";
import PropTypes from "prop-types";
import "./GameType.css";

export default class GameType extends React.Component {
    static propTypes = {
        gameType: PropTypes.array
    }

    handleClickGame = (game)=>{
       this.props.chooseGameType(game);
    }

    render() {
        return (
            <div className="Component-GameType-List">
                {this.props.gameType.map((game) =>
                    (<button key={game.title}
                        onClick={this.handleClickGame.bind(this,game)}
                    >{game.title}</button>)
                )}
            </div>
        );
    }
}