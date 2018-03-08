import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, {username: "user"});
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.navLink}
          <span className="login-form-title">{this.props.formType}</span>
          {this.renderErrors()}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
          <button type="submit" className="session-submit">
            { this.props.buttonText }
          </button>
          <div className="login-form-alt">
            Don't have an account? Try the
            <Link to="/" className="login-form-demo"> Demo Login</Link>
          </div>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
}

export default withRouter(SessionForm);
