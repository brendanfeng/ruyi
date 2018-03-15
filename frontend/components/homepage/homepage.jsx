import React from 'react';

import ProjectsCategoryIndex from './category_index';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIndex("Design & Tech");
    this.props.fetchHeader();
  }

  render() {
    if (!this.props.indexHeader.publicCount) return null;
    const date = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return (
    <div className="homepage-container">
      <header className="homepage-header-container">
        <section className="homepage-header-outer"></section>
        <div className="homepage-header-parent">
          <section className="homepage-header-inner">
            <p className="header-subtitle">
              {date.toLocaleDateString('en-US', options)}
            </p>
            <p className="header-content">
              Materializing your desires into reality.
            </p>
          </section>
          <section className="homepage-header-inner box-grow">
            <p className="header-subtitle">
              Total RuYists
            </p>
            <p className="header-content">
              {this.props.indexHeader.usersCount.toLocaleString()}
            </p>
          </section>
          <section className="homepage-header-inner box-grow">
            <p className="header-subtitle">
              Live Projects
            </p>
            <p className="header-content">
              {this.props.indexHeader.publicCount.toLocaleString()}
            </p>
          </section>
          <section className="homepage-header-inner">
            <p className="header-subtitle">
              Funded Projects
            </p>
            <p className="header-content">
              {this.props.indexHeader.fundedCount.toLocaleString()}
            </p>
          </section>
        </div>
        <section className="homepage-header-outer"></section>
      </header>
      <ProjectsCategoryIndex
        projects={this.props.projects}
        creators={this.props.creators}
        fetchIndex={this.props.fetchIndex}
        />
    </div>
  );
  }

}
