import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

export default class ProjectBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      blurb: '',
      img_url: '',
      story: '',
      category: 'Design & Tech',
      pledged_amount: 0,
      goal: 100,
      creator_id: -1
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount () {
    this.setState(this.props.currentProject);
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps.currentProject);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
              <input type="text"
                maxLength="60"
                onChange={this.update('title')}
                value={this.state.title}>
              </input>
              <p>
                Your title expresses your project,
                so please be clear and descriptive of what you’re making.
                (Maximum of 60 characters)
              </p>
            </div>
          </label>
          <label className="project-blurb">
            <span>Short Blurb</span>
            <div>
              <textarea maxLength="130"
                onChange={this.update('blurb')}
                value={this.state.blurb}></textarea>
              <p>
                Give people a sense of what you’re doing.
                Skip “Help me” and focus on what you’re making.
                (Maximum of 130 characters)
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
          <select className="project-category-dropdown" value={this.state.category} onChange={this.update('category')}>
            <option value="Design & Tech">Design & Tech</option>
            <option value="Arts">Arts</option>
            <option value="Music">Music</option>
            <option value="Comics & Illustration">Comics & Illustration</option>
            <option value="Film">Film</option>
            <option value="Games">Games</option>
            <option value="Food & Craft">Food & Craft</option>
            <option value="Publishing">Publishing</option>
          </select>
          </label>
          <label className="project-goal">
            <span>Fundraising Goal ($)</span>
            <div>
              <input type="number" onChange={this.update('goal')} value={this.state.goal}></input>
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
    this.props.updateCurrentProject(Object.assign({}, this.state));
  }
}
