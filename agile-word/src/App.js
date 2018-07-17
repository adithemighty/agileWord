import React, { Component } from "react";
import CalendarItem from "./CalendarItem/CalendarItem";
import WordsList from "./WordsList/WordsList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ word: "Scrum" }, { word: "Sprint" }, { word: "Product owner" }],
      showList: false
    };
  }

  showListHandler = () => {
    const isVisible = this.state.showList;
    this.setState({ showList: !isVisible });
  };

  addItemHandler = () => {

  }

  render() {
    //when wordsList is set to null the list is not visible
    let wordsList = null;
    //wordsList will be assigned the list items here if list is expanded
    if (this.state.showList === true) {
      wordsList = this.state.items.map(el => {
        return <CalendarItem word={el.word} />;
      });
    }

    return (
      <div>
        <button onClick={this.showListHandler}>Toggle list</button>
        
        <WordsList list={wordsList} />
      </div>
    );
  }
}

export default App;
