import React, { useState } from "react";

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
};

const Blog = ({ blog, handleLikeButton, handleDeleteButton, showDeleteButton }) => {
  const [blogVisible, setBlogVisible] = useState(false);
  const hideWhenVisible = { display: blogVisible ? "none" : "" };
  const showWhenVisible = { display: blogVisible ? "" : "none" };
  console.log(showDeleteButton)
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
      <div style={showWhenVisible}>
        <div>{blog.author} </div>
        <div>{blog.url} </div>
        <div>
          {blog.likes}
          <button onClick={() => handleLikeButton(blog)}>like</button>
        </div>
        <button style = {showDeleteButton} onClick={() => handleDeleteButton(blog)}>delete</button>
      </div>
    </div>
  );
};

export default Blog;
