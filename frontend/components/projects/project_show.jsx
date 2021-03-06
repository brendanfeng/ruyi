import React from 'react';
import ReactQuill from 'react-quill';
import {Redirect, Link} from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import { merge } from 'lodash';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      pledged_amount: 0
    };
    this.handlePledge = this.handlePledge.bind(this);
    this.setPledge = this.setPledge.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchProject) {
      this.props.fetchProject(this.props.projId).then(res => {
        return this.setState({
          pledged_amount: res.project.pledged_amount
        });
      });
    }
  }

  renderEditButton () {
    if (this.props.currentUser.id === this.props.project.creator_id) {
      return (
        <Link to={`/projects/update/${this.props.projId}/basics`}
          className="edit-button">Edit Project</Link>
      );
    } else {
      return (<div></div>);
    }
  }

  setPledge(e) {
    this.setState({pledged_amount: e.currentTarget.value});
  }

  handlePledge(e) {
    e.preventDefault();
    const newPledge = merge({}, this.props.project, {pledged_amount: this.state.pledged_amount});
    // NEEDS DISPATCH ACTION HERE
  }

  renderPledgeButton() {
    if (this.props.project.creator_id && this.props.currentUser.id !== this.props.project.creator_id) {
      return (
        <form>
          <input type="number" onChange={this.setPledge}
            value={this.state.pledged_amount}
            className="pledge-button">
          </input>
          <button onClick={this.handlePledge}>
            Back Project
          </button>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }

  privateMessage() {
    if (!this.props.project.public) {
      return (
        <div className="private-message">
          <p>THIS PROJECT IS NOT LIVE</p>
          <p>This is only a draft that you can preview</p>
        </div>
      );
    }
  }

  render () {
    if (!this.props.project) {
      return null;
    }
    const {title, blurb, img_url, category, story, goal, pledged_amount}
     = this.props.project;
    let statusWidth = Math.floor((pledged_amount / goal) * 100);
    if (statusWidth > 100) statusWidth = 100;
    if (!statusWidth) statusWidth = 0;
    return (
      <div className="project-show-container">
        {this.privateMessage()}
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
          <div className="project-show-image">
            <Image publicId={img_url}>
              <Transformation quality="auto:eco" fetchFormat="auto" />
              <Transformation width="850" height="550" crop="limit" />
            </Image>
          </div>
          <aside className="project-show-aside">
            <div className="project-aside-progress">
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
            </div>
            <div className="project-aside-bottom">
              <p className="project-aside-category">{category}</p>
              {this.renderEditButton()}
            </div>
          </aside>
        </section>
        <section className="project-show-body">
          <div className="project-show-story">
            <ReactQuill
              theme="bubble"
              modules={ {toolbar: null} }
              readOnly={ true }
              value={this.props.project.story}
              />
          </div>
          <div className="project-backing-options">
            {this.renderPledgeButton()}
          </div>
        </section>
      </div>
    );
  }
}
