import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import { isEmpty } from 'lodash';

import ProjectsCategoryItem from './category_index_item';

class ProjectsCategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Design & Tech"
    };
    this.selectTab = this.selectTab.bind(this);
    this.goToShow = this.goToShow.bind(this);
  }

  selectTab (e) {
    if (this.state.category !== e.currentTarget.innerText) {
      this.props.fetchIndex(e.currentTarget.innerText).then(
      this.setState({category: e.currentTarget.innerText}));
    }
  }

  goToShow(id) {
    this.props.history.push(`projects/show/${id}`);
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
          <div className="category-title">
            <span>{this.state.category}</span>
            <Link to={`/discover/${this.state.category}`}>
              View All <i className="material-icons">trending_flat</i>
            </Link>
          </div>
          <div className="category-projects-container">
            <div className="featured-project" onClick={() => this.goToShow(featured.id)}>
              <Image publicId={featured.img_url}>
                <Transformation quality="auto:eco" fetchFormat="auto" />
                <Transformation width="650" height="650" crop="lfill" gravity="center" />
              </Image>
              <div className="project-feature-info">
                <div className="project-title-div">
                <p className="project-feature-title">
                  {featured.title}
                </p>
              </div>
                <div>
                <p className="project-feature-creator">
                  By {this.props.creators[featured.creator_id].username}
                </p>
              </div>
                <div className="project-feature-container">
                  <p className="project-feature-funded">
                    {Math.floor(featured.pledged_amount / featured.goal * 100)}% funded
                  </p>
                </div>
              </div>
            </div>
            <div className="category-projects-list">
              {this.props.projects.slice(1).map( (proj) => {
                return <ProjectsCategoryItem
                  id={proj.id}
                  title={proj.title}
                  image={proj.img_url}
                  funded={Math.floor(proj.pledged_amount / proj.goal * 100)}
                  goToShow={this.goToShow}
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

export default withRouter(ProjectsCategoryIndex);
