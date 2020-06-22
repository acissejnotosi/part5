import React from "react";

const createBlog = (props) => (
  <form onSubmit={props.handleCreateBlog}>
    <h2>create new</h2>
    <div>
      title
      <input
        type="text"
        value={props.title}
        name="title"
        onChange={props.handleTitleChange}
      />
    </div>
    <div>
      author
      <input
        type="text"
        value={props.author}
        name="author"
        onChange={props.handleAuthorChange}
      />
    </div>
    <div>
      url
      <input
        type="text"
        value={props.url}
        name="url"
        onChange={props.handleUrlChange}
      />
    </div>
    <button type="submit">create</button>
  </form>
);

export default createBlog;
