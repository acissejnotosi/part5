import React from "react";
import PropTypes from 'prop-types'

const loginForm = (props) => (
  <form onSubmit={props.handleLogin}>
    <div>
      username
      <input
        type="text"
        value={props.username}
        name="Username"
        id="username"
        onChange={props.handleUsernameChange}
      />
    </div>
    <div>
      password
      <input
        type="password"
        value={props.password}
        name="Password"
        id="password"
        onChange={props.handlePasswordChange}
      />
    </div>
    <button id="login-button" type="submit">login</button>
  </form>
);

loginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default loginForm;
