import React from 'react';

import DiscoverItem from './discover_item';

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
      category: props.category
    };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.searchIndex({
      query: this.state.query, category: this.state.category
    });
  }

  update(field) {
    console.log(this.props);
    return e => {
      e.preventDefault();
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSearch() {
    this.props.history.push(`/discover/${this.state.category}?${this.state.query}`);
    this.props.searchIndex({
      query: this.state.query, category: this.state.category
    });
  }

  render() {
    const categories = [
      "Comics & Illustration", "Film", "Games", "Food & Craft",
      "Arts", "Design & Tech", "Publishing", "Music"
    ];
    const proj = this.props.projects;
    if (!proj) {
      return null;
    } else {
      return (
        <div className="discover-container">
          <div className="discover-header">
            <div className="discover-search">
              <span>Search for </span>
              <input type="text"
                className="discover-search-bar"
                onChange={this.update('query')}
                value={this.state.query}
              />
              <span>in</span>
              <select className="discover-category-list"
                value={this.state.category}
                onChange={this.update('category')}>
                <option className="discover-category"
                value="all">All Categories</option>
                {categories.map((cat, idx) => {
                  return (
                    <option className="discover-category"
                      key={idx}
                      value={cat}>
                      {cat}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="discover-search-button"
              onClick={this.handleSearch}>
              <span>Find Projects</span>
            </div>
          </div>
          <div className="discover-projects-container">
            <span>Discover {this.props.results.length} projects</span>
            <div className="discover-projects-list">
              {this.props.results.map((projId) => {
                return (
                  <DiscoverItem project={proj[projId]}
                    creator={
                      this.props.creators[proj[projId].creator_id]
                    }
                    key={projId} />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}
