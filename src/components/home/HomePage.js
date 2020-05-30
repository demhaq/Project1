import React from "react";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron mt-3">
        <h1>Welcome To ABC Mart</h1>
        <a href="/about">
          <button className="btn btn-danger mt-1">About</button>
        </a>
      </div>
    );
  }
}
