import React, { useState } from "react";

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
};

const Blog = ({ blog }) => {
  const [blogVisible, setBlogVisible] = useState(false);

  const hideWhenVisible = { display: blogVisible ? "none" : "" };
  const showWhenVisible = { display: blogVisible ? "" : "none" };
  return (
    <div>
      <div style={blogStyle}>
        {" "}
        {blog.title}
        <button style={hideWhenVisible} onClick={() => setBlogVisible(true)}>
          view
        </button>
        <button style={showWhenVisible} onClick={() => setBlogVisible(false)}>
          hide
        </button>
      </div>
      <div style={showWhenVisible}>
        <div style={blogStyle}>
          <div>{blog.author} </div>
          <div>{blog.url} </div>
          <div>{blog.likes} </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
