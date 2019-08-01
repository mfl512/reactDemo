import React from 'react';
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";
import filterEmoji from "./filterEmoji";
import GameType from "./GameType";
import StopRightNow from "./StopRightNow";

import "./App.css";

const RUNNUMBERTYPE = {
    readyStart: 1,
    running: 2,
    stopNumber: 3
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.fruitIndex = 0;
        this.totalFilterdEmoji = filterEmoji.filterEmoji("", 26);
        this.state = {
            tipsValue: filterEmoji.getWordLetter(this.fruitIndex),
            filteredEmoji: filterEmoji.filterEmoji("", 26).reverse(),
            showTips: false,
            gameType: 1,
            score: 0,
            time: 0,
            value: '',
            testArray: ['Laurel', 'Laurel'],
            gameTypeList: filterEmoji.getGameType(),
            showGameType: filterEmoji.getGameType()[1],
            number: 0,
            runNumberState: RUNNUMBERTYPE.readyStart,
            stopNumber: 33,
        };
        this.runNumberTimeInterval = 50;
    }

    componentDidMount() {
        this.hanldClickGameType(this.showGameType)
    }

    handleStartTiming = () => {
        this.timerID = setInterval(
            () => {
                let time = this.state.time + 1;
                this.setState({
                    time: time
                })
            }, 1000
        );
    }

    handleCreateEmojiRow() {
        this.createEmojiTimer = setInterval(() => {
            if (this.state.gameType === 2 && this.totalFilterdEmoji.length > 0) {
                let filteredItem = this.totalFilterdEmoji.shift();
                let filterEmoji = this.state.filteredEmoji;
                filterEmoji.push(filteredItem);
                this.setState({
                    filteredEmoji: filterEmoji,
                })
            } else {
                clearInterval(this.createEmojiTimer);
            }
        }, 200)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //显示提示
    handleShowTips = () => {
        this.setState({ showTips: true, })
    }
    //隐藏提示
    handleHideTips = () => {
        this.setState({ showTips: false, })
    }

    //获取点击的字母
    handleGetLetter = (letter) => {
        const testArray = this.state.testArray;
        testArray.push('Laurel');
        this.setState(() => ({
            testArray: testArray,
        }))


        // let value = this.state.value + letter;
        // this.setState({ value: value })

        // if (value === this.state.tipsValue.name) {
        //     let score = this.state.score + 1;
        //     this.fruitIndex++;
        //     this.setState({
        //         score: score,
        //         tipsValue: filterEmoji.getWordLetter(this.fruitIndex),
        //         value: '',
        //     })

        //     if (score > 0 && this.state.gameType === 1) {
        //         this.setState({
        //             gameType: 2,
        //             filteredEmoji: []
        //         })
        //         this.handleCreateEmojiRow();
        //     }
        // }
    }

    handleDeleterLetter = () => {
        let value = this.state.value.substring(0, this.state.value.length - 1);
        this.setState({
            value: value,
        })
    }

    //选择游戏类型
    hanldClickGameType = (game) => {
        if (!game || !game.title) return;

        this.setState({ showGameType: game })

        if (game.title === "study English") {
            this.handleStartTiming();
            this.setState({ runNumberState: RUNNUMBERTYPE.stopNumber })
            clearInterval(this.runNumberTimer);
        } else if (game.title === "stop number") {
            clearInterval(this.timerID);
        }
    }

    //开始跑数字
    handleClickStart = () => {
        this.setState({
            number: 0,
            runNumberState: RUNNUMBERTYPE.running,
        })
        this.runNumberTimer = setInterval(() => {
            let number = this.state.number + 1;
            this.setState({
                number: number
            })
        }, this.runNumberTimeInterval)
    }

    //暂停数字
    handleClickStop = () => {
        this.setState({ runNumberState: RUNNUMBERTYPE.stopNumber })
        clearInterval(this.runNumberTimer);
    }

    //重置开始
    handleResetRunNumber = () => {
        this.setState({ runNumberState: RUNNUMBERTYPE.readyStart })
    }
    //加快数字增加速度
    handleAddSpeed = () => {
        if (this.runNumberTimeInterval > 5) {
            this.runNumberTimeInterval -= 5;
        } else {
            alert('太快啦，不能再加速啦')
        }
    }
    //减慢数字增加速度
    handleSubtractSpeed = () => {
        this.runNumberTimeInterval += 5;
    }

    render() {
        let gameContent;
        switch (this.state.showGameType.title) {
            case "study English":
                gameContent =
                    <div>
                        <SearchInput
                            textChange={this.handleSearchChange}
                            showTips={this.handleShowTips}
                            hideTips={this.handleHideTips}
                            state={this.state}
                            deleterLetter={this.handleDeleterLetter}
                            gameType={this.state.gameType}
                        ></SearchInput>
                        <EmojiResults
                            gameType={this.state.gameType}
                            emojiData={this.state.filteredEmoji}
                            getLetter={this.handleGetLetter}>
                        </EmojiResults>
                    </div>
                break;
            case "stop number":
                gameContent =
                    <div>
                        <StopRightNow
                            number={this.state.number}
                            runNumberState={this.state.runNumberState}
                            startRunNumber={this.handleClickStart}
                            stopRunNumber={this.handleClickStop}
                            restartRunNumber={this.handleResetRunNumber}
                            stopNumber={this.state.stopNumber}
                            addSpeed={this.handleAddSpeed}
                            subtractSpeed={this.handleSubtractSpeed}
                        ></StopRightNow>
                    </div>;
                break;
            default:
                break;
        }
        return (
            <div>
                <Header></Header>
                <GameType
                    gameType={this.state.gameTypeList}
                    chooseGameType={this.hanldClickGameType}
                ></GameType>
                {gameContent}

            </div>
        )
    };
}
