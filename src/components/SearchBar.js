import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    const { term } = this.state;

    return (
      <input
        value={term}
        onChange={event => {
          this.setState({ term: event.target.value });
        }}
      />
    );
  }
}

export default SearchBar;
