import React, { useState, useContext } from "react";
import PostContext from "../../context/post/postContext";

const PostForm = () => {
  const postContext = useContext(PostContext);
  const { addPost } = postContext;

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const { title, body } = post;

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addPost(post);

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <div className="row">
      <div className="col-md-1"></div>

      <div className="col-md-10">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="from-group">
            <textarea
              style={{ resize: "none" }}
              placeholder="Write your story"
              name="body"
              cols="30"
              rows="10"
              className="form-control"
              value={body}
              onChange={onChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-3"
            style={{ backgroundColor: "#22656D", borderColor: "#22656D" }}
          >
            Post
          </button>{" "}
          <span className="text-secondary ml-3 pull-right mt-4"> Clear </span>
        </form>
      </div>

      <div className="col-md-1"></div>
    </div>
  );
};

export default PostForm;
