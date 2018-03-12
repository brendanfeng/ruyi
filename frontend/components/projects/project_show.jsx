import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import sanitizeHtml from 'sanitize-html';

export default class ProjectShow extends React.Component {

  render () {
    const {title, blurb, img_url, category, story, goal, pledged_amount}
     = this.props.project;
    const statusWidth = Math.floor(pledged_amount / goal);
    const cleanHtml = () => ({__html: sanitizeHtml(story)});
    return (
      <div className="project-show-container">
        <header className="project-show-header">
          <div className="project-show-user">
            <i className="material-icons">mood</i>
            <p>{this.props.creator.username}</p>
          </div>
          <div className="project-show-intro">
            <p className="project-show-title">{title}</p>
            <p className="project-show-blurb">{blurb}</p>
          </div>
        </header>
        <section className="project-show-info">
          <Image publicId={img_url}>
            <Transformation quality="auto" fetchFormat="auto" />
          </Image>
          <aside>
            <div className="project-status-bar">
              <div className="project-bar-percent"
                style={{width: `${statusWidth}%`}}>
              </div>
            </div>
            <div className="project-show-goal">
              <p>${pledged_amount}</p>
              <span>pledged of a {goal} goal</span>
            </div>
              <p>{category}</p>
          </aside>
        </section>
        <section dangerouslySetInnerHTML={cleanHtml()}>
        </section>
      </div>
    );
  }
}
