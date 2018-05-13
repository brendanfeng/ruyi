import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({search: e.currentTarget.value});
    // if (e.currentTarget.value >= 3) {
    //   this.props.
    // }
  }

  renderSearchResults() {
    return this.props.searchResults.map((proj) => {
      return (<div className="search-bar-proj" key={proj.id}></div>);
    });
  }

  render() {
    return (<React.Fragment>
      <header className="nav-container">
        <input className="search-header" type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Search for projects"/>
        <span className="close" onClick={() => this.props.setSearchBar(null)}>
          <i className="material-icons">cancel</i>
        </span>
      </header>
      <main className="search-bar-index">
        {this.renderSearchResults()}
      </main>
    </React.Fragment>);
  }
}
