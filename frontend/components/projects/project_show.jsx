import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import sanitizeHtml from 'sanitize-html';

export default class ProjectShow extends React.Component {

  componentDidMount() {
    if (this.props.project) {
      this.project = this.props.project;
    } else {
      this.project = this.props.fetchProject(this.props.projId);
    }
  }

  render () {
    if (!this.props.project) {
      return null;
    }
    const {title, blurb, img_url, category, story, goal, pledged_amount}
     = this.props.project;
     console.log(goal);
    const statusWidth = Math.floor((pledged_amount / goal) * 100);
    const cleanHtml = () => ({__html: sanitizeHtml(story)});
    return (
      <div className="project-show-container">
        <header className="project-show-header">
          <div className="project-show-user">
            <i className="material-icons">mood</i>
            <p>By {this.props.creator.username}</p>
          </div>
          <div className="project-show-intro">
            <div className="project-show-title">{title}</div>
            <div className="project-show-blurb">{blurb}</div>
          </div>
        </header>
        <section className="project-show-info">
          <Image publicId={img_url}>
            <Transformation quality="auto" fetchFormat="auto" />
          </Image>
          <aside className="project-show-aside">
            <div className="project-aside-status">
              <div className="project-bar-percent"
                style={{width: `${statusWidth}%`}}>
              </div>
              <div className="project-bar-unfunded">
              </div>
            </div>
            <div className="project-aside-goal">
              <p className="project-aside-subtitle">${pledged_amount}</p>
              <p className="project-aside-detail">pledged of ${goal} goal</p>
            </div>
              <p className="project-aside-category">{category}</p>
          </aside>
        </section>
        <section className="project-show-body">
          <p>About:</p>
          <div className="project-show-story"dangerouslySetInnerHTML={cleanHtml()}>
          </div>
          <div className="project-backing-options">
            HEY PAY ME!
          </div>
        </section>
      </div>
    );
  }
}
