import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';

export default class ProjectStory extends React.Component {
  constructor(props) {
    super(props);
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
              value={this.props.story}
              onChange={this.props.handleChange}
              modules={ quillModules }
              placeholder="Make your case..."
            />
          </div>
        </form>
      </div>
    );
  }
}
