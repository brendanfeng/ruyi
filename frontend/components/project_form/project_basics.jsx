import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

import { updateCurrentProject } from '../../actions/ui_actions';

export default class ProjectBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img_url: '',
      blurb: '',
      category: '',
      goal: 100,
      pledged_amount: 0,
      public: false
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    cloudinary.openUploadWidget(
    {upload_preset: "blqvznu6",
      multiple: false,
      client_allowed_formats: ["png","gif", "jpeg"]},
    (error, result) => {
      if (error === null) {
        this.setState({img_url: result[0].public_id});
      }}
    );
  }

  render() {
    return (
      <div className="project-child-container">
        <header className="project-child-header">
          <p className="project-child-greeting">
            Let's get started
          </p>
          <p className="project-child-description">
            Make a great first impression with your project’s details.
          </p>
        </header>
        <form>
          <label className="project-title">Project Title</label>
          <input type="text"></input>
          <label className="project-blurb">Short Blurb</label>
          <input type="text"></input>
          <label id="project-image-upload">Project Image</label>
          <div className="project-image-widget" >
            <button onClick={this.handleUpload}>Upload Image</button>
            <Image publicId={`${this.state.img_url}`}>
              <Transformation quality="auto" fetchFormat="auto" />
            </Image>
          </div>
          <label className="project-category">Category</label>
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
          <label className="project-goal">Fundraising Goal</label>
          <input type="number"></input>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    updateCurrentProject(Object.assign({}, this.state));
  }
}
