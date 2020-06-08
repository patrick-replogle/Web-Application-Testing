import React from "react";

const Display = props => {
  return (
    <div className="displayContainer">
      <div className="ballsContainer">
        <p>Balls: </p>
        <div>{props.balls}</div>
      </div>
      <div className="ballsContainer">
        <p>Strikes:</p>
        <div>{props.strikes}</div>
      </div>
    </div>
  );
};

export default Display;
