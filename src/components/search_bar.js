import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <input className="list-group-item"
          value={this.state.term}//using this line of code it becomes controlled component
          onChange={event => this.setState({ term: event.target.value })}//ES6 format
        />
      </div>
    );
  }
}

export default SearchBar;
