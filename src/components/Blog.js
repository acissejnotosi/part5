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
    <div style={blogStyle}>
      {" "}
      {blog.title}
      <button style={hideWhenVisible} onClick={() => setBlogVisible(true)}>
        view
      </button>
      <button style={showWhenVisible} onClick={() => setBlogVisible(false)}>
        hide
      </button>
      <div style={showWhenVisible}>{blog.author} </div>
      <div style={showWhenVisible}>{blog.url} </div>
      <div style={showWhenVisible}>{blog.likes} </div>
    </div>
  );
};

export default Blog;
