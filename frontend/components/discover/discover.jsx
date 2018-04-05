import React from 'react';

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
      category: props.category
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    console.log(this.state)
    this.props.searchIndex({
      query: this.state.query, category: this.state.category
    });
  }

  handleQuery(e) {
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchIndex({
      query: this.state.query, category: this.state.category
    });
  }

  render() {
    return (
      <div className="discover-container">
        <input type="text"
          className="discover-search-bar"
          onChange={this.handleQuery}
          value={this.state.query}
        />
        <div className="discover-search-button"
        onClick={this.handleSearch}>
          <span>Search</span>
        </div>
      </div>
    );
  }
}
