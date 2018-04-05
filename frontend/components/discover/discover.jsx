import React from 'react';
import {isEmpty} from 'lodash'

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
    return e => {
      e.preventDefault();
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSearch(e) {
    e.preventDefault();
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
              <span> in </span>
              <select className="discover-category-list"
                value={this.state.category}
                onChange={this.update('category')}>
                <option value="all">All Categories</option>
                <option value="Design & Tech">Design & Tech</option>
                <option value="Arts">Arts</option>
                <option value="Music">Music</option>
                <option value="Comics & Illustration">Comics & Illustration</option>
                <option value="Film">Film</option>
                <option value="Games">Games</option>
                <option value="Food & Craft">Food & Craft</option>
                <option value="Publishing">Publishing</option>
              </select>
            </div>
            <div className="discover-search-button"
              onClick={this.handleSearch}>
              <p>Find Projects</p>
            </div>
          </div>
          <div className="discover-projects-container">
            <span className="discover-count">Discover {this.props.results.length} projects</span>
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
