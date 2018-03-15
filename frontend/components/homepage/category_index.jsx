import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { isEmpty } from 'lodash';

import ProjectsCategoryItem from './category_index_item';

export default class ProjectsCategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Design & Tech"
    };
    this.selectTab = this.selectTab.bind(this);
  }

  componentWillReceiveProps (nextProps) {

  }

  selectTab (e) {
    if (this.state.category !== e.currentTarget.innerText) {
      this.props.fetchIndex(e.currentTarget.innerText).then(
      this.setState({category: e.currentTarget.innerText}));
    }
  }

  render () {
    if (isEmpty(this.props.projects)) return <div></div>;
    const categories = ["Design & Tech", "Food & Craft", "Games",
    "Film", "Publishing", "Arts", "Music", "Comics & Illustration"];
    const featured = this.props.projects[0];
    return (
      <div className="project-index-container">
        <nav className="category-tags-nav">
          {categories.map( (category, i) => {
            let klass = "";
            if (category === this.state.category) {
              klass = "active-tab";
            } else {
              klass = "category-tab";
            }
            return (
              <button className={klass} onClick={this.selectTab} key={i}>
                {category}
              </button>
            );
          }
          )}
        </nav>
        <div className="category-index-view">
          <p className="category-title">{this.state.category}</p>
          <div className="category-projects-container">
            <div className="featured-project">
              <Image publicId={featured.img_url}>
                <Transformation quality="auto:eco" fetchFormat="auto" />
                <Transformation width="650" height="650" crop="lfill" gravity="center" />
              </Image>
              <p className="project-feature-title">
                {featured.title}
              </p>
              <p className="project-feature-creator">
                By {this.props.creators[featured.creator_id].username}
              </p>
              <p className="project-feature-count">
                {Math.floor(featured.pledged_amount / featured.goal * 100)}% funded
              </p>
            </div>
            <div className="category-projects-list">
              {this.props.projects.slice(1).map( (proj) => {
                return <ProjectsCategoryItem
                  title={proj.title}
                  image={proj.img_url}
                  funded={Math.floor(proj.pledged_amount / proj.goal * 100)}
                  key={proj.id} />;
                }
              )}
            </div>
          </div>
        </div>
      </div>
      );
    }




}
