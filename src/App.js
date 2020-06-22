import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import SuccessNotification from "./components/successNotification";
import ErrorNotification from "./components/errorNotification";
import LoginForm from "./components/login";
import CreateBlog from "./components/createBlog";
import Togglable from "./components/togglable";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleUsernameChange = ({ target }) => setUsername(target.value);

  const handlePasswordChange = ({ target }) => setPassword(target.value);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong username or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleCreateBlog = async (event) => {
    event.preventDefault();
    try {
      await blogService.create({
        title,
        author,
        url,
      });
    } catch (exception) {
      setErrorMessage("Error, blog not created");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
    setSuccessMessage(`a new blog ${title} by ${author} added`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);

    try {
      setBlogs(await blogService.getAll());
    } catch (error) {
      setErrorMessage(`The following error was detected: ${error}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const showBlogs = () => (
    <div>
      {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser");
    window.location.reload();
  };

  return (
    <div>
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <h2>blogs</h2>
      {user === null ? (
        <LoginForm
          username={username}
          password={password}
          handleLogin={handleLogin}
          handlePasswordChange={handlePasswordChange}
          handleUsernameChange={handleUsernameChange}
        />
      ) : (
        <div>
          {" "}
          <p>
            {user.name} logged in{" "}
            <button type="button" onClick={handleLogout}>
              logout
            </button>
          </p>
          <Togglable buttonLabel="Create">
            <CreateBlog
              title={title}
              author={author}
              url={url}
              handleTitleChange={({ target }) => setTitle(target.value)}
              handleAuthorChange={({ target }) => setAuthor(target.value)}
              handleUrlChange={({ target }) => setUrl(target.value)}
              handleCreateBlog={handleCreateBlog}
            />
          </Togglable>
          {showBlogs()}
        </div>
      )}
    </div>
  );
};

export default App;
