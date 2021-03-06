import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    const { onSearchTermChange } = this.props;
    onSearchTermChange(term);
    this.setState({ term });
  }

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar">
        <input
          value={term}
          onChange={event => {
            this.onInputChange(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
