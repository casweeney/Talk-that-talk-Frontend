import React, { useContext, useEffect } from "react";
import Post from "./Post";
import PostContext from "../../context/post/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { getPosts, posts, loading } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mt-4">
      {posts !== null &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
