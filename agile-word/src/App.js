import React, { Component } from "react";
import CalendarItem from "./CalendarItem/CalendarItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ word: "Scrum" }, { word: "Sprint" }, { word: "Product owner" }],
      showList: false,
      buttonText: "Expand List"
    };
  }

  showListHandler = () => {
    const isVisible = this.state.showList;
    this.setState({ showList: !isVisible });
    if (this.state.buttonText.toLowerCase() === "collapse list") {
      this.setState({ buttonText: "Expand List" });
    } else {
      this.setState({ buttonText: "Collapse List" });
    }
  };

  render() {
    let wordsList = null;

    if (this.state.showList === true) {
      wordsList = this.state.items.map(el => {
        return <CalendarItem word={el.word} />;
      });
    }

    return (
      <div>
        {wordsList}
        <button onClick={this.showListHandler}>{this.state.buttonText}</button>
        <button>Generate calendar</button>
      </div>
    );
  }
}

export default App;
