import React from "react";

const Post = ({ post }) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="card card-body post-card">
          <div className="post-container">
            <a
              href="post.html"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src="img/kk.jpeg" style={{ width: "100px" }} alt="" />
            </a>
            <div className="text-container ml-4">
              <a
                href="post.html"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <p className="text-secondary" style={{ fontSize: "11px" }}>
                  Posted by: casweeney{" "}
                  <span className="pull-right">3 days ago</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default Post;
