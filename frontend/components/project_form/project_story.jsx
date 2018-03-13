import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';

export default class ProjectStory extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.setState(this.props.currentProject);
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps.currentProject);
  }

  handleChange(html) {
    this.setState({ story: html });
  }

  render() {
    const quillModules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        matchVisual: false,
      }
    };
    return (
      <div className="project-child-container">
        <header className="project-child-header">
          <p className="project-child-greeting">
            What's your story?
          </p>
          <p className="project-child-description">
            Tell us more about your project and yourself. Why did you decide
            to start your project, and what future for it do you envision?
            Be sure to get specific about why people should be excited.
          </p>
        </header>
        <form className="project-child-form">
          <div className="project-form-story">
            <ReactQuill
              theme="snow"
              value={this.state.story}
              onChange={this.handleChange}
              modules={ quillModules }
              placeholder="Make your case..."
            />
          </div>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.updateCurrentProject(Object.assign({}, this.state));
  }
}
