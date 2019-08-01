import React from "react";
import "./Header.css";

export default class Header extends React.Component{
    render(){
        return (
            <header className="component-header">
            <img
              src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
              width="32"
              height="32"
              alt=""
            />
            Fun Learning
            <img
              src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
              width="32"
              height="32"
              alt=""
            />
          </header>
        )
    }
}