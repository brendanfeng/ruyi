import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

import { updateCurrentProject } from '../../actions/ui_actions';

export default class ProjectBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.currentProject);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
    {upload_preset: "blqvznu6",
      multiple: false,
      client_allowed_formats: ["png","gif", "jpeg"]},
    (error, result) => {
      if (error === null) {
        this.setState({img_url: result[0].public_id,
        uploadedfile: result[0].original_filename});
      }}
    );
  }

  render() {
    return (
      <div className="project-child-container">
        <header className="project-child-header">
          <p className="project-child-greeting">
            Let's get started.
          </p>
          <p className="project-child-description">
            Make a great first impression with your project’s title and image,
             write an attention-grabbing blurb, and
             set your funding goal and project category.
          </p>
        </header>
        <form className="project-child-form">
          <label className="project-title">
            <span>Project Title</span>
            <div className="project-title-field">
              <input type="text" maxLength="100" value={this.state.title}>
              </input>
              <p>
                Your title expresses your project,
                so please be clear and descriptive of what you’re making.
                (Maximum of 100 characters)
              </p>
            </div>
          </label>
          <label className="project-blurb">
            <span>Short Blurb</span>
            <div>
              <textarea maxLength="250" value={this.state.blurb}></textarea>
              <p>
                Give people a sense of what you’re doing.
                Skip “Help me” and focus on what you’re making.
                (Maximum of 250 characters)
              </p>
            </div>
          </label>
          <label className="project-image-upload">
            <span>Project Image</span>
            <div className="project-image-widget">
              <button onClick={this.handleUpload}>Upload Image</button>
              <p className="image-filename">{this.state.uploadedfile || ""}</p>
              <p>This is the first thing that people will see when they come
                across your project.
                Choose an image that’s crisp and text-free.</p>
            </div>
          </label>
          <label className="project-category">
            <span>Category</span>
          <select className="project-category-dropdown">
            <option>Design & Tech</option>
            <option>Arts</option>
            <option>Music</option>
            <option>Comics & Illustration</option>
            <option>Film</option>
            <option>Games</option>
            <option>Food & Craft</option>
            <option>Publishing</option>
          </select>
          </label>
          <label className="project-goal">
            <span>Fundraising Goal ($)</span>
            <div>
              <input type="number" value={this.state.goal}></input>
              <p>
                Funding on RuYi is all-or-nothing.
                It’s okay to raise more than your goal,
                but if your goal isn’t met,
                no money will be collected. Your goal should reflect
                the minimum amount of funds you need to complete your
                project.
              </p>
            </div>
          </label>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    updateCurrentProject(Object.assign({}, this.state));
  }
}
