import React from "react";
import ReactDOM from "react-dom";
require ('./styles.scss')

const Message = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

ReactDOM.render(
  <Message title="Email Joe" message="Can you email him?" />,
  document.getElementById("react-container")
);
