import React from "react";

const WordsList = props => {
  console.log(props.list);
  let wordsList = null;
  if (props.list !== null) {
    wordsList = (
      <div>
        {props.list}
        <button>Generate calendar</button>
      </div>
    );
  }

  return wordsList;
};

export default WordsList;
